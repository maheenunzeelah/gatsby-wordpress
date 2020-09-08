/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React ,{useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hamburger from "./Hamburger";
import OverlayMenu from "./OverlayMenu"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap-grid.css';


const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
const [menu,openMenu]=useState(false)
const handleOverlayMenu=()=>{
  openMenu(!menu);
}
  return (
   <div>
     <Hamburger />
     <OverlayMenu />
     <Header />
     <main>
       {children}
     </main>
     <Footer />
   </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
