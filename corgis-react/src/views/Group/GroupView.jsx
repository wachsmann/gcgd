import React from 'react';

import { connect } from 'react-redux';

import { groupActions } from '../../_actions';
import './group.css'
import { Link } from 'react-router-dom';

class GroupView extends React.Component {
   constructor(props) {
    super(props);

    this.props.dispatch(groupActions.getAll());
  }
  render() {
    const { list } = this.props;
   
    return (
        <div>
            <div className="container">
                <div className="row">   
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span>    Grupos
                                <div className="button pull-right">
                                <Link to="/grupo-novo" className="btn btn-info" title="Adicionar">Adicionar</Link>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-6 col-md-12  '">
                                        <table className="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th>Nome</th>
                                              <th>Quantidade de membros</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                          {list && list.map((result, i) =>
                                            <tr key={result.id}><td>{result.name}</td>
                                            <td>{i}</td>
                                            <td>
                                                <a id={result.users.length} data-toggle='tooltip' title='Visualizar'><i className='btn btn-danger glyphicon glyphicon-remove'></i> </a>
                                                <a id={result.users.length}  data-toggle='tooltip' title='Visualizar'><i  className='btn btn-primary glyphicon glyphicon-pencil'></i> </a>
                                              </td></tr>
                                            )}
                                         
                                            
                                          </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const { list} = state.groups;
    
    
    return {
      list
    };
}

const connectedGroupView = connect(mapStateToProps)(GroupView);
export { connectedGroupView as GroupView }; 