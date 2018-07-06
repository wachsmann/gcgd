import React from 'react';
import {MainNavbar} from "../../_components";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { expenseActions } from '../../_actions';

import './expense.css'

class ExpenseView extends React.Component {
   constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(expenseActions.getAll());
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
                                <span className="glyphicon glyphicon-retweet"></span>   Despesas
                                <div className="button pull-right">
                                  <Link to="/despesa-novo" title="Voltar" className="btn btn-info" title="Adicionar">Adicionar</Link>

                                    
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label >Grupo</label>
                                        <select id="inputState" className="form-control">
                                          <option>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label >Status</label>
                                        <select id="inputState" className="form-control">
                                          <option>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label >Mês</label>
                                        <select id="inputState" className="form-control">
                                          <option>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label >Usuário</label>
                                        <select id="inputState" className="form-control">
                                          <option>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-1">
                                        <div className="box-body">
                                            <a href="expense" className="btn btn-primary glyphicon glyphicon-search" data-toggle="tooltip" title="Visualizar"></a>
                                         </div>
                                    </div>
                                    <div className="col-xs-6 col-md-12">
                                        <table className="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th>Usuário</th>
                                              <th>Nome</th>
                                              <th>Descrição</th>
                                              <th>Status</th>
                                              <th>Quantidade de parcelas</th>
                                              <th>Data de vencimento</th>
                                              <th>Valor</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {list && list.map((result, i) =>
                                              <tr>
                                              <td>{result.admin.name}</td>
                                              <td>{result.name}</td>
                                              <td>{result.description}</td>
                                              <td>{result.status}</td>
                                              <td>-</td>
                                              <td>{result.validity}</td>
                                              <td>{result.total}</td>

                                              <td>
                                              <a className="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
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
    const { list} = state.expenses;
    
    
    return {
      list
    };
}

const connectedExpenseView = connect(mapStateToProps)(ExpenseView);
export { connectedExpenseView as ExpenseView }; 