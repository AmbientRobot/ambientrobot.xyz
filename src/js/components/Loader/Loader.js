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
 * @Filename: Loader.js
 * @Last modified by:
 * @Last modified time: 2020-06-22T09:47:10+02:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';
import { gsap } from "gsap";
import Paths from 'json/ambientrobot';
import 'scss/Loader.scss';

class Loader extends Component {

  constructor(props){
		super(props);
    this.state = {
      windowWidth: '90vh',
      windowHeight: '90vh',
      svgViewbox: '0 0 1200 1200',
      ambientFill: 'white',
      robotFill: 'white',
      strokeColor: 'white',
      strokeWidth: 2,
      ambientPaths: Paths.ambient,
      robotPaths: Paths.robot,
      pathLength: 1000,
      animationsDone: false
    }
	}

  componentDidMount = () => {
    if (localStorage.getItem('init') === "true") {
      this.animationsDone();
    } else {
      this.animateLoader();
    }
  }

  componentWillUnmount = () => {

  }

  animateLoader = () => {
    var timeLine = gsap.timeline({
      onComplete: this.animationsDone
    });
    let writingTimer = 1.5;
    let fillTimer = 1.5;
    let unfillTimer = 1;
    let erasingTimer = 1;
    timeLine.to(".AmbientLetters", writingTimer, { strokeDashoffset: 0, delay: 1, ease: "none" })
    .to(".RobotLetters", writingTimer, { strokeDashoffset: 0, ease: "none" })
    .to(".LoaderLogo path", fillTimer, { "fill-opacity": 0.75 })
    .to(".LoaderLogo path", unfillTimer, { "fill-opacity": 0 })
    .to(".LoaderLogo path", erasingTimer, { strokeDashoffset: 491 });
  }

  animationsDone = () => {
    this.setState({
      animationsDone: true
    }, () => this.props.loaderAnimationDone(this.state.animationsDone));
  }

  render() {
    return (
      <div className="Loader">
        <div className="LoaderContainer">
          <svg xmlns="http://www.w3.org/2000/svg" width={this.state.windowWidth} height={this.state.windowHeight} viewBox={this.state.svgViewbox} className="LoaderLogo">
            [Ambient letters]
            {this.state.ambientPaths.map((value, index) => {
              return <path key={`AmbientLetter${index}`} id={`AmbientLetter${index}`} className="AmbientLetters" fill={this.state.ambientFill} stroke={this.state.strokeColor} strokeWidth={this.state.strokeWidth} pathLength={this.state.pathLength} d={value} />
            })}
            [Robot letters]
            {this.state.robotPaths.map((value, index) => {
              return <path key={`RobotLetters${index}`} id={`RobotLetters${index}`} className="RobotLetters" fill={this.state.robotFill} stroke={this.state.strokeColor} strokeWidth={this.state.strokeWidth} pathLength={this.state.pathLength} d={value} />
            })}
          </svg>
        </div>
      </div>
    );
  }
}

export default Loader;
