import * as React from "react"
import PropTypes from "prop-types"
import { Navigation } from "./navigation"
import { Helmet } from "react-helmet"

//
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js" />
      </Helmet>

      <main>
        <Navigation />
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
