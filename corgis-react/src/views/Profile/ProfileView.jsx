import React from 'react';
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
            <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-user"></span>    Meu Perfil
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-6 col-md-6">
                            <form>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">Nome</label>
                                  <input type="email" value={name} className="form-control" 
                                  id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">E-mail</label>
                                  <input type="email" className="form-control" value={email}
                                  id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">Telefone</label>
                                  <input type="email" className="form-control" value={phone}
                                   id="exampleInputEmail1" aria-describedby="emailHelp" disabled></input>
                                </div>
                            </form>
                        </div>
                        <div className="col-xs-6 col-md-6">
                          <form>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Nova Senha</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Confirmar Nova Senha</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Alterar Senha</button>
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