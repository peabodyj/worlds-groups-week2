import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import Week2Matchups from './Week2Matchups';
import results from './reducers/results';

const store = createStore(
	results,
	applyMiddleware(logger)
);

class App extends React.Component {
  render () {
  	// TODO: Add each group (4 total), not just group A. Only using 1 
  	// during development
  	return (
  		<Provider store={store}>
  			<Week2Matchups matchups={[['AHQ', 'SKT'],['EDG', 'C9'],['AHQ', 'EDG'],['C9', 'SKT'],['C9', 'AHQ'],['SKT', 'EDG']]} />
  		</Provider>
  	);
  }
}

render(<App/>, document.getElementById('app'));
