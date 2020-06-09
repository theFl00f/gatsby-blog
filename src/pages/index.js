import React, { Fragment } from 'react'

import Header from '../layouts/header'

import IndexHeader from '../components/indexHeader'
import IndexMain from '../components/indexMain'

export default function Home() {
  return (
    <Fragment>
      <Header pageName='home'>
        <IndexHeader/>
      </Header>
      <IndexMain/>
    </Fragment>
  )
}
