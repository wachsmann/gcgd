import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar} from "../../_components";
import { Link } from 'react-router-dom';

import './expense.css'

export class addExpense extends React.Component {
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
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              <label for="nomeGrupo">Descrição</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="nomeGrupo">Valor</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                              <label for="nomeGrupo">Data de Validade</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-body">
                                        <div class="col-md-3">
                                            <label for="inputState">Categoria</label>
                                            <select id="inputState" class="form-control">
                                              <option selected>Todos</option>
                                              <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">                                        
                                            <label for="inputUsuario">Selecione um Usuário do Grupo para vincular há Despesa</label>
                                            <div class="input-group">
                                                <select id="inputState" class="form-control">
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
                                            <select id="inputState" class="form-control">
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
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>John</td>
                                              <td>R$ 1.500,00</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Ted</td>
                                              <td>R$ 1.200,00</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Leo</td>
                                              <td>R$ 500,00</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                    </div>
                                </div>
                                <hr/>
                                <Link to="/despesa" title="Voltar" className="btn btn-warning" title="Voltar">Voltar</Link>

                               
                                <div class="pull-right">
                                  <Link to="/despesa" className="btn btn-success" title="Salvar">Salvar</Link>

                                   
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