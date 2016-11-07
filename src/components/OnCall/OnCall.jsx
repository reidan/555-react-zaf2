import React, { Component } from 'react';

class OnCall extends Component {
	render() {

		return (
			<div>
				<label>Group</label>
				<input type="text" placeholder="Enter Group Name Here" />
				<div>
					Results will display here.
				</div>
			</div>
		);
	}
}


export default OnCall;