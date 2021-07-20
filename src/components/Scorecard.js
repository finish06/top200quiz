import React from 'react';

const Scorecard = ({ scoreCard }) => (
	<h3 className="scoreCard">
		{' '}
		Score: {scoreCard[0]} / {scoreCard[1]} correct.{' '}
	</h3>
);

export default Scorecard;
