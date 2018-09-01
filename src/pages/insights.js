import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import backgroundimg from './sailing_blackandwhite.jpg'

const InsightsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <div>
      <div className="container-fluid heading-container">
        <img src={ backgroundimg } />
        <Container>
          <h1 className='display-4'>Insikter</h1>
        </Container>
      </div>
      <Container className="section-padding-top-md">
        {posts.map(({ node: post }) => (
          <div className="blog-card" style={{marginBottom: 10}} key={post.id}>
            <CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle className="font-italic" style={{color: '#fa8f2d'}}>{post.frontmatter.date}</CardSubtitle>
              <CardText className="mt-1">{post.excerpt}</CardText>
            </CardBody>
          </div>
        ))}
    </Container>
  </div>
  )
}

export default InsightsPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
