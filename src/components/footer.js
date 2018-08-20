import React, { Component } from 'react'
import Link from 'gatsby-link'
//import logoWhite from './logowhite.png'

//import fontawesome from '../../css/fontawesome-all.css'


class Footer extends Component {

  render() {
    return(
      <footer className="footer-main" >
        <div className="container">
          <span>
            {/*<img src={logoWhite}/>*/}
            <h4>Åsa Degermark</h4>
            <p><a href="mailto:asa@degermark.nu">asa@degermark.nu</a><i className="fa fa-external-link"></i><br></br>
            Tel: +46 709 86 24 90 <br></br>
          <a href="http://linkedin.com/in/asadegermark">linkedin.com/in/asadegermark</a><i className="fa fa-external-link"></i>
            </p>
          </span>
        <h4>
          &copy; 2018 degermark consulting AB
        </h4>
        <div className="col-3 mx-auto mt-5">
          <a>back to top</a>
        </div>

        </div>


      </footer>
    )
  }
}

export default Footer;
