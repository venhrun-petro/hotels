import React from 'react'
import Layout from '../components/Layout/Layout'
import Teaser from '../components/sections/Teaser'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

const IndexPage = () => (
  <Layout>
    <Teaser />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
