import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { SignUpForm } from "../components/signup_form"
// import { Brands } from "../components/brands"
import { ProjectConversions } from "../components/project_conversion"
import { Reviews } from "../components/reviews"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Reviews />
    <ProjectConversions />
    {/* <Brands /> */}
    <SignUpForm />
  </Layout>
)

export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
