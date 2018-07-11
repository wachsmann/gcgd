
import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class UserSelector extends React.Component {
	constructor(props) {
		super(props);
		let currentSess = JSON.parse(localStorage.getItem('user'));
	 	this.state = {
	 		user:currentSess.user
	 	};
	 
		this.props.dispatch(userActions.getAll());
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(event) {
	    
		this.props.handleChange({id:event.target.value,name:event.target[event.target.selectedIndex].text});
	
	}
		render() {
			const { items } = this.props;
			
				return(
					<select onChange={this.handleChange} id="inputState" className="form-control">
						<option value={-1}>Todos</option>
						{items && items.map((result, i) =>
							result.id !== this.state.user.id && <option datatext={result.name}  key={result.name} value={result.id}>{result.name}</option>
		 				)}
				</select>
				);
		}
}

function mapStateToProps(state) {
    const {items} = state.users;
    return {
      items
    };
}

const connectedUserSelector = connect(mapStateToProps)(UserSelector);
export { connectedUserSelector as UserSelector }; 