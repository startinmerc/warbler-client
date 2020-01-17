import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar';
import Main from './Main';
import Footer from '../components/Footer';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();

if(localStorage.jwtToken){
	// set Auth token if one is present in ls
	setAuthorizationToken(localStorage.jwtToken);
	try {
		// decode jwtToken, set decoded data as current user
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (e) {
		// clear user if unsucessful
		store.dispatch(setCurrentUser({}));
	}
}

const App = ()=>(
	<Provider store={store}>
		<Router>
			<Navbar />
			<Main />
			<Footer />
		</Router>
	</Provider>
);

export default App;
