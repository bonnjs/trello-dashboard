import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    axios
      .get('https://api.trello.com/1/search', {
        params: {
          key: process.env.REACT_APP_TRELLO_API,
          token: process.env.REACT_APP_TRELLO_TOKEN,
          query: 'due:day',
          modelTypes: 'cards',
          card_members: 'true',
          member_fields: 'avatarHash,fullName,initials,username,confirmed'
        }
      })
      .then(res => {
        const cards = res.data.cards;
        this.setState({ cards: cards });
      });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="App">
        <h1>Cards</h1>
        <ul>
          {this.state.cards.map(card => (
            <li>
              {card.name} (
              {card.members &&
                card.members.map(member => <span> {member.fullName}, </span>)}
              )
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
