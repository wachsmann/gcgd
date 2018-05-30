import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
 
export class RegisterView extends React.Component {
  state={
    email:'',
    password:'',
  }
  render() {
    return (
      <Grid style={{marginTop:100}}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h1>Cadastro</h1>
            <form>
              <FormGroup
                controlId="formName"
                //validationState={this.getValidationState()}
              >
                <ControlLabel>E-mail</ControlLabel>
                
                <FormControl
                  type="text"
                  value={this.state.email}
                  placeholder="Seu e-mail"
                 // onChange={this.handleChange}
                />
                <FormControl.Feedback />
                
              </FormGroup>
              <FormGroup
                controlId="formEmail"
                //validationState={this.getValidationState()}
              >
                <ControlLabel>E-mail</ControlLabel>
                
                <FormControl
                  type="text"
                  value={this.state.email}
                  placeholder="Seu e-mail"
                 // onChange={this.handleChange}
                />
                <FormControl.Feedback />
                
              </FormGroup>
              
              <FormGroup controlId="formPassword"
              //validationState={this.getValidationState()}
              >
                <ControlLabel>Senha</ControlLabel>
                
                <FormControl
                  type="text"
                  value={this.state.password}
                  placeholder="Sua senha"
                 // onChange={this.handleChange}
                />
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