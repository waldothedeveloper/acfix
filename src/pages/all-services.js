import React, { useMemo } from "react"
import Layout from "../components/layout"
import { InstantSearch } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import { CustomSearchBox } from "../components/hvac-services/search-box"
import { CustomHits } from "../components/hvac-services/custom-hits"

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
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                All ACFIX's Partners Services
              </h2>
            </div>

            <div className="max-w-lg mt-4 mb-6">
              <CustomSearchBox />
            </div>
            <CustomHits />
          </div>
        </div>
      </InstantSearch>
    </Layout>
  )
}

export default AllServices
