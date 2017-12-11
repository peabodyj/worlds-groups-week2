import React from 'react';
import { connect } from 'react-redux';

import Week1Records from "./Week1Records";

// TODO List:
// [ ] Todo need to fix how team is passed in
// [ ] Add function to get new records
// [ ] Add function to do rankings based on record
// [ ] Add functions for giving the color

class ResultBubble extends React.Component {
	constructor(props) {
		super(props);
		this.outcome = this.props.outcome;
		this.team = this.props.team;

		this.w1Wins = Week1Records[this.team].wins.length;
		this.w1Losses = Week1Records[this.team].losses.length;

		this.updateRecordFromWeek2();

		// console.log("outcome: " +this.outcome+ "- record "+this.wins+"-"+this.losses);
	}

	// Only display the outcome bubble if its even possible with
	// what is currently selected
	isOutcomePossible() {
		for (var i = 0; i < this.outcome.length; i++) {
			if (this.props.specificOutcome[i] === "none") {
				continue;
			}

			if (this.props.specificOutcome[i] !== this.outcome[i]) {
				return false;
			}
		}
		return true;
	}

	// TODO: Finish this class. We need to keep track of records and tie breakers
	//       to see if the team associated to the ResultBubble would make it out 
	//       groups. The bubble will be different colors based on if they can or not
	updateRecordFromWeek2() {
		const winCount = this.outcome.reduce(function(n, val) {
			//return n + (val === this.team);
		}, 0);

		this.wins = this.w1Wins + winCount;
		this.losses = this.w1Losses + (3 - winCount);
	}

	// TODO: Replace "G" with an actual circle. The circle will be colored red,
	//       green, or yellow. Green means the team will make it out of groups in
	//       this setup. Yellow means they will need to play a tiebreaker to see
	//       if they make it, and red means the team will not make it out of groups.
	render() {
		if(this.isOutcomePossible()){
			return <span>G</span>
		} else {
			return <span></span>;
		}
	}
}

const mapStateToProps = (state) => {
    return {
        specificOutcome: state,
    };
}

export default ResultBubble = connect(mapStateToProps)(ResultBubble);