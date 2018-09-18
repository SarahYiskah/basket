import React, { Component } from 'react'
import UUID from 'uuid'
import style from "../App.css"

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
      <div className={style.List}>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.newItem}
          type="text"
          placeholder="New item"
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
        <button onClick={this.createItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div>
          {
            this.props.items.map(item => <li key={UUID()}>{item.amount} {item.name}<p><button onClick={this.addToBasket} name={item.name} value={item.amount}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline></svg>
            </button></p></li>)
          }
        </div>
      </div>
    )
  }
}

export default Basket
