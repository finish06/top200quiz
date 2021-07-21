import React from 'react';

const Scorecard = ({ scoreCard }) => (
	<div className="row">
		<h3 className="scoreCard my-1 offset-1">
			{' '}
			Score: {scoreCard[0]} / {scoreCard[1]} correct.{' '}
		</h3>
	</div>
);

export default Scorecard;
