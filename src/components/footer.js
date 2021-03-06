import React, { Component } from 'react'
import Link from 'gatsby-link'
//import logoWhite from './logowhite.png'

//import fontawesome from '../../css/fontawesome-all.css'


class Footer extends Component {

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <footer className="footer-main" >
        <div className="container">
          <span>
            {/*<img src={logoWhite}/>*/}
            <h4>Degermark Consulting</h4>
            <p><a href="mailto:asa@degermark.nu">asa@degermark.nu</a><i className="fa fa-external-link"></i><br></br>
            Phone: +46 709 86 24 90 <br></br>
          <a href="http://linkedin.com/in/asadegermark">linkedin.com/in/asadegermark</a><i className="fa fa-external-link"></i>
            </p>
          </span>
        <p>
          &copy; 2020 Degermark Consulting AB
        </p>
        <div className="col-xs-12 col-sm-4 col-md-3 mx-auto mt-5">
          <a onClick={this.scrollToTop}>Back to top ↑</a>
        </div>

        </div>


      </footer>
    )
  }
}

export default Footer;
