/**
 *  _____       _   _         _      _____     _       _
 * |  _  |_____| |_|_|___ ___| |_   | __  |___| |_ ___| |_
 * |     |     | . | | -_|   |  _|  |    -| . | . | . |  _|
 * |__|__|_|_|_|___|_|___|_|_|_|    |__|__|___|___|___|_|
 * ________________________________________________________
 * #######################################################
 *
 * @Author: ambientrobot
 * @Date:   2019-01-27T16:52:13+01:00
 * @Email:  contact@ambientrobot.com
 * @Project: ambientrobot
 * @Filename: App.js
 * @Last modified by:
 * @Last modified time: 2020-06-20T15:14:17+02:00
 * @Copyright: Ambient Robot 2019
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCode, faMusic, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';

import 'scss/App.scss';

import Animations from 'js/containers/Animations/Animations';

// Font Awesome library
library.add(faHome, faCode, faMusic, faReact, faTwitter, faBriefcase);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Animations />
      </div>
    );
  }
}

export default App;
