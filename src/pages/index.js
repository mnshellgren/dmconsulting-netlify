import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Profilepicture from '../asa_main_profile.jpg'
import Logotype from './logotype_black.svg'
import backgroundimg from './reeds1.jpg'

import leadership_icon from './utveckling.svg'
import chef_icon from './chef.svg'
import moderator_icon from './moderator.svg'
import organisation_icon from './organisation.svg'

import EuroAcademylogo from './euroacademy.png'

const IndexPage = ({ data }) => {
  return (
    <div className="page-content">
      <div className="jumbotron">
        <img src={backgroundimg}/>
        <h1>Digitalt Ledarskap & Engagerande kommunikation</h1>
      </div>
      <Container>
        <section className="col-xs-11 col-sm-10 col-md-8 text-center m-auto section-padding-top-lg section-padding-bottom-lg">

            <h5 className="intro-text">Degermark Consulting inriktar sig främst på kommunikation och ledarskap
          och ger stöd till chefer och ledningsgrupper som behöver utveckla sitt
          eget eller ledningsgruppens gemensamma ledarskap i takt med att företaget
          utvecklas och digitaliseras.</h5>

        </section>
      </Container>
      <div className="container-fluid services-section">
      <Container>
        <h2 className="display-4">Tjänster</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
            <div className="card p-4 text-center">
              <img className="card-icon mt-3 mb-4" src={leadership_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Ledarskapsutveckling</h4>
              <p>Bli bättre rustad för att leda framgångsrikt i takt med att ditt företag utvecklas och digitaliseras</p>
            </div>
            <div className="card p-4 text-center mt-4">
              <img className="card-icon mt-3 mb-4" src={moderator_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Moderator & Föredragshållare</h4>
              <p>Inspirera och engagera din publik inom områdena digitalt ledarskap, kommunikation och förändring</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
            <div className="card p-4 text-center">
              <img className="card-icon mt-3 mb-4" src={organisation_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Kommunikation</h4>
              <p>Nyckeln till engagemang och förändring börjar med bra kommunikation, både internt och externt </p>
            </div>
            <div className="card p-4 text-center mt-4">
              <img className="card-icon mt-3 mb-4" src={chef_icon} alt="management by Massupa  Kaewgahya from the Noun Project"/>
              <h4>Interim chef</h4>
              <p>Stärk upp tillfälligt inom områden som marknad, kommunikation, administration eller liknande</p>
            </div>

          </div>
          <div className="col-12 mt-5 pt-5 text-center">
            <Link to='/services' className="col-12 main-button inverted">Läs mer →</Link>
          </div>

        </div>
      </Container>
      </div>
      <div className="container-fluid">
        <section className="container section-padding-top-lg section-padding-bottom-lg">
          <h2>Åsa Degermark</h2>
          <div className="row mt-4 pb-5">
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
          <h2 className="mt-5">Samarbetspartners</h2>
          <div className="row mt-5">
            <div className="card px-5 py-3 mx-1 text-center">
              <a href="https://www.euro-academy.com/" target="_blank">
              <img className="card-icon mt-3 mb-4" src={EuroAcademylogo} alt="Created by Massupa  Kaewgahya"/>
              </a>
            </div>
            <div className="card px-5 py-3 mx-1 text-center">
              <a href="https://novare.se/novare-leadership-academy/" target="_blank">
              <h5 className="mt-5">Novare Leadership Academy</h5>
              </a>
            </div>
            <div className="card px-5 py-3 mx-1 text-center">
              <a href="https://www.miun.se/" target="_blank">
              <h5 className="mt-5">Mittuniversitetet</h5>
              </a>
            </div>


          </div>
        </section>
      </div>
      <Container>
        <section className="section-padding-top-lg section-padding-bottom-lg">
        <div className="contact-information-inline row">
          <div className="col-xs-12 col-sm-6">
            <div className="LI-profile-badge col-xs-12 col-sm-6"  data-version="v1" data-size="large" data-locale="sv_SE" data-type="horizontal" data-theme="light" data-vanity="hellgrenmns"><a className="LI-simple-link" href='https://se.linkedin.com/in/hellgrenmns?trk=profile-badge'>Måns Hellgren</a></div>

          </div>
          <div className="col-xs-12 col-sm-6">
            <img className="logotype" src={Logotype}/>
            <p className="mt-3"><a href="mailto:asa@degermark.nu">asa@degermark.nu</a><i className="fa fa-external-link"></i><br></br>
                Tel: +46 709 86 24 90 <br></br>
              <a href="http://linkedin.com/in/asadegermark">linkedin.com/in/asadegermark</a><i className="fa fa-external-link"></i>
            </p>
          </div>
        </div>
      </section>
      </Container>
    </div>
  )
}

export default IndexPage
