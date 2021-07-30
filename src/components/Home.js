import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const history = useHistory();

	const onStartQuiz = () => {
		history.push(`/quiz`);
		console.log('test');
	};

	return (
		<div className="row">
			<div className="d-grid gap-2 col-md-7 lead mx-auto">
				<button className="btn btn-primary startQuiz" onClick={onStartQuiz}>
					<span className="display-4">Start Quiz</span>
				</button>
			</div>
		</div>
	);
};

export default Home;
