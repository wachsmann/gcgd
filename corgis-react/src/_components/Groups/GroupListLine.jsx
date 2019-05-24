import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {history} from "../../_helpers";
import {groupActions} from "../../_actions";

import {connect} from 'react-redux';

class GroupListLine extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleDelete = (event,id)=>{
		event.stopPropagation();
		this.props.handleDelete(event,id);

	}
	handleEdit = (event,id)=>{
		event.stopPropagation();
		const {dispatch} = this.props;

		this.props.dispatch(groupActions.getById(id));
		history.push('/grupo-edicao/'+id);
	}
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.qtd}</td>
				
				<td>
                <ButtonToolbar>
                    <Button variant="danger"   id={this.props.id} onClick={event => this.handleDelete(event, this.props.id)}  variant="danger" data-toggle="tooltip" title="Visualizar">
						<i className="glyphicon glyphicon-remove"></i> 
					</Button>
					<Button  variant="warning" id={this.props.id} onClick={event => this.handleEdit(event, this.props.id)} data-toggle="tooltip" title="Editar">
						<i className="glyphicon glyphicon-pencil"></i>
					</Button>
                </ButtonToolbar>
				</td>
			</tr>
		);
	}
}
function mapStateToProps(state) {
	return {};
}
const connectedGroupListLine = connect()(GroupListLine);
export {connectedGroupListLine as GroupListLine};