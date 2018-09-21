import React, { Component } from 'react'
import style from './App.css'
import UUID from 'uuid'

import Nav from './components/Nav'
import Extra from './components/Extra'
import Basket from './components/Basket'



class App extends Component {
  state = {
    active: 'basket',
    basket: [],
    extra: [
      {name: "milk", amount: 1, id: UUID()},
      {name: "cereal", amount: 1, id: UUID()},
      {name: "cheese", amount: 1, id: UUID()}
    ]
  }

  changeActive = (active) => {
    this.setState({active})
  }

  addItem = (target, item) => {
    this.setState({
      [target]: [...this.state[target], item]
    })
  }

  removeItem = (target, item) => {
    this.setState({
      [target]: [...this.state[target].filter(i => i.id !== item.id)]
    })
  }

  render() {
    return (<div className={style.App}>
      <Nav changeActive={this.changeActive} active={this.state.active}/>
      { this.state.active === "basket" &&  <Basket items={this.state.basket} addItem={this.addItem} removeItem={this.removeItem}/> }
      { this.state.active === "extra" &&  <Extra items={this.state.extra} basket={this.state.basket} removeItem={this.removeItem} addItem={this.addItem}/> }
    </div>)
  }
}

export default App
