import React, { Component } from 'react'
import UUID from 'uuid'

class Extra extends Component {
  removeItem = (e) => {
    let name = e.target.parentElement.id
    let amount = parseInt(e.target.parentElement.value)
    this.props.removeItem("extra", {name, amount})
  }

  addToBasket = (e) => {
    let name = e.target.parentElement.id
    let amount = parseInt(e.target.parentElement.value)
    this.props.addItem("basket", {name, amount})
  }

  loadItems = () => {
    let basket = this.props.basket.map(item => item.name)
    let items = this.props.items.filter(item => !basket.includes(item.name))
    return (<ul>
      {
        items.map(item => <li key={UUID()} id={item.name} value={item.amount}>{item.amount} {item.name}<button onClick={this.removeItem}>x</button><button onClick={this.addToBasket}>+</button></li>)
      }
    </ul>)
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
