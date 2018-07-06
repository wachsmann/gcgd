import React from 'react';
import {MainNavbar} from "../../_components";
import { Link } from 'react-router-dom';

import './group.css'

export class editGroup extends React.Component {
  render() {
    return (
        <div>
            <MainNavbar/>
            <div class="container">
                <div class="row">   
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span class="glyphicon glyphicon-user"></span>    Editar Grupo - Nome_do_Grupo
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6 col-md-6">
                                        <form>
                                            <div class="form-group">
                                              <label for="nomeGrupo">Nome do Grupo</label>
                                              <input type="nome" class="form-control" id="nome" aria-describedby="nome" disabled></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-xs-6 col-md-6">                                        
                                        <label for="inputUsuario">Selecione um Usuário para vincular ao Grupo</label>
                                        <div class="input-group">
                                          <input type="text" class="form-control"/>
                                          <span class="input-group-btn">
                                            <button class="btn btn-success" type="button">Inserir</button>
                                          </span>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-xs-6 col-md-12">
                                                <table class="table table-bordered">
                                                  <thead>
                                                    <tr bgcolor="#ddd">
                                                      <th>Nome</th>
                                                      <th>E-mail</th>
                                                      <th>Ações</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>Leonardo Dalbosco</td>
                                                      <td>leodalbosco@hotmail.com</td>
                                                      <td>
                                                        <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>Daniel Battisti</td>
                                                      <td>daniel@hotmail.com</td>
                                                      <td>
                                                        <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>Victor Hugo F. Wachsmann</td>
                                                      <td>victor@hotmail.com</td>
                                                      <td>
                                                        <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <Link to="/grupo" title="Voltar" className="btn btn-warning">Voltar</Link>

                                <div class="pull-right">

                                    <a href="group" class="btn btn-success" data-toggle="tooltip" title="Salvar"> Salvar</a>
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