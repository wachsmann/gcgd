import React from 'react';
import { Link } from 'react-router-dom';

import './group.css'
import {Button, Col, ControlLabel, FormControl} from "react-bootstrap";
import {UserSelector} from "../../_components/UserSelector";

export class editGroup extends React.Component {
  render() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Col md={12}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span><ControlLabel> Editar Grupo - Nome_do_Grupo</ControlLabel>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <Col md={6}>
                                        <div className="form-group">
                                            <ControlLabel>Nome do Grupo</ControlLabel>
                                            <FormControl
                                                className={"form-control"}
                                                type="nome"
                                                placeholder="Sua senha"
                                                aria-describedby="none"
                                                name="password"
                                            />
                                            <FormControl.Feedback />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <ControlLabel>Selecione um Usuário para vincular ao Grupo</ControlLabel>
                                        <div className="input-group">
                                            <UserSelector handleChange={this.handleSelector} />
                                            <span className="input-group-btn">
                                            <Button onClick={this.addUser} className="btn btn-success" type="button">Inserir</Button>
                                          </span>
                                        </div>
                                    </Col>
                                    <div className="panel-body">
                                        <div className="row">
                                            <Col md={12}>
                                                <table className="table table-bordered">
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
                                                        <a href="" data-toggle="tooltip" title="Visualizar"><i  className="btn btn-danger glyphicon glyphicon-remove"></i></a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <Link to="/grupo" title="Voltar" className="btn btn-warning">Voltar</Link>

                                <div className="pull-right">
                                    <a href="group" className="btn btn-success" data-toggle="tooltip" title="Salvar"> Salvar</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    );
  }
}