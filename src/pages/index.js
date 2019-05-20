import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StrikeCard from "../components/StrikeCard"
import SearchBox from "../components/SearchBox"

const IndexPage = ({data}) => {
  const [inputValue, setInputValue] = useState("")
  const strikes = data.allStrike.edges

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let searchTerm = inputValue.toLowerCase()
    console.log(searchTerm)
    navigate(
      "/searches/",
      {
        state: { searchTerm }
      }
    )

    setInputValue("")
  }

  return (
    <Layout>
      <SEO title="Home" />
        <div className="ml-auto mr-auto w-100">
          <SearchBox value={inputValue} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
        <div className="font-weight-bold border-bottom">
          <StrikeCard 
            name="Name" 
            id="ID" 
            nametype="Name Type"
            recclass="Rec Class"
            mass="Mass (g)"
            fall="Fall"
            year="Year"
            latitude="Latitude"
            longitude="Longitude" />
        </div>
        <div className="font-italic">
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
