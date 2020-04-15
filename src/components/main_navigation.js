import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logotype from '../logotype_white.svg'
import logotype_black from '../logotype_black.svg'

export default class MainNavigation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasStyling: false,
      currentLink: ""
    }

    this.isActive = this.isActive.bind(this)
    this.isBlog = this.isBlog.bind(this)
    this.isPage = this.isPage.bind(this)
    this.setActive = this.setActive.bind(this)
    this.setHome = this.setHome.bind(this)
  }

  componentDidMount() {
    //let lastPart = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    let urlEnding = window.location.pathname

    let isPage = (urlEnding != "/")? true : false
    let currentURL = isPage ? urlEnding.replace(/\//g, '') : "home"

    this.setState({
      hasStyling: isPage,
      currentLink: isPage? currentURL : "home"
    })
  }
  isActive(linkName) {
   return((this.state.currentLink == linkName)? true : false)
  }
  isBlog() {
    let urlEnding = ''
    if (typeof window !== 'undefined') {
      urlEnding = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    }
    let isBlog

    if (urlEnding.length == 0) {
      isBlog = false
    }
    else {
      switch(urlEnding) {
        case 'about':
          break;
        case 'insights':
          break;
        case 'services':
          break;
        case 'books':
          break;
        case 'contact':
          break;
        default:
          isBlog = true
      }
    }


    return isBlog
  }
  isPage() {
    return this.state.hasStyling
  }
  setActive(linkName) {
    console.log(this.state.hasStyling)
    this.setState({currentLink: linkName, hasStyling: true})
  }
  setHome() {

    this.setState({currentLink: "home", hasStyling: false })
  }
  render() {
    return (
      <div className='navbar navbar-expand-lg navbar-dark main-navigation'>
        <Container>
          <Link to='/' className='navbar-brand' onClick={() => this.setHome()}>
            { this.isBlog()?
              <img className="logotype"src={logotype_black} alt="Degermark Consulting logotype" />
              :
              <img className="logotype"src={logotype} alt="Degermark Consulting logotype" />
            }

          </Link>
          <ul className='nav navbar-nav'>
          {this.props.user && (
            <li className='nav-item'>
              <a href='/admin' className='nav-link'>Admin</a>
            </li>
          )}
          <li className='nav-item'>
            <Link to='/about' className={this.isActive("about")? "nav-link active" : "nav-link"} onClick={() => this.setActive("about")}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/insights' className={this.isActive("insights")? "nav-link active" : "nav-link"} onClick={() => this.setActive("insights")}>Insights</Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className={this.isActive("services")? "nav-link active" : "nav-link"} onClick={() => this.setActive("services")}>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to='/books' className={this.isActive("books")? "nav-link active" : "nav-link"} onClick={() => this.setActive("books")}>Books</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className={this.isActive("contact")? "nav-link active" : "nav-link"} onClick={() => this.setActive("contact")}>Contact</Link>
          </li>
          </ul>
        </Container>
      </div>
    )
  }
}
