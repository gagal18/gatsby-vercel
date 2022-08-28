import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
    
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p>
        <b>Example pages:</b>{" "}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
