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
 * @Filename: Waves.js
 * @Last modified by:
 * @Last modified time: 2020-06-20T15:15:32+02:00
 * @Copyright: Ambient Robot 2020
 * ________________________________________________________
 * #######################################################
 */

import React, { Component } from 'react';
import * as THREE from 'three';
import 'scss/Waves.scss';

class Waves extends Component {

  constructor(props){
		super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    // Set count variable for wave loop animation
    this.count = 0;
    // Set fog color
    this.fogcolor = 0x000000;
    this.fogdistance = 10;
    // Set plane size, definition and vertex height
    this.planesize = 1;
    this.planedefinition = 10;
    this.vertexheight = 0.25;
    // Set animation assets
    this.animationspeedfactor = 1/10000;
    // Get client width and height
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;
    // Set initial mouse position
    this.mouseX = 0;
    this.mouseY = 0;
    // Set WebGL renderer
    this.renderer = new THREE.WebGLRenderer();
    // Set camera
    this.camera = new THREE.PerspectiveCamera(10, this.width/this.height, 1, 1000);
    this.camera.position.x = 3;
    this.camera.position.y = 2;
    this.camera.position.z = 3;
    // Set scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(this.fogcolor, 1, this.fogdistance);
    // Set Plane Geometry
    this.planegeometry = new THREE.PlaneGeometry(this.planesize, this.planesize, this.planedefinition, this.planedefinition);
    // Set Mesh colors and geometry
    for (var i = 0, length = this.planegeometry.faces.length; i < length; i += 2) {
      this.planegeometry.faces[i].color.setHSL(0, 0, i / 200);
      this.planegeometry.faces[i + 1].color.copy(this.planegeometry.faces[i].color);
		}
    this.mesh = new THREE.Mesh(this.planegeometry, new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors
	  }));
    // Rotate the mesh horizontaly (-180°)
    this.mesh.rotation.x -= Math.PI * .5;
    // Set size and pixel ratio of renderer
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    // Adding render to DOM
    this.mount.appendChild(this.renderer.domElement);
    // Set initial plane state
    this.initPlane();
    // Adding mesh to scene
    this.scene.add(this.mesh);
    // Start animation
    this.start();
    // Mouse controls event (not used)
    window.addEventListener('mousemove', this.mouseMove, false);
    // Resize event
    window.addEventListener('resize', this.onWindowResize, false);
  }

  initPlane = () => {
		for (var i = 0; i < this.planegeometry.vertices.length; i++) {
      this.planegeometry.vertices[i].z += Math.random() * this.vertexheight - this.vertexheight;
      this.planegeometry.vertices[i]._myZ = this.planegeometry.vertices[i].z
		}
	};

  // Component unmount function
  componentWillUnmount = () => {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  // Mouse move event function
  mouseMove = (event) => {
    this.mouseX = (event.clientX) / 10000;
		this.mouseY = (event.clientY) / 10000;
  }

  // Window resize event function
  onWindowResize = () => {
  	this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
  	this.camera.updateProjectionMatrix();
  	this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
	}

  // Start function
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  // Stop function
  stop = () => {
    cancelAnimationFrame(this.frameId);
  }

  // Renderer animation function
  animate = () => {
    // Camera position according to the mouse
    this.camera.position.x += (3 - this.mouseX - this.camera.position.x);
    this.camera.position.y += (2 - this.mouseY - this.camera.position.y);
		this.camera.lookAt(this.scene.position);

    // Update vertices for wave animation
    for (var i = 0; i < this.planegeometry.vertices.length; i++) {
      this.planegeometry.vertices[i].z = Math.sin((i + this.count * this.animationspeedfactor)) * (this.planegeometry.vertices[i]._myZ - (this.planegeometry.vertices[i]._myZ * 0.5))
      this.mesh.geometry.verticesNeedUpdate = true;
      this.count += 0.1;
    }

    // Render scene
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  // Render scene function
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return(
      <div>
        <div id="Waves" style={{width: '100%', height: '100%'}} ref={(mount) => {this.mount = mount}} />
      </div>
    )
  }
}

export default Waves;
