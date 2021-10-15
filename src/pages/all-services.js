import React, { useMemo } from "react"

import { CustomHits } from "../components/hvac-services/custom-hits"
import { CustomSearchBox } from "../components/hvac-services/search-box"
import { InstantSearch } from "react-instantsearch-dom"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"

const AllServices = () => {
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  //
  return (
    <Layout>
      <InstantSearch searchClient={searchClient} indexName="allServices">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              All ACFIX&apos;s Partners Services
            </h2>
          </div>
          <CustomSearchBox />
        </div>
        <CustomHits />
      </InstantSearch>
    </Layout>
  )
}

export default AllServices
