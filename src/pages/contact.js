import React from 'react'
import { Container} from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Logotype from './logotype_black.svg'
import backgroundimg from '../asa_walking.jpg'

const ContactPage = ({ data }) => {
  return (
    <div>
        <div className="container-fluid heading-container">
          <Container>
            <img src={backgroundimg} alt="Åsa walking on the street" />
            <h1 className='display-4'>Kontakt</h1>
          </Container>
        </div>
        <Container className="content-rich-page about">

        </Container>
    </div>
  )
}

export default ContactPage
