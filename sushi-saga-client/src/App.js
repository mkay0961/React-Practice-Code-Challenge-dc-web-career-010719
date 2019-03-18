import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushi: [],
      remainingMoney: 100,
      eatenSushi: []
    }
  }
  addMoney= (event) =>{
    event.preventDefault()
    this.setState({
      remainingMoney: this.state.remainingMoney + parseInt(event.target.children[0].value)
    })
    // console.log("money", event.target.children[0].value);
  }

  eatSushi=(sushi)=>{
    console.log("eat that sis", sushi);
    if(this.state.remainingMoney - sushi.price >= 0){
      this.setState({
        remainingMoney: this.state.remainingMoney - sushi.price,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }else{
      alert("Bro you dont have enough money")
    }
  }

  componentDidMount(){
    console.log("mounting");
    fetch(API)
      .then(res => res.json())
      .then(allSushis => {this.setState({
        allSushi: allSushis
      })})
  }



  render() {
    return (
      <div className="app">
        <MoneyForm addMoney={this.addMoney}/>
        <SushiContainer eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} allSushi={this.state.allSushi} />
        <Table emptyArray={this.state.eatenSushi} remainingMoney={this.state.remainingMoney}/>
      </div>
    );
  }
}

export default App;
