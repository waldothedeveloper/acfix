import * as React from "react"

import { CallToAction } from "../components/how-it-works/call-to-action"
// import { CustomerTestimonials } from "../components/testimonials/cust_testimonials"
import { CallUsNow } from "../components/call-section/call-us-now"
import { FeaturedTestimonial } from "../components/testimonials/featured-testimonial"
import { Hero } from "../components/hero/hero-2"
import { HowItWorks } from "../components/how-it-works/how-works"
import { HvacCategories } from "../components/hvac-services/hvac-categories"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  //
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <FeaturedTestimonial />
      <HowItWorks />
      <CallToAction />
      <HvacCategories />
      <CallUsNow />
      {/* <CustomerTestimonials /> */}
    </Layout>
  )
}
export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
