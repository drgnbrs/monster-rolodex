import React, { Component } from 'react';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searcField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  };

  render() {
    const { monsters, searcField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searcField.toLowerCase())
      );

      return (
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <CardList monsters={filteredMonsters} />
        </div>
      );
  }
}

export default App;