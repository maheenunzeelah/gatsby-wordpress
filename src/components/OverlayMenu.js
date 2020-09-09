import React from 'react';
import {Link, useStaticQuery,graphql} from 'gatsby';
const OverlayMenu=()=>{
    const data=useStaticQuery(graphql`
    query{
        allWordpressPage {
            edges {
              node {
                id
                date
                title
              }
            }
          }
    }
    `)
    return(
        <div>
            <ol>
            {data.allWordpressPage.edges.map(({node})=>{
                     return <li>{node.title}</li>
            })}
            </ol>
        </div>
    )
}
export default OverlayMenu;