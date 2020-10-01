import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Tv from '../pages/TVshow';
import Movies from '../pages/Movies';
//import Error from '../pages/404';
import Recently from "../pages/RecentlyReleased";
import Kid from "../pages/Kids";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/TVshow' component={Tv} />
					<Route exact path='/Movies' component={Movies} />
					<Route exact path='/RecentlyReleased' component={Recently} />
					<Route exact path='/KIDS' component={Kid} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
