import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar} from "../../_components";

import './expense.css'

export class editExpense extends React.Component {
  render() {
    return (
        <div>
            <MainNavbar/>
            <div class="container">
                <div class="row">   
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span class="glyphicon glyphicon-retweet"></span>   Cadastrar Despesas
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="box-body">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              <label for="nomeGrupo">Nome da Despesa</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome" disabled></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              <label for="nomeGrupo">Descrição</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome" disabled></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="nomeGrupo">Valor</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome" disabled></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              <label for="nomeGrupo">Data de Validade</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome" disabled></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-body">
                                        <div class="col-md-3">
                                            <label for="inputState">Categoria</label>
                                            <select id="inputState" class="form-control" disabled>
                                              <option selected>Todos</option>
                                              <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">                                        
                                            <label for="inputUsuario">Selecione um Usuário do Grupo para vincular há Despesa</label>
                                            <div class="input-group">
                                                <select id="inputState" class="form-control" disabled>
                                                    <option selected>Todos</option>
                                                    <option>...</option>
                                                </select>
                                              <span class="input-group-btn">
                                                <button class="btn btn-success" type="button">Inserir</button>
                                              </span>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <label for="inputState">Quantidades de Parcelas</label>
                                            <select id="inputState" class="form-control" disabled>
                                              <option selected>Todos</option>
                                              <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6 col-md-12">
                                        <table class="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th>Colaborador</th>
                                              <th>Valor</th>
                                              <th>Status</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>John</td>
                                              <td>R$ 1.500,00</td>
                                              <td><kbd>Pago</kbd></td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Remover"></a>
                                                <a href="" class="btn btn-warning glyphicon glyphicon-usd" data-toggle="tooltip" title="Pendente"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Ted</td>
                                              <td>R$ 1.200,00</td>
                                              <td><kbd>Pendente</kbd></td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Remover"></a>
                                                <a href="" class="btn btn-primary glyphicon glyphicon-usd" data-toggle="tooltip" title="Pagar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Leo</td>
                                              <td>R$ 500,00</td>
                                              <td><kbd>Pago</kbd></td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Remover"></a>
                                                <a href="" class="btn btn-warning glyphicon glyphicon-usd" data-toggle="tooltip" title="Pendente"></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                    </div>
                                </div>
                                <hr/>
                                <a href="expense" class="btn btn-warning" data-toggle="tooltip" title="Voltar"> Voltar</a>
                                <div class="pull-right">
                                    <a href="expense" class="btn btn-success" data-toggle="tooltip" title="Salvar"> Salvar</a>
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