// Redux reducer - When a user clicks a teamname or the "VS" text,
// we keep track of that state in redux.

// We can probably get away with something much simpiler, but this is good practice
const results = (state = ['none', 'none', 'none', 'none', 'none', 'none'], action) => {
	var i = action.index;
	switch (action.type) {
		case 'SET_WINNER':
			// left, right, unset
			return [
				...state.slice(0, i),
				action.winner,
				...state.slice(i + 1)
			];
		case 'CLEAR_WINNER':
			return [
				...state.slice(0, i),
				'none',
				...state.slice(i + 1)
			];
		default:
			return state;
	}

}

export default results;