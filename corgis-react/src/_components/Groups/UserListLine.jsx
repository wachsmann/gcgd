import React from 'react';
import { Button } from 'react-bootstrap';


export default class UserListLine extends React.Component {
	removeMe = () => {
		console.log("ID",this.props.name)

	}
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>
					<Button href="" id={this.props.id} onClick={this.removeMe.bind(this.props.id)} data-toggle="tooltip" title="Visualizar">
						<i className="btn btn-danger glyphicon glyphicon-remove"></i>
					</Button>
				</td>
			</tr>
		);
	}
}

