import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import backgroundimg from '../asa_walking.jpg'
import ProfileImg from '../asa_profile.jpg'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <div className="container-fluid heading-container">
        <Container>
          <img src={backgroundimg} alt="Åsa walking on the street" />
          <h1 className='display-4'>{post.frontmatter.title}</h1>
        </Container>
      </div>
      <Container className="content-rich-page about">
        <div className="col-xs-12 col-sm-12 col-md-10 offset-md-1 align-self-center">
          <img src={ProfileImg} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-10 offset-md-1 align-self-center" dangerouslySetInnerHTML={{ __html: post.html }} >
        </div>
      </Container>
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
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
