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
 * @Filename: Menu.js
 * @Last modified by:
 * @Last modified time: 2020-06-20T15:15:02+02:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';
import 'scss/Menu.scss';

class Menu extends Component {

  constructor(props){
		super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className="Menu">
        <div className="MenuContainer">

        </div>
      </div>
    )
  }
}

export default Menu;
