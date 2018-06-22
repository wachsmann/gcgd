import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar} from "../../_components";
import { Link } from 'react-router-dom';

import './expense.css'

export class ExpenseView extends React.Component {
  render() {
    return (
        <div>
            <MainNavbar/>
            <div class="container">
                <div class="row">   
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span class="glyphicon glyphicon-retweet"></span>   Despesas
                                <div class="button pull-right">
                                  <Link to="/despesa-novo" title="Voltar" className="btn btn-info" title="Adicionar">Adicionar</Link>

                                    
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="form-group col-md-3">
                                        <label for="inputState">Grupo</label>
                                        <select id="inputState" class="form-control">
                                          <option selected>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputState">Status</label>
                                        <select id="inputState" class="form-control">
                                          <option selected>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputState">Mês</label>
                                        <select id="inputState" class="form-control">
                                          <option selected>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputState">Usuário</label>
                                        <select id="inputState" class="form-control">
                                          <option selected>Todos</option>
                                          <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-1">
                                        <div class="box-body">
                                            <a href="expense" class="btn btn-primary glyphicon glyphicon-search" data-toggle="tooltip" title="Visualizar"></a>
                                         </div>
                                    </div>
                                    <div class="col-xs-6 col-md-12">
                                        <table class="table table-bordered">
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
                                            <tr>
                                              <td>John</td>
                                              <td>Aluguel</td>
                                              <td>--</td>
                                              <td>Pendente</td>
                                              <td>2</td>
                                              <td>05/01/2018</td>
                                              <td>R$ 1.500,00</td>
                                              <td>
                                                <a href="editExpense" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Ted</td>
                                              <td>Supermercado</td>
                                              <td>--</td>
                                              <td>Pendente</td>
                                              <td>2</td>
                                              <td>05/01/2018</td>
                                              <td>R$ 1.200,00</td>
                                              <td>
                                                <a href="editExpense" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Leo</td>
                                              <td>Conta de água</td>
                                              <td>--</td>
                                              <td>Pendente</td>
                                              <td>5</td>
                                              <td>01/04/2018</td>
                                              <td>R$ 500,00</td>
                                              <td>
                                                <a href="editExpense" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
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