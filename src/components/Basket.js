import React, { Component } from 'react'
import UUID from 'uuid'

class Basket extends Component {
  state = {
    newItem: "",
    itemAmount: 1
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleKeyDown = (e) => {
    if(e.key === 'Enter' && this.state.newItem) {
      this.createItem()
    }
  }

  createItem = () => {
    let name = this.state.newItem
    let amount = parseInt(this.state.itemAmount)
    this.props.addItem("basket", {name, amount})
    this.props.addItem("extra", {name, amount})
    this.setState({
      newItem: "",
      itemAmount: 1
    })
  }

  addToBasket = (e) => {
    let name = e.target.name
    let amount = parseInt(e.target.value)
    this.props.removeItem("basket", {name, amount})
  }

  render(){
    return(
      <div id="basket">
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.newItem}
          type="text"
          placeholder="add an item"
          name="newItem"
        />
        <input
          type="number"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.itemAmount}
          name="itemAmount"
          min="1"
        />
        <button onClick={this.createItem}>ADD</button>
        <ul>
          {
            this.props.items.map(item => <li key={UUID()}>{item.amount} {item.name}<button onClick={this.addToBasket} name={item.name} value={item.amount}>added to basket</button></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Basket
