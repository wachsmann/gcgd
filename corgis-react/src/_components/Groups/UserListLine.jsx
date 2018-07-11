import React from 'react';


export default class UserListLine extends React.Component {

	render() {
			return( 
				<tr>
					<td>{this.props.name}</td>
					<td>{this.props.email}</td>
					<td>
					<a href="" id={this.props.id} data-toggle="tooltip" title="Visualizar"><i className="btn btn-danger glyphicon glyphicon-remove"></i></a>
					</td>
				</tr>
			);
		}
}
  
       