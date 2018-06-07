import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
 
import { connect } from 'react-redux';

import { userActions } from '../../_actions';
import './index.css'
class LoginView extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    
    return (
        <html>
            <body>
                <div className="login-box">
                    <div id="img"></div>
                    <Col xs={12} md={12}>
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit}>

                            <FormGroup
                                className={'form-group' + (submitted && !username ? ' has-error' : '')}
                                controlId="formE-mail"
                                //validationState={this.getValidationState()}
                            >
                                <ControlLabel id="text">E-mail</ControlLabel>

                                <FormControl
                                    id="campoTexto"
                                    type="text"
                                    placeholder="Seu e-mail"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                    // onChange={this.handleChange}
                                />
                                {submitted && !username &&
                                <div className="help-block">
                                    E-mail inválido</div>
                                }
                                <FormControl.Feedback />

                            </FormGroup>

                            <FormGroup
                                className={'form-group' + (submitted && !password ? ' has-error' : '')}
                                controlId="formPassword"
                                //validationState={this.getValidationState()}
                            >
                                <ControlLabel id="text">Senha</ControlLabel>

                                <FormControl id="text"
                                    id="campoTexto"
                                    type="password"
                                    placeholder="Sua senha"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    // onChange={this.handleChange}
                                />
                                {submitted && !password &&
                                <div className="help-block">
                                    Senha inválida
                                </div>
                                }
                                <FormControl.Feedback />

                            </FormGroup>
                            <div id="buttonSubmit" >
                                <Button type="submit">Entrar</Button>
                            </div>
                        </form>
                    </Col>
                </div>
            </body>
        </html>
    );
  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginView = connect(mapStateToProps)(LoginView);
export { connectedLoginView as LoginView }; 