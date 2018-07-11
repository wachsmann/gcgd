import React from 'react';
import { Link } from 'react-router-dom';
import './group.css';
import UserListLine from "../../_components/Groups/UserListLine";
import {UserSelector} from "../../_components/UserSelector";
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
    console.log(this.props);
      //this.setState({ users.push()});
   }

  render() {
    return (
        <div>
            <div className="container">
                <div className="row">   
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span>    Novo Grupo
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-6 col-md-6">
                                        <form>
                                            <div className="form-group">
                                              <label >Nome do Grupo</label>
                                              <input type="nome" className="form-control" id="nome" aria-describedby="nome"></input>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-xs-6 col-md-6">                                        
                                        <label >Selecione um Usuário para vincular ao Grupo</label>
                                        <div className="input-group">
                                          <UserSelector handleChange={this.handleSelector} />
                                          <span className="input-group-btn">
                                            <button onClick={this.addUser} className="btn btn-success" type="button">Inserir</button>
                                          </span>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-6 col-md-12">
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
                                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
  }
}