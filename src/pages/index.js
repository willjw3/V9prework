import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StrikeCard from "../components/StrikeCard"
import MobileStrikeCard from "../components/MobileStrikeCard"
import SearchBox from "../components/SearchBox"

const IndexPage = (props) => {
  let strikes
  let searchTerm = ""
  let navi = true
  console.log(props.location)
  if (!props.location.state) {
    strikes = props.data.allStrike.edges.slice(0, 100)
  }
  if (props.location.state) {
    if (!props.location.state.searchTerm) {
      strikes = props.data.allStrike.edges.slice(0, 100)
    } else {
      if (props.location.state.searchTerm === "") {
        strikes = props.data.allStrike.edges.slice(0, 100)
      } else {
        searchTerm = props.location.state.searchTerm
        navi = false
        const allStrikes = props.data.allStrike.edges
        strikes = allStrikes.filter(strike => {
        let regex = RegExp("^" + searchTerm, "i")
        return regex.test(strike.node.name)
    })
      }
    }
  }
  
  const currentPage = 1
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Home" />
        <div className="ml-auto mr-auto w-100">
          <SearchBox />
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
        <div className="font-italic">
          {strikes.map(strike => {
            return <MobileStrikeCard
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
        <p className="text-light text-center">{strikes.length} results displayed</p>
        { navi === false && (
          <Link to="/">
            <input className="btn btn-outline-warning" value="Back To Main" type="submit" />
          </Link>
        )}
        <div>
          { navi === true && (
            <div className="float-right">
              <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
                <span className="text-warning">Data For Next 100 Strikes →</span>
              </Link>
            </div>
          )
          }
        </div>
        <hr className="mb-5" />
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
                 year(formatString: "YYYY")
               }
             }
           }
         }
       `
