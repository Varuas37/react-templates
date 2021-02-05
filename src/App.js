import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import Landing from './views/Landing/Landing';
//Redux Import
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
