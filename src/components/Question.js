import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Scorecard from './Scorecard';
import QuestionCount from './QuestionCount';

const Question = ({ drugs }) => {
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ array[i], array[j] ] = [ array[j], array[i] ];
		}
		return array;
	}

	const [ optionsArray, setOptionsArray ] = useState([]);
	const [ answerIndex, setAnswerIndex ] = useState(0);
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ isCorrect, setIsCorrect ] = useState('Keep studying...');
	const [ reload, setReload ] = useState(false);
	const [ scoreCard, setScoreCard ] = useState([ 0, 0 ]);

	const setReloadToTrue = () => {
		setReload(true);
		setIsModalOpen(false);
	};

	const setModalIsOpenToTrue = (e) => {
		setIsModalOpen(true);
		console.log(e.target.value);
		if (drugs[answerIndex]['brand'] === e.target.value) {
			setIsCorrect('Woohoo, you are correct!');
			let score = scoreCard[0] + 1;
			let attempts = scoreCard[1] + 1;
			setScoreCard([ score, attempts ]);
		} else {
			let score = scoreCard[0];
			let attempts = scoreCard[1] + 1;
			setScoreCard([ score, attempts ]);
		}
	};

	useEffect(
		() => {
			if (drugs.length) {
				let answerIndex = Math.floor(Math.random() * drugs.length);
				let optionsArray = [];
				while (optionsArray.length < 3) {
					let option = Math.floor(Math.random() * drugs.length);
					if (option === answerIndex || optionsArray.includes(option)) {
						continue;
					}
					optionsArray.push(option);
				}
				optionsArray.push(answerIndex);

				setAnswerIndex(answerIndex);
				setOptionsArray(shuffleArray(optionsArray));
				setReload(false);
				setIsCorrect('Keep studying...');
			}
		},
		[ drugs.length, reload ]
	);

	if (drugs.length === 0) {
		return 'Loading ...';
	}

	return (
		<div>
			<Scorecard scoreCard={scoreCard} />
			<QuestionCount scoreCard={scoreCard} />
			<div className="row">
				<div className="text-center my-1">
					<h2 className="question">What is the brand name of {drugs[answerIndex]['generic']}?</h2>
				</div>
			</div>
			<div className="d-grid gap-2 col-md-8 lead mx-auto">
				{optionsArray.map((option, i) => (
					<button
						className="btn btn-primary"
						onClick={(e) => setModalIsOpenToTrue(e, 'value')}
						key={i}
						value={drugs[option]['brand']}
					>
						{drugs[option]['brand']}
					</button>
				))}
			</div>
			<Modal show={isModalOpen} onHide={setReloadToTrue}>
				<Modal.Header>
					<Modal.Title>{isCorrect}</Modal.Title>
					<button className="btn-close" onClick={setReloadToTrue} />
				</Modal.Header>
				<Modal.Body>
					{drugs[answerIndex]['brand']} is the brand name for {drugs[answerIndex]['generic']}
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-primary" onClick={setReloadToTrue}>
						Next Question
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Question;
