import React, { Component } from 'react'
import UUID from 'uuid'
import style from '../App.css'

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
    if(e.key === 'Enter' && this.state.newItem.length > 0) {
      this.createItem()
    }
  }

  createItem = (e) => {
    if(this.state.newItem.length > 0){
      let name = this.state.newItem
      let amount = parseInt(this.state.itemAmount)
      let id = UUID()
      this.props.addItem("basket", {name, amount, id})
      this.props.addItem("extra", {name, amount, id})
      this.setState({
        newItem: "",
        itemAmount: 1
      })
    }
  }

  addToBasket = (e) => {
    let name = e.target.name
    let amount = parseInt(e.target.value)
    let id = e.target.parentNode.parentNode.id
    this.props.removeItem("basket", {name, amount, id})
  }

  render(){
    return(
      <div className={style.List}>
        <div className={style.NewItemFields}>
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
          <button className={style.newItemButton} onClick={this.createItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
        <ul>
          {
            this.props.items.map(item => <li id={item.id}>{item.amount}  {item.name}<p><button onClick={this.addToBasket} name={item.name} value={item.amount}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline></svg>
            </button></p></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Basket
