import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation"
        style={{ borderBottom: `1px solid #ddd` }} >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="StoryPurpose" style={{ height: '88px', marginRight: '4pt' }} />
              <span className="subtitle">
                Story<b style={{ color: "#FF8800" }}>Purpose</b>
              </span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`} >
            <div className="navbar-start has-text-centered">
              {/* 
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
            </div>
            <div className="navbar-end">
            <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog" style={{ marginRight: '20pt' }}>
                Blog
              </Link>
              <a className="button  is-primary"
                style={{ marginTop: '5pt', backgroundColor: `#ff8800` }}
                href="https://app.storypurpose.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET STARTED
                <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '2pt' }} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
