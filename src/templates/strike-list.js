import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StrikeCard from "../components/StrikeCard"
import MobileStrikeCard from "../components/MobileStrikeCard"
import SearchBox from "../components/SearchBox"

const StrikeList = (props) => {
    console.log(props)
    const strikes = props.data.allStrike.edges

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

        </Layout>
    )
}

export default StrikeList

export const query = graphql`
         query PaginateQuery($skip: Int!, $limit: Int!) {
           allStrike(
            limit: $limit
            skip: $skip
            ) {
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