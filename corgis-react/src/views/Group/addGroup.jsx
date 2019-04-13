import React from 'react';
import { Link } from 'react-router-dom';
import './group.css';
import UserListLine from "../../_components/Groups/UserListLine";
import {UserSelector} from "../../_components/UserSelector";
import {Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';

import { connect } from 'react-redux';

export class addGroup extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            users:[],
            selectedUser:{}
        };

       
  }

  handleSelector(selected) {
    
    console.log(selected);
    //this.setState({ selectedUser:{selected}});
    //https://stackoverflow.com/questions/41317343/react-js-how-to-access-to-input-value-in-child-component
  }
   addUser() {
    console.log(this.props  );
      //this.setState({ users.push()});
   }

  render() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Col md={12}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span><ControlLabel> Novo Grupo</ControlLabel>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <Col md={6}>
                                        <form>
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
                                        </form>
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
                                                    <UserListLine name={"Jarbas"} email={"jarbas@gmail.com"} id={1} />
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