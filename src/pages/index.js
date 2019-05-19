import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import StrikeCard from "../components/StrikeCard"

const IndexPage = ({data}) => {
  const strikes = data.allStrike.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {strikes.map(strike => {
          return <StrikeCard
            key={strike.node.id}
            name={strike.node.name}
            id={strike.node.id}
            nametype={strike.node.nametype}
            recclass={strike.node.recclass}
            mass={strike.node.mass}
            fall={strike.node.fall}
            year={strike.node.year}
            latitude={strike.node.latitude}
            longitude={strike.node.longitude} />
        })}
      </div>
      <div style={{ maxWidth: `85px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
         query StrikesQuery {
           allStrike {
             edges {
               node {
                 id
                 fall
                 latitude
                 longitude
                 mass
                 name
                 nametype
                 recclass
                 year
               }
             }
           }
         }
       `
