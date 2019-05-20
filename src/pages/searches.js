import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import StrikeCard from "../components/StrikeCard"

 const Searches = (props) => {
     let searchTerm = ""
     if (!props.location) {
         searchTerm = "No search term given"
     } else {
         searchTerm = props.location.state.searchTerm
     }
     
    const allStrikes = props.data.allStrike.edges
    const strikes = allStrikes.filter(strike => {
        let regex = RegExp("^"+searchTerm, "i")
        return regex.test(strike.node.name)   
    })

        return (
            <Layout>
                <Link to="/">
                    <input className="btn btn-outline-warning" value="Back To Main" type="submit" />
                </Link>
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



export const query = graphql`
         query SearchesQuery {
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

 export default Searches
