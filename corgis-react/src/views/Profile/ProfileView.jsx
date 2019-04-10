import React from 'react';

import './profile.css'
import { userActions } from '../../_actions';
import {Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

 class ProfileView extends React.Component {
  constructor(props) {
    super(props);

    var obj =JSON.parse(localStorage.getItem('user'));
    this.state = {
      name: obj.user.name,
      password: '',
      email:obj.user.email,
      phone:obj.user.phone,
      id:obj.user.id,
      submitted: false
    };

       this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }  
    handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  } 
  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {id, name, password,email,phone } = this.state;
    const { dispatch } = this.props;
    if (name && password) {
      dispatch(userActions.update({ id,name, password,email,phone}));
    }
  } 
  handleDelete(e) {
    e.preventDefault();
    
    //if (confirm("Deseja realmente excluir sua conta?!")) {
        const {id, name, password,email,phone } = this.state;
    const { dispatch } = this.props;
          dispatch(userActions.delete(id));
    //}
   
    
  } 
  render() {
    const {id,name,email,phone,submitted,password} = this.state;
    return (
        
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
                          <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                  <label>Nome</label>
                                  <input type="hidden" value={id}></input> 
                                  <FormControl
                                    className={"form-control"}
                                   
                                    type="text"
                                    placeholder="Seu nome"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                  
                                />
                                {submitted && !name &&
                                <div className="help-block">
                                    Nome inválido</div>
                                }
                                <FormControl.Feedback />

                                                              
                                </div>
                                <div className="form-group">
                                  <label >E-mail</label>
                            
                                   <FormControl
                                    className={"form-control"}
                                   
                                    type="text"
                                    placeholder="Seu email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                  
                                />
                                {submitted && !email &&
                                <div className="help-block">
                                    Email inválido</div>
                                }
                                <FormControl.Feedback />
                                </div>
                                <div className="form-group">
                                  <label >Telefone</label>
                             
                                   <FormControl
                                    className={"form-control"}
                                   
                                    type="text"
                                    placeholder="Seu telefone"
                                    name="phone"
                                    value={phone}
                                    onChange={this.handleChange}
                                  
                                />
                                {submitted && !phone &&
                                <div className="help-block">
                                    Telefone inválido</div>
                                }
                                <FormControl.Feedback />
                                </div>
                            
                        
                        <div className="col-xs-6 col-md-6">
                          
                                <div className="form-group">
                                    <label >Nova Senha</label>
                                      <FormControl
                                    className={"form-control"}
                                   
                                    type="password"
                                    placeholder="Seu senha"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                  
                                />
                                {submitted && !password &&
                                <div className="help-block">
                                    Senha inválido</div>
                                }
                                <FormControl.Feedback />
                                </div>
                                <div className="form-group">
                                    

                                    
                                     <FormControl
                                    className={"form-control"}
                                   
                                    type="hidden"
                                    placeholder="Seu senha"
                                    name="password"
                                    
                                    onChange={this.handleChange}
                                  
                                />
                               
                                <FormControl.Feedback />
                                </div>
                               <div id="buttonSubmit" >
                                <Button type="submit">Alterar</Button>
                            </div>
                            


                        </div>
                              <div>
                                <Button onClick={this.handleDelete}>Deletar conta</Button>
                            </div>
                      </form>
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


function mapStateToProps(state) {
    const { alert} = state;
    
    return {
        alert
    };
}

const connectedProfileView = connect(mapStateToProps)(ProfileView);
export { connectedProfileView as ProfileView }; 