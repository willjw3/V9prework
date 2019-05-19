import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import image from "../images/meteorite.jpg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="d-inline-block"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="head-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#49fb35`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="d-inline-block float-right pr-2">
      <img className="rounded" src={image} alt=""/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
