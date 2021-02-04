import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import history from './utils/history';
import Landing from './views/Landing/Landing';
function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	);
}

export default App;
