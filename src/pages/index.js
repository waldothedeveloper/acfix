import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { HowItWorks } from "../components/how-it-works"
import { HvacCategories } from "../components/hvac-categories"
import { PartnersDetail } from "../components/partners-detail"
// import { SignUpForm } from "../components/signup_form"
// import { Brands } from "../components/brands"
// import { ProjectConversions } from "../components/project_conversion"
// import { Reviews } from "../components/reviews"
// import { ServingAreas } from "../components/serving-areas"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <HvacCategories />
    <HowItWorks />
    <PartnersDetail />
    {/* <ProjectConversions /> */}
    {/* <ServingAreas /> */}
    {/* <Brands /> */}
    {/* <SignUpForm /> */}
  </Layout>
)

export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
