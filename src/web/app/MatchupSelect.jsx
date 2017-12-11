import React from 'react';
import { connect } from 'react-redux';
// import { setOutcome } from './actions';

// TODO: Use a styles library to manage cascading styles easier
// Styles
const teamName = {
	fontFamily: "Helvetica Neue",
	fontWeight: "300",
	fontSize: "36",
	textAlign: "center",
	width: "75px",
}
const teamNameSelected = {
	fontFamily: "Helvetica Neue",
	fontSize: "36",
	textAlign: "center",
	width: "75px",
	fontWeight: "500",
};
const matchupRow = {
	display: "flex",
	justifyContent: "space-between",
}

class MatchupSelect extends React.Component {

	constructor(props) {
		super(props);

		this.matchup = this.props.matchup;
		this.team1 = this.matchup[0];
		this.team2 = this.matchup[1];
		this.gameNum = this.props.number;
	}

	// Dispatch the new team name click to redux
	teamSelected(team) {
		switch (team) {
			case 0:
				this.props.setWinner(this.gameNum, this.team1);
				break;
			case 1:
				this.props.setWinner(this.gameNum, this.team2);
				break;
			case 2:
				this.props.clearWinner(this.gameNum);
				break;
		}
	}

	render() {
		var printLine = "";

		// Formats differently to show which team is selected. 
		// TODO: Clean this ugly code up.
		if (this.props.outcomes[this.gameNum] === this.team1) {
			printLine = <div style={matchupRow}><span style={teamNameSelected} onClick={() => this.teamSelected(0)}>{this.team1}</span> <span style={teamName} onClick={() => this.teamSelected(2)}>vs</span> <span style={teamName} onClick={() => this.teamSelected(1)}>{this.team2}</span></div>
		} else if (this.props.outcomes[this.gameNum] === this.team2) {
			printLine = <div style={matchupRow}><span style={teamName} onClick={() => this.teamSelected(0)}>{this.team1}</span> <span style={teamName} onClick={() => this.teamSelected(2)}>vs</span> <span style={teamNameSelected} onClick={() => this.teamSelected(1)}>{this.team2}</span></div>
		} else {
			printLine = <div style={matchupRow}><span style={teamName} onClick={() => this.teamSelected(0)}>{this.team1}</span> <span style={teamNameSelected} onClick={() => this.teamSelected(2)}>vs</span> <span style={teamName} onClick={() => this.teamSelected(1)}>{this.team2}</span></div>
		}
		
		return (
			<div style={{width: "300px"}}>
				{printLine}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    outcomes: state
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
  	  setWinner: (num, teamname) => {
  	  	dispatch({
          type: "SET_WINNER",
          index: num,
          winner: teamname
        });
  	  	console.log("["+num+"] new winner: "+teamname);
  	  },
  	  clearWinner: (num) => {
  	  	dispatch({
          type: "CLEAR_WINNER",
          index: num,
        });
  	  	console.log("["+num+"] winner cleared");
  	  }
  }
};

export default MatchupSelect = connect(mapStateToProps, mapDispatchToProps)(MatchupSelect);
