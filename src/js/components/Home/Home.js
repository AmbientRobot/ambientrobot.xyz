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
 * @Last modified time: 2020-09-03T15:46:07+02:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import Typed from 'typed.js';

import profilePhoto from 'assets/img/jpg/Morgan Chaleyssin.jpg';
import 'scss/Home.scss';

import Menu from 'js/components/Menu/Menu';
import Footer from 'js/components/Footer/Footer';

class Home extends Component {

  constructor(props){
		super(props);
    this.state = {
      startAnimation: false
    }
  }

  componentDidMount = () => {
    // Typed initialization options.
    const optionsInit = {
    	strings: ["Hello and welcome !", "I'm Ambient Robot", "Created by Morgan Chaleyssin", "a {(front.developper;)}"],
      typeSpeed: 50,
      backSpeed: 25
    };
    // Typed call.
    this.typed = new Typed(this.element, optionsInit);
    this.typed.stop();
    // Initialization for AboutMe section on click animations.
    this.aboutMeTimeLine = gsap.timeline({paused: true});
    this.aboutMeTimeLine.to("#AboutMeFirstSection", 0.5, { "opacity": 0 ,"display": "none" })
    .to("#AboutMeSecondSection", 0.5, { "opacity": 1, "display": "block" }).reversed(true);
  }

  componentWillUnmount = () => {
    this.typed.destroy();
    this.aboutMeTimeLine.destroy();
  }

  // Waiting for parent (Animations container) to pass the animation props.
  static getDerivedStateFromProps  = (nextProps, prevState) => nextProps.homeStartAnimation === prevState.startAnimation ? null : { startAnimation: nextProps.homeStartAnimation };

  componentDidUpdate() {
    // If it's the first loading else skip all Home animations.
    if (this.state.startAnimation && localStorage.getItem('init') !== "true") {
      // Start square animations.
      this.startAboutMeAnimations();
      // Set localStorage variable to true for the next page loading.
      localStorage.setItem("init", "true");
    } else {
      this.startAboutMeAnimations(true);
    }
  }

  // Square, typed and opacity animations.
  startAboutMeAnimations = (skip) => {
    var timeLine = gsap.timeline({
      onComplete: this.aboutMeAnimationsDone()
    });

    // If skipping all animations.
    if (skip) {
      // Destroy the first typed instance.
      this.typed.destroy();
      // Initialize the new one with only one string.
      this.typed = new Typed(this.element, {
        strings: ["a {(front.developper;)}"],
        typeSpeed: 50
      });
    }

    timeLine.to(".HomeSquare", 2, { strokeDashoffset: 0 })
    .to(".HomeSquare", 1, { "fill-opacity": 1 })
    .to(".HomeSquare", 1, { "stroke-width": "1rem" })
    .to(".typed-cursor", 0, {visibility: "visible"})
    .add(() => this.typed.start())
    .to(".HomeWelcome", 1, { "top": "25%" }, 15)
    .to(".AboutMe", 1, { "opacity": 1 });

    // Set animation progress to final state if skipping.
    if (skip) {
      timeLine.progress(0.93, false);
    }
  }

  aboutMeAnimationsDone = () => {

  }

  clickAnimation = () => {
    this.aboutMeTimeLine.reversed() ? this.aboutMeTimeLine.play() : this.aboutMeTimeLine.reverse();
  }

  hoverAnimation = () => {

  }

  render() {
    return(
      <div className="Home">
        <Menu />
        <div className="HomeContainer">
          <div className="HomeSquareContainer">
            <svg className="HomeSquareSVG">
              <rect className="HomeSquare"/>
            </svg>
            <section>
              <div className="HomeWelcome">
                <span style={{whiteSpace:'pre'}} ref={(element) => {this.element = element;}} />
              </div>
              <article id="AboutMe" className="AboutMe" onMouseEnter={this.hoverAnimation} onMouseLeave={this.hoverAnimation} onClick={this.clickAnimation}>
                <div className="container-fluid">
                  <div className="row justify-content-end">
                    <div className="ProfilePhotoContainer col-sm-3">
                      <img className="ProfilePhoto" src={profilePhoto} alt=""></img>
                    </div>
                    <div className="ProfileContentContainer col-sm-8">
                      <div id="AboutMeFirstSection">
                        <div className="row align-items-center">
                          <div className="col-sm-12">
                            <h1>Morgan Chaleyssin</h1>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-12">
                            <h2>28 years old</h2>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-1">
                            <FontAwesomeIcon className="FontAwesomeIcon" icon="home" />
                          </div>
                          <div className="col-sm-11">
                            <p>Isère, France</p>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-1">
                            <FontAwesomeIcon className="FontAwesomeIcon" icon="code" />
                          </div>
                          <div className="col-sm-11">
                            <p>HTML, SASS, Bootstrap, Javascript, React, WordPress, Symfony</p>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-1">
                            <FontAwesomeIcon className="FontAwesomeIcon" icon="music" />
                          </div>
                          <div className="col-sm-11">
                            <p>Composer, pianist, gamer, streamer</p>
                          </div>
                        </div>
                      </div>
                      <div id="AboutMeSecondSection">
                        <div className="row align-items-center">
                          <div className="col-sm-12">
                            <h1>Morgan Chaleyssin</h1>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-12">
                            <h2>About me</h2>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-sm-1">
                            <FontAwesomeIcon className="FontAwesomeIcon" icon="smile" />
                          </div>
                          <div className="col-sm-11">
                            <p>Conscientious, persevering, patient, calm, rigorous, sensitive, creative, self-critical, honest, respectful and perfectionist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className="row align-items-center justify-content-center">
                    <div className="col-sm-12">
                      <div id="LoadContentArrowContainer" className="LoadContentArrowContainer">
                        <FontAwesomeIcon id="LoadContentArrow" className="LoadContentArrow FontAwesomeIcon" icon="angle-down" />
                      </div>
                    </div>
                  </div>*/}
                </div>
              </article>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
