import React from 'react';
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
            <div className="container">
                <div className="row">   
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-retweet"></span>   Despesas
                                <div className="button pull-right">
                                  <Link to="/despesa-novo" className="btn btn-info" title="Adicionar">Adicionar</Link>

                                    
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
                                            <a href="expense"  data-toggle="tooltip" title="Visualizar"><i className="btn btn-primary glyphicon glyphicon-search"></i> </a>
                                         </div>
                                    </div>
                                    <div className="col-xs-6 col-md-12">
                                        <table className="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th style={{width:200}}>Usuário</th>
                                              <th>Nome</th>
                                              <th>Status</th>
                                              <th style={{width:50}}>Parcelas</th>
                                              <th>Data de vencimento</th>
                                              <th>Grupo</th>
                                              <th>Valor</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {list && list.map((result, i) =>
                                              <tr key={result.id}>
                                              <td>{result.admin.name}</td>
                                              <td>{result.name}</td>
                                              <td>{result.status}</td>
                                              <td>-</td>
                                              <td>{result.validity.slice(0,10)}</td>
                                              <td>{result.group.name}</td>
                                              <td>{result.total}</td>

                                              <td>
                                              <a data-toggle="tooltip" title="Visualizar"><i className="btn btn-primary glyphicon glyphicon-pencil"></i></a>
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