import React from 'react';

class NavItem extends React.Component {
	constructor() {
		super();
		this.dispatch = function(){};

		this.activate = this.activate.bind(this);
	}

	activate() {
		console.log( 'Activating!' );
		console.log( this );
		// this.setState( { isActive: true } );
		this.dispatch( {
			type: 'NAV_ACTIVATE',
			id: this.props.api_name
		} );
	}

	render() {
		this.dispatch = this.props.dispatch ? this.props.dispatch : function(){};
		return (
			<li role="presentation" className={this.props.isActive ? 'active' : ''}>
				<a href="#" onClick={this.props.isActive ? false : this.activate}>{this.props.name}</a>
			</li>
		);
	}
};

NavItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	api_name: React.PropTypes.string.isRequired
};

export default NavItem;