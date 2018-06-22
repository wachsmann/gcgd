import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar} from "../../_components";

import './profile.css'

export class ProfileView extends React.Component {
  constructor(props) {
    super(props);

    var obj =JSON.parse(localStorage.getItem('user'));
    this.state = {
      name: obj.user.name,
      password: '',
      email:obj.user.email,
      phone:obj.user.phone,
      submitted: false
    };

   
  }    
  render() {
    const {name,email,phone} = this.state;
    return (
        <div>
            <MainNavbar/>
            <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <span class="glyphicon glyphicon-user"></span>    Meu Perfil
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-6 col-md-6">
                            <form>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Nome</label>
                                  <input type="email" value={name} className="form-control" 
                                  id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">E-mail</label>
                                  <input type="email" class="form-control" value={email}
                                  id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Telefone</label>
                                  <input type="email" class="form-control" value={phone}
                                   id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                            </form>
                        </div>
                        <div class="col-xs-6 col-md-6">
                          <form>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Nova Senha</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Confirmar Nova Senha</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Alterar Senha</button>
                            </form>
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