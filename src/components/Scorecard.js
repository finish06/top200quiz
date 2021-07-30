import React from 'react';

const Scorecard = ({ scoreCard }) => (
	<div className="row">
		<p className="scoreCard my-1 display-6 text-center"> Score: {scoreCard[0]} </p>
	</div>
);

export default Scorecard;
