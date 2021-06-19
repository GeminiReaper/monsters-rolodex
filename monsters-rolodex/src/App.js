import React from "react";

import { CardList } from './components/card-list/card-list.component'

import './App.css';

export default class App extends React.Component {
  constructor(prop) {
    super(prop)

    this.state={
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({monsters: users}));
  }

  render() {
   return (
     <div className="App">

        <CardList monsters={this.state.monsters} />

        
     </div>

   )
  }
  
}