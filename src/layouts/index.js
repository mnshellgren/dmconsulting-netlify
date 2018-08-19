import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/footer.js'
import logotype from '../logotype_white.svg'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <div className='App'>
      <Helmet title={data.site.siteMetadata.title} />
          <div className='navbar navbar-expand-lg navbar-dark main-navigation'>
        <Container>
          <Link to='/' className='navbar-brand'><img className="logotype"src={logotype} alt={data.site.siteMetadata.title} /></Link>
          <ul className='nav navbar-nav'>

            {user && (
              <li className='nav-item'>
                <a href='/admin' className='nav-link'>Admin</a>
              </li>
            )}

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>Om</Link>
            </li>
            <li className='nav-item'>
              <Link to='/insights' className='nav-link'>Insikter</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-link'>Tjänster</Link>
            </li>
            <li className='nav-item'>
              <Link to='/books' className='nav-link'>Böcker</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>Kontakt</Link>
            </li>
          </ul>
        </Container>
      </div>
      <div className='pageContent'>{children()}</div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
