import React from 'react';

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
                                  <label>Nome</label>
                                  <input type="email" value={name} className="form-control" 
                                   aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div className="form-group">
                                  <label >E-mail</label>
                                  <input type="email" className="form-control" value={email}
                                   aria-describedby="emailHelp" disabled></input>
                                </div>
                                <div className="form-group">
                                  <label >Telefone</label>
                                  <input type="email" className="form-control" value={phone}
                                    aria-describedby="emailHelp" disabled></input>
                                </div>
                            </form>
                        </div>
                        <div className="col-xs-6 col-md-6">
                          <form>
                                <div className="form-group">
                                    <label >Nova Senha</label>
                                    <input type="password" className="form-control"  placeholder="Password"></input>
                                </div>
                                <div className="form-group">
                                    <label >Confirmar Nova Senha</label>
                                    <input type="password" className="form-control"  placeholder="Password"></input>
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