import React from 'react';

import Header from '../components/Header';
import Question from '../components/Question';
import Footer from '../components/Footer';

const MainLayout = (props) => (
	<div className="container-sm">
		<Header />
		<Question drugs={props.drugs} />
		<Footer />
	</div>
);

export default MainLayout;
