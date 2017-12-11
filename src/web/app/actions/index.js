// TODO: Eventually clean up redux code to use this action function rather
// than creating the dispatch object directly

export const setOutcome = (winner) => ({
	type: 'SET_WINNER',
	winner
})