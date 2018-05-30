import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {HomeView,LoginView,RegisterView} from './views';
//import {MainNavbar} from './_components';
import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';

class App extends Component {
	constructor(props) {
		super(props);

    console.log(this.props);
    const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}
  render() {
    return (
      <div>
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView}/>
          <Route path="/cadastro" component={RegisterView}/>
        </div>
      </Router>
     
       
        
        
        </div>
      

      
    );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 

