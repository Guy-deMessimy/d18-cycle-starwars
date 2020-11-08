import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './CharacterList';

class CharacterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        id: 0,
        name: '',
        pic: '',
        homeworld: ''
      }
    };
  }

 componentDidUpdate (prevProps) {
    const {match : {params: {characterId } } } = this.props;
    const prevPropsId = prevProps.match.params.characterId;
    if (prevPropsId !== characterId) {
      this.loadCharacterDetails(characterId);
    }
 }

  componentDidMount() {
    const { match: { params: { characterId } } } = this.props;
    this.loadCharacterDetails(characterId);
  }

  loadCharacterDetails(characterId) {
    axios.get(`https://my-json-server.typicode.com/WildCodeSchool/starwars-api/characters/${characterId}`)
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({character: data});
    });
  }

  render() {
    const character = this.state.character;
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">React 11 Challenge</h1>
          <p>
            This page displays the details of a character, <em>and</em> links to
            other characters. In the initial version of the app, there is no
            data to show!
          </p>
          <p>
            <strong>Your goal is to fix this component</strong>:
            <ul>
              <li>
                In <code>loadCharacterDetails</code>, load data using axios, and
                update <code>character</code> in the component's state
              </li>
              <li>
                Use <code>componentDidUpdate</code> to also call{' '}
                <code>loadCharacterDetails</code> when the link changes
              </li>
            </ul>
          </p>
          <p>
            <Link to="/">Back to home page</Link>
          </p>
        </header>
        <div className="CharacterDetails">
          <img src={character.pic} alt={character.name} />
          <ul>
            <li>
              ID: <strong>{character.id}</strong>
            </li>
            <li>
              Name: <strong>{character.name}</strong>
            </li>
            <li>
              Homeworld: <strong>{character.homeworld}</strong>
            </li>
          </ul>
        </div>
        <CharacterList />
      </div>
    );
  }
}

export default CharacterDetails;
