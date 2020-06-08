import React, { Fragment } from 'react'
import Nav from '../components/nav'
import Header from '../layouts/header'

export default function Home() {
  return (
    <Fragment>
      <Header pageName='home'>
        <Nav />
      </Header>
      hello!
    </Fragment>
  )
}
