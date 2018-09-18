import React, { Component } from 'react'
import UUID from 'uuid'
import style from "../App.css"

class Extra extends Component {
  removeItem = (e) => {
    let name = e.target.parentElement.parentElement.id
    let amount = parseInt(e.target.parentElement.parentElement.value)
    this.props.removeItem("extra", {name, amount})
  }

  addToBasket = (e) => {
    let name = e.target.parentElement.parentElement.id
    let amount = parseInt(e.target.parentElement.parentElement.value)
    this.props.addItem("basket", {name, amount})
  }

  loadItems = () => {
    let basket = this.props.basket.map(item => item.name)
    let items = this.props.items.filter(item => !basket.includes(item.name))
    return (<div className={style.List}>
      {
        items.map(item => <li key={UUID()} id={item.name} value={item.amount}>{item.amount} {item.name}
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
    </div>)
  }

  render(){
    return(
      <div id="extra">
        {this.loadItems()}
      </div>
    )
  }
}

export default Extra
