import React from 'react';
import { Button } from 'react-bootstrap';


export default class ExpenseListLine extends React.Component {
	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete = (event,id)=>{
		event.stopPropagation();
		this.props.handleDelete(event,id);
	}
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.value}</td>
				<td>
					<Button className="btn btn-danger " href="" id={this.props.id} onClick={event => this.handleDelete(event, this.props.id)} data-toggle="tooltip" title="Delete">
						<i className="glyphicon glyphicon-remove"></i>
					</Button>
				</td>
			</tr>
		);
	}
}

