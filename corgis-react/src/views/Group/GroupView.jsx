import React from 'react';
import {MainNavbar} from "../../_components";

import { connect } from 'react-redux';

import { groupActions } from '../../_actions';
import './group.css'
import { Link } from 'react-router-dom';

class GroupView extends React.Component {
   constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(groupActions.getAll());
  }
  render() {
    const { list } = this.props;
   
    return (
        <div>
            <MainNavbar/>
            <div className="container">
                <div className="row">   
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span>    Grupos
                                <div className="button pull-right">
                                <Link to="/grupo-novo" title="Voltar" className="btn btn-info" title="Adicionar">Adicionar</Link>
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
                                            <tr><td>{result.name}</td>
                                            <td>{i}</td>
                                            <td>
                                                <a id={result.users.length} className='btn btn-danger glyphicon glyphicon-remove' data-toggle='tooltip' title='Visualizar'></a>
                                                <a id={result.users.length}  className='btn btn-primary glyphicon glyphicon-pencil' data-toggle='tooltip' title='Visualizar'></a>
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