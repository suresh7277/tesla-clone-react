import React from 'react';
import styled from 'styled-components'
import Section from './Section';
import carInfo from '../carInfo';

function Home() {

  const carSections = carInfo.map(car => {
    return (
    <Section
      title = {car.title}
      img = {car.image}
    /> 
    )
  })
  return (
    <Container>
        {carSections}
    </Container>
  )}

export default Home;

const Container = styled.div`
    height: 100vh;
`
