import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ borderTop: `1px solid #eee` }}>
        <div className="content has-text-centered">
          <div className="container">
            <a target="_blank" href="">Terms of use</a>
            <a target="_blank" href="" style={{ marginLeft: '20pt' }}>Privacy policy</a>

            {/* 
            <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by macrovector_official - www.freepik.com</a> 
            <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by katemangostar - www.freepik.com</a>
            
            */}

          </div>
        </div>
      </footer>


    )
  }
}

export default Footer
