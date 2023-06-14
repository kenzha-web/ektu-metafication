import { Entity } from 'aframe-react'
import React from 'react'

export default class A14 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Entity
				obj-model={{ obj: '#VRroom-obj', mtl: '#VRroom-mtl' }}
				position={[0, 0, -150]}
				rotation={[0, 0, 0]}
				scale={[0.1, 0.1, 0.1]}
				material={{ color: '#666' }}
			></Entity>
		)
	}
}
