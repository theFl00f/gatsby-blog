import React, { Fragment } from 'react'

import Nav from '../components/nav'
import Header from '../layouts/header'
import Container from '../layouts/container'

import circleText from '../assets/circle-text.png'
import homeHeaderImg from '../assets/home-image-1.jpg'

export default function Home() {
  return (
    <Fragment>
      <Header pageName='home'>
        <Nav />
        <div class="wrapper">
          <Container classInput='header-container'>
            <img src={circleText} alt="It's all about" />
            <h1>Sophie</h1>
          </Container>
          <Container classInput='header-img-container'>
            <img src={homeHeaderImg} alt="a girl named Sophie with halved oranges in front of her eyes with her tongue sticking out on yellow background"/>
          </Container>
        </div>
      </Header>
    </Fragment>
  )
}
