import React from 'react';
import ReactDOM from 'react-dom';

import NavItem from '../components/NavItem/NavItem.jsx';
import Panel from '../components/Panel/Panel.jsx';
import Engage from '../components/Engage/Engage.jsx';
import OnCall from '../components/OnCall/OnCall.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			pages: [
				{
					api_name: 'engage',
					name: 'Engage with xMatters',
					isActive: true,
					content: <Engage />
				},
				{
					api_name: 'on_call',
					name: 'Who\'s on Call',
					isActive: false,
					content: <OnCall />
				}
			]
		};
		this.dispatch = this.dispatch.bind(this);
	}
	dispatch(event) {
		console.log( this );
		console.log( event );
		switch(event.type) {
			case "NAV_ACTIVATE":
				var pages = this.state.pages;
				for( var i = 0; i < pages.length; i++ ) {
					var page = pages[i];
					page.isActive =  page.api_name === event.id;
				}
				this.setState( { "pages": pages } );
				break;
			default:
				console.log( 'Not listening for ' + event.type );
				break;
		}
	}
	render() {
		var navItems = [];
		var panels = [];
		for( var i = 0; i < this.state.pages.length; i++ ) {
			var page = this.state.pages[i];
			navItems.push( <NavItem isActive={page.isActive} name={page.name} api_name={page.api_name} key={page.api_name} dispatch={this.dispatch} /> );
			panels.push( <Panel isActive={page.isActive} key={page.api_name}>{page.content}</Panel> );
		}
		return (
			<div>
				<ul className="nav nav-tabs">
					{navItems}
				</ul>	
				{panels}
			</div>
		);
	}
}

export default App