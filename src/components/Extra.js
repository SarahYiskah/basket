import React, { Component } from 'react'
import style from '../App.css'

class Extra extends Component {
  removeItem = (e) => {
    let name = e.target.parentElement.parentElement.title
    let amount = parseInt(e.target.parentElement.parentElement.value)
    let id = e.target.parentElement.parentElement.id
    this.props.removeItem("extra", {name, amount, id})
  }

  addToBasket = (e) => {
    let name = e.target.parentElement.parentElement.title
    let amount = parseInt(e.target.parentElement.parentElement.value)
    let id = e.target.parentElement.parentElement.id
    this.props.addItem("basket", {name, amount, id})
  }

  loadItems = () => {
    let basket = this.props.basket.map(item => item.id)
    let items = this.props.items.filter(item => !basket.includes(item.id))
    return (<ul>
      {
        items.map(item => <li id={item.id} title={item.name} value={item.amount}>{item.amount}  {item.name}
        <p><button onClick={this.removeItem}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button onClick={this.addToBasket}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button></p></li>)
      }
    </ul>)
  }

  render(){
    return(
      <div className={style.List}>
        {this.loadItems()}
      </div>
    )
  }
}

export default Extra
