import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline">Hi from the second page</h1>
    <p>Welcome to page# 3333</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Bojan Gagaleski" />

export default SecondPage
