import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero/hero-2"
import { HowItWorks } from "../components/how-it-works/how-works"
import { HvacCategories } from "../components/hvac-categories"
import { FeaturedTestimonial } from "../components/testimonials/featured-testimonial"
import { CallToAction } from "../components/how-it-works/call-to-action"
import { CustomerTestimonials } from "../components/testimonials/cust_testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <FeaturedTestimonial />
    <HowItWorks />
    <CallToAction />
    <HvacCategories />
    <CustomerTestimonials />
    {/* <PartnersDetail /> */}
  </Layout>
)

export default IndexPage

// refer get $50 => https://share.shutterstock.com/originotesgreetingcards
