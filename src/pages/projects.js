import React from 'react'
import ProjectListItem from "../components/projectListItem"
import "../components/dashboard.css"
import Footer from "../components/footer";
import Appbar from "../components/appbar";

function projects({data}) {
  const {allMarkdownRemark} = data
  const {edges} = allMarkdownRemark
  return (
    <div>
    <Appbar />
    <h1 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px",color:"#222831"}}>Projects</h1>
      {
        edges.map(
          ({node}) => {
            return <ProjectListItem data = {node}/>
          }
        )
      }
      <p style={{textAlign:"center"}}>This blog content will automatically added here by creating dynamic pages.<br /> All you need is to just add your content in markdown file format</p>
        <Footer />
    </div>
  )
}

export default projects

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            link
          }
        }
      }
    }
  }
`