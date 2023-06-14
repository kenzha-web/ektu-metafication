import 'aframe'
import 'aframe-extras'
import 'aframe-fps-look-component'
import { Scene } from 'aframe-react'
import 'aframe-text-component'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import 'tween'

import Assets from './components/Assets'
import Camera from './components/Camera'
import Lights from './components/Lights'
import Video from './components/Video'
import VRModel from './components/VR-Model'

var extras = require('aframe-extras')
AFRAME.registerComponent('velocity', extras.math.velocity) // Register a single component.
extras.physics.registerAll() // Register a particular package, and its dependencies.
extras.registerAll()

class AppScene extends React.Component {
	constructor(props) {
		super(props)

		this.handleChangeSeatClick = this.handleChangeSeatClick.bind(this)
	}

	handleChangeSeatClick() {
		this.refs['camera'].fadeCanvasTextIn()
		this.refs['camera'].refs['cursor'].cursorAnimation()
		this.refs['camera'].refs['seats'].fadeIn()
	}

	render() {
		console.log('test')
		return (
			<Scene>
				<Assets introAnimation={this.introAnimation} />
				<Camera
					handleChangeSeatClick={this.handleChangeSeatClick}
					ref='camera'
				/>
				<Lights />
				<VRModel />
				<Video ref='video' />
			</Scene>
		)
	}
}

ReactDOM.render(<AppScene />, document.getElementById('scene-container'))
