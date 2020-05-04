import React from 'react'
import { Link } from "gatsby";
import "../components/dashboard.css"

function projectListItem({data}) {
    return (
        <div  style={{backgroundColor:"white",color:"green",marginLeft:"15px",marginRight:"15px",display:"block",justifyContent:"center"}}>
        
        <div style = {{
            margin: 0,
            border: "2px solid #CCCCCC",
            marginBottom:"20px",
            padding:"20px"
        }}>
            <h1 className="sample">{data.frontmatter.title}</h1>
            <h1 className="sample">{data.frontmatter.date}</h1>
            {/* <Link to={data.frontmatter.path}>kjhfe</Link> */}
        </div>
        </div>
    )
}

export default projectListItem
