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
            <h1 className='display-4'>Contact</h1>
          </Container>
        </div>
        <Container className="content-rich-page about">


          <div className="row mt-5">

            <div className="col-xs-11 col-sm-6 col-md-6 col-lg-5 pl-1">
              <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="asadegermark"><a className="LI-simple-link" href='https://se.linkedin.com/in/asadegermark?trk=profile-badge'>Åsa Degermark</a></div>
            </div>
            <div className="col-xs-11 col-sm-7 col-md-6">
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

        </Container>
    </div>
  )
}

export default ContactPage
