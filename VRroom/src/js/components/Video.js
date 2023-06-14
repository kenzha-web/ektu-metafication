import { Entity } from 'aframe-react'
import React from 'react'

export default class Video extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Entity>
				<a-video
					webkit-playsinline=''
					id='video'
					src='#video'
					width='85.7'
					height='46.7'
					position='0 40 -163.25'
				/>
			</Entity>
		)
	}
}
