import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import backgroundimg from '../asa_moderator.jpg'
import Link from 'gatsby-link'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        <div className="container-fluid heading-container">
          <img src={backgroundimg}/>
          <Container>
            <h1 className='display-4'>{post.frontmatter.title}</h1>
          </Container>
        </div>
      <Container className="content-rich-page services" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="container col-12 mt-5 pt-5 text-center">
          <h4 className="font-italic mb-5">För mer detaljer, kontakta mig gärna</h4>
          <Link to='/contact' className="col-12 main-button ">Ta kontakt →</Link>
        </div>
    </div>
  )
}

export const servicesPageQuery = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
