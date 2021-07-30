import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Question from '../components/Question';
import Footer from '../components/Footer';

const MainLayout = (props) => (
	<div className="container-sm">
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/quiz">
					<Question drugs={props.drugs} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
		<Footer />
	</div>
);

export default MainLayout;
