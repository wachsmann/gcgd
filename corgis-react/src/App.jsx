import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {HomeView, LoginView, RegisterView, ProfileView, GroupView,
        addGroup, editGroup, ExpenseView, addExpense, editExpense} from './views';

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

          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
          </div>
          <PrivateRoute path="/perfil" component={ProfileView}/>
          <PrivateRoute path="/grupo" component={GroupView}/>
          <PrivateRoute path="/grupo-novo" component={addGroup}/>
          <PrivateRoute path="/grupo-edicao" component={editGroup}/>
          <PrivateRoute path="/despesa" component={ExpenseView}/>
          <PrivateRoute path="/despesa-novo" component={addExpense}/>
          <PrivateRoute path="/despesa-edicao" component={editExpense}/>
          <Route path="/login" component={LoginView}/>
          <Route path="/cadastro" component={RegisterView}/>
          <PrivateRoute path="/" exact component={HomeView}/>
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

