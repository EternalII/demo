import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>By Lior Gordon.</p>
      <p>This site is being used for testing purposes</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage