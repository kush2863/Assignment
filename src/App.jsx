// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import styled from 'styled-components';

const Header=styled.h1`
text-align: center;
text-decoration: line-through;
`;

const Search= styled.input`
  text-align: center;
  margin: 0 auto; 
  display: block;
  width: 1000px;
  height: 30px;
  border-radius: 40px;
  margin-bottom:40px;
  box-shadow:
    inset 0 -3em 3em white,
    0 0 0 2px white,
    0.3em 0.3em 1em ;

`;
const Map= styled.div`
display: flex;
flex-wrap: wrap;
`;
const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();    
  }, []); // Empty dependency array ensures useEffect runs only once (componentDidMount)

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header>Punk API Beers</Header>
      <Search
        type="text"
        placeholder="Search beers"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></Search>
  <Map>
      
        {filteredBeers.map((beer) => (
        <Cards
          key={beer.id} beer={beer} 
        />
        ))}
      
      </Map>
    </div>
  );
};

export default App;
