import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero/hero-2"
import { HowItWorks } from "../components/how-it-works/how-works"
import { HvacCategories } from "../components/hvac-categories"
import { PartnersDetail } from "../components/partners-detail"
import { CallToAction } from "../components/how-it-works/call-to-action"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <HowItWorks />
    <CallToAction />
    <HvacCategories />
    <PartnersDetail />
  </Layout>
)

export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
