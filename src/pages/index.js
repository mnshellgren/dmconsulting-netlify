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
        <h1>Digital leadership & engaging communication</h1>
      </div>
      <Container>
        <section className="col-xs-11 col-sm-10 col-md-8 text-center m-auto section-padding-top-lg section-padding-bottom-lg">

            <h5 className="intro-text">Degermark Consulting focuses on communication, leadership development and digital transformation. We give support to companies, managers and management teams in transforming the business and upgrade the leadership for continued success in a digital world.</h5>

        </section>
      </Container>
      <div className="container-fluid services-section">
      <Container>
        <h2 className="display-4">Services</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
            <div className="card p-4 text-center">
              <img className="card-icon mt-3 mb-4" src={leadership_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Leadership Development</h4>
              <p>Prepare and arm yourself to lead successfully when your company and market is being digitalized</p>
            </div>
            <div className="card p-4 text-center mt-4">
              <img className="card-icon mt-3 mb-4" src={moderator_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Keynote speaker & moderator</h4>
              <p>Inspire and guide your company to continued success, presented with passion, insights and examples.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
            <div className="card p-4 text-center">
              <img className="card-icon mt-3 mb-4" src={organisation_icon} alt="Created by Massupa  Kaewgahya"/>
              <h4>Communication & Digital Event Production</h4>
              <p>The key to engagement and business result starts with a well thought out communication. The right message in the right channel will help you to come across. To reach a larger

audience in a sustainable way, a digital conference can be your option.</p>
            </div>
            <div className="card p-4 text-center mt-4">
              <img className="card-icon mt-3 mb-4" src={chef_icon} alt="management by Massupa  Kaewgahya from the Noun Project"/>
              <h4>Digital Transformation</h4>
              <p>To meet the increased competition and stay relevant, digital opportunities will support your company in becoming more attractive and more efficient. But start to act now!</p>
            </div>

          </div>
          <div className="col-12 mt-5 pt-5 text-center">
            <Link to='/services' className="col-12 main-button inverted">Read more →</Link>
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
                <li>20 years of experience in management and communication</li>
                <li>Certified leadership coach</li>
                <li>Keynote speaker & moderator</li>
              </ul>
            </div>
          </div>
          <h2 className="mt-5">Partners</h2>
          <div className="row mt-5">
            <div className="col-xs-12 col-sm-12 col-md-3 card px-3 py-3 mx-1 mt-2 text-center">
              <a href="https://www.euro-academy.com/" target="_blank">
              <img className="card-icon mt-4 mb-4" src={EuroAcademylogo} alt="Created by Massupa  Kaewgahya"/>
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 card px-5 py-5 mx-1 mt-2 text-center">
              <a href="https://novare.se/novare-leadership-academy/" target="_blank">
              <h5 className="">Novare Leadership Academy</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 card px-5 py-5 mx-1 mt-2 text-center">
              <a href="https://www.miun.se/" target="_blank">
              <h5 className="">The Futures Agency</h5>
              </a>
            </div>


          </div>
        </section>
      </div>
      <Container>
        <section className="section-padding-top-sm section-padding-bottom-lg">
          <h2 className="mt-5">Contact</h2>
          <div className="row mt-5">

            <div className="col-xs-11 col-sm-6 col-md-6 col-lg-5 pl-1 mt-3">
              <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="asadegermark"><a className="simple-link" href='https://se.linkedin.com/in/asadegermark?trk=profile-badge'></a></div>
            </div>
            <div className="col-xs-11 col-sm-7 col-md-6 mt-3">
              <div className="row">
                {/*<div className="col-xs-3 col-sm-3 col-md-3">
                <p>mail: <br></br>
                   mobil: <br></br>
                   linkedin:</p>
                </div>*/}
                <div className="col-10"><img className="logotype" src={Logotype}/></div>

                <div className="col-12 mt-4">
                <p className="">email: <a href="mailto:asa@degermark.nu"> asa@degermark.nu</a><i className="fa fa-external-link"></i><br></br>
                    mobile: +46 709 86 24 90 <br></br>
                  linkedin:
                  <a href="http://linkedin.com/in/asadegermark"> linkedin.com/in/asadegermark</a><i className="fa fa-external-link"></i>
                </p>
                </div>
              </div>

            </div>
          </div>
      </section>
      </Container>
    </div>
  )
}

export default IndexPage
