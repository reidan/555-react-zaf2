import React, { Component } from 'react';

class Panel extends Component {
	render() {
		var panelClasses = 'panel panel-default';
		if( !this.props.isActive ) {
			panelClasses += ' hide';
		}
		return (
			<div className={panelClasses}>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Panel