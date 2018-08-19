import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import backgroundimg from '../asa_moderator.jpg'

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
