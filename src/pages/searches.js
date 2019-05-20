// import React from "react"
// import PropTypes from "prop-types"
// import { Link, graphql } from "gatsby"


// import Layout from "../components/layout"

// const Searches = ({ pageContext, data }) => {
//     const strikes = data.allMarkdownRemark.edges
//     const labels = data.site.siteMetadata.labels
//     console.log(pageContext.tag)
//     const { tag } = pageContext
//     const { totalCount } = data.allMarkdownRemark
//     const tagHeader = `${totalCount} post${
//         totalCount === 1 ? "" : "s"
//         } tagged with "${tag}"`

//     const getTechTags = (tags) => {
//         const techTags = []
//         tags.forEach((tag, i) => {
//             labels.forEach((label) => {
//                 if (tag === label.tag) {
//                     techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
//                 }
//             })
//         })
//         return techTags
//     }

//     return (
//         <Layout>
//             <div className="index-main">
//                 <div className="sidebar px-4 py-2">
//                     <Sidebar />
//                 </div>

//                 <div className="post-list-main">
//                     <h2>{tagHeader}</h2>
//                     {posts.map((post) => {
//                         const tags = post.node.frontmatter.tags
//                         return (
//                             <div key={post.node.id} className="container mt-5">
//                                 <Link
//                                     to={post.node.frontmatter.path}
//                                     className="text-dark"
//                                 >
//                                     <h2>{post.node.frontmatter.title}</h2>
//                                 </Link>
//                                 <small className="d-block text-info">Posted on {post.node.frontmatter.date}
//                                 </small>
//                                 <p className="mt-3 d-inline">{post.node.excerpt}</p>
//                                 <Link
//                                     to={post.node.frontmatter.path}
//                                     className="text-primary"
//                                 >
//                                     <small className="d-inline-block ml-3"> Read full post</small>
//                                 </Link>
//                                 <div className="d-block">
//                                     {getTechTags(tags)}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// Tag.propTypes = {
//     pageContext: PropTypes.shape({
//         tag: PropTypes.string.isRequired,
//     }),
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             totalCount: PropTypes.number.isRequired,
//             edges: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     node: PropTypes.shape({
//                         frontmatter: PropTypes.shape({
//                             title: PropTypes.string.isRequired,
//                         }),
//                     }),
//                 }).isRequired
//             ),
//         }),
//     }),
// }

// export const pageQuery = graphql`
//   query($tag: String) {
//     site {
//         siteMetadata {
//             title 
//             author
//             labels {
//                 tag
//                 tech 
//                 name 
//                 size 
//                 color
//             } 
//         }
//     } 
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//     ) {
//       totalCount
//       edges {
//          node {
//             excerpt(pruneLength: 200)
//             html
//             id
//             frontmatter {
//             title
//             path
//             date
//             tags
//             }
//         }
//       }
//     }
//   }
// `

// export default Searches
