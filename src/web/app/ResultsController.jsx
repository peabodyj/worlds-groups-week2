import React from 'react';
import { connect } from 'react-redux';

import ResultBubble from './ResultBubble';

const container = {
	display: "block",
	width: "75px",
	backgroundColor: "red",
	textAlign: "center",
	fontSize: "24px",
}

class ResultsController extends React.Component {
	constructor(props) {
		super(props);

		this.matchups = this.props.matchups;
		this.team = this.props.team;
	}

	// Recursively keep track of all the possible outcomes (n! outcomes)
	// Display the result bubbles for each team showing what results need
	// to happen for that team to make it out of groups and into the bracket play.
	getOutcomes(games) {
		var ret = [];
		var prevOutcomes, newOutcomes;
		// more recursion
		if (games.length > 1) {
			prevOutcomes = this.getOutcomes(games.slice(1, games.length));

			for (var i = 0; i < prevOutcomes.length; i++) {
				ret = [
					...ret,
					[games[0][0], ...prevOutcomes[i]],
					[games[0][1], ...prevOutcomes[i]]
				];
			}

			return ret;
		} else {
			ret = [[games[0][0]], [games[0][1]]];
			return ret;
		}
	}

	render() {
		const outcomes = this.getOutcomes(this.matchups);

		// TODO: Fix how we pass in the team, not hardcode C9
		const bubbles = outcomes.map((outcome, i) => {
			return <ResultBubble key={i} outcome={outcome} team="C9" />
		});

		// {this.team}:{bubbles}
		// TODO: Make bubbles (circles)! Not just letters
		return (
			<span style={container}>
				{this.team}
			</span>
		);
	}
}

export default ResultsController;