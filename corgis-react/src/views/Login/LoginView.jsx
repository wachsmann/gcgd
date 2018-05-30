import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
 
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

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
      <Grid style={{marginTop:100}}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>

              <FormGroup
                className={'form-group' + (submitted && !username ? ' has-error' : '')}
                controlId="formE-mail"
                //validationState={this.getValidationState()}
              >
                <ControlLabel>E-mail</ControlLabel>
                
                <FormControl
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
                <ControlLabel>Senha</ControlLabel>
                
                <FormControl
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

               <Button type="submit">Entrar</Button>

            </form>
          </Col>
         
        </Row>
        </Grid>
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