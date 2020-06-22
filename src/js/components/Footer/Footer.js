/**
 *  _____       _   _         _      _____     _       _
 * |  _  |_____| |_|_|___ ___| |_   | __  |___| |_ ___| |_
 * |     |     | . | | -_|   |  _|  |    -| . | . | . |  _|
 * |__|__|_|_|_|___|_|___|_|_|_|    |__|__|___|___|___|_|
 * ________________________________________________________
 * #######################################################
 *
 * @Author: ambientrobot
 * @Date:   2019-02-05T12:49:47+01:00
 * @Email:  contact@ambientrobot.com
 * @Project: ambientrobot
 * @Filename: Footer.js
 * @Last modified by:
 * @Last modified time: 2020-06-20T15:15:49+02:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'scss/Footer.scss';

class Footer extends Component {

  constructor(props){
		super(props);
    this.state = {}
  }

  componentDidMount = () => {

  }

  componentWillUnmount = () => {

  }

  render() {
    return(
      <footer className="Footer">
        <div className="FooterContainer">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-end">
              <div className="Copyright col-md-3">
                <p>Ambient Robot © 2020 - Powered by React <FontAwesomeIcon icon={['fab', 'react']} /></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
