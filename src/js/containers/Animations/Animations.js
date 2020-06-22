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
 * @Filename: Home.js
 * @Last modified by:
 * @Last modified time: 2020-01-07T18:35:33+01:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';
import '../../../scss/Animations.scss';

import Waves from 'js/components/Loader/Waves';
import Loader from 'js/components/Loader/Loader';
import Home from 'js/components/Home/Home';

class Animations extends Component {

  constructor(props){
		super(props);
    this.state = {
      loaderAnimationDone: false
    }
  }

  componentDidMount = () => {

  }

  componentWillUnmount = () => {

  }

  isLoaderAnimationDone = (animationDone) => {
    this.setState({
      loaderAnimationDone: animationDone
    });
  }

  render() {
    return(
      <div className="Animations">
        <div className="AnimationsContainer">
          <Waves />
          <Loader loaderAnimationDone={this.isLoaderAnimationDone} />
          <Home homeStartAnimation={this.state.loaderAnimationDone} />
        </div>
      </div>
    )
  }
}

export default Animations;
