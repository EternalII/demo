import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
 } from './layout.module.css'
 import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    
    
    `)

  return (
    <div className={container}>
      {/*<header className={siteTitle}>{data.site.siteMetadata.title}</header>*/}
        <StaticImage
        alt="Logo of Methoda computers ltd"
        src="../images/Methoda.png"
        />
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}


export default Layout