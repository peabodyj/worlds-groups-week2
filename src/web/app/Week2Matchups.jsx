import React from 'react';
import { connect } from 'react-redux';
import { setOutcome } from './actions';

import MatchupSelect from './MatchupSelect';
import ResultsController from './ResultsController'

class Week2Matchups extends React.Component {
	constructor(props) {
		super(props);

		this.matchups = this.props.matchups;
	}

	render() {
		const matches = this.matchups.map((match, i) => {
			return <MatchupSelect key={i} number={i} matchup={match} />
		});

		// Page will look like:
		// Matchup Row 1
		// Matchup Row 2
		// Matchup Row ...
		// Matchup Row N
		// Result Bubbles
		return (
			<div>
				{matches}
				<div style={{paddingTop: "50px", width: "300px", display: "flex", justifyContent: "space-between",}}>
					<ResultsController matchups={this.matchups} team="C9" />
					<ResultsController matchups={this.matchups} team="AHQ" />
					<ResultsController matchups={this.matchups} team="EDG" />
					<ResultsController matchups={this.matchups} team="SKT" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default Week2Matchups;