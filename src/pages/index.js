import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero-2"
import { HowItWorks } from "../components/how-it-works"
import { HvacCategories } from "../components/hvac-categories"
import { PartnersDetail } from "../components/partners-detail"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <HowItWorks />
    <HvacCategories />
    <PartnersDetail />
  </Layout>
)

export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
