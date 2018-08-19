import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Profilepicture from '../asa_main_profile.jpg'
import Logotype from './logotype_black.svg'

const IndexPage = ({ data }) => {
  return (
    <div className="page-content">
      <div className="jumbotron">
        <h1>En digital framtid kräver ett uppgraderat ledarskap</h1>
      </div>
      <Container>
        <section className="col-xs-10 col-sm-10 col-md-8 text-center m-auto section-padding-top-lg section-padding-bottom-lg">

            <h5 className="">Degermark Consulting inriktar sig främst på kommunikation och ledarskap
          och ger stöd till chefer och ledningsgrupper som behöver utveckla sitt
          eget eller ledningsgruppens gemensamma ledarskap i takt med att företaget
          utvecklas och digitaliseras.</h5>

        </section>
      </Container>
      <div className="container-fluid">
      <Container>
        <h2>Tjänster</h2>
      </Container>
      </div>
      <div className="container-fluid">
        <section className="container section-padding-top-lg section-padding-bottom-lg">
          <h2>Åsa Degermark</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <img src={ Profilepicture } />
            </div>
            <div className="col-xs-12 col-sm-6 pt-3">
              <ul>
                <li>20 års erfarenhet som chef inom marknadsföring och kommunikation</li>
                <li>Certifierad ledarskapscoach</li>
                <li>Föredragshållare & moderator</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Container>
        <section className="section-padding-top-lg section-padding-bottom-lg">
        <div className="contact-information-inline">
          <div className="col-xs-12 col-sm-6">
            <img className="logotype" src={Logotype}/>
          </div>
          <div className="col-xs-12 col-sm-6">

            <p><a href="mailto:asa@degermark.nu">asa@degermark.nu</a><i className="fa fa-external-link"></i><br></br>
              Tel: +46 709 86 24 90 <br></br>
            <a href="http://linkedin.com/in/asadegermark">linkedin.com/in/asadegermark</a><i class="fa fa-external-link"></i>
            </p>
          </div>

        </div>
      </section>
      </Container>
    </div>
  )
}

export default IndexPage
