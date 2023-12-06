import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 475px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  width: 400px;
  margin: 10px;
background-color: lightblue;
`;

const Img = styled.img`
    padding: 15px;
    margin: 10px;
    background-color: beige;
    border-radius: 20px;
  width: 50px;
  height: auto;
`;

const Cards = ({ beer }) => {
  return (
    <CardContainer>
      <Card key={beer.id}>
        <Img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
      </Card>
    </CardContainer>
  );
};

export default Cards;
