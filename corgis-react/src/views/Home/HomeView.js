import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar } from '../../_components';
 
export class HomeView extends React.Component {
  state={
    email:'',
    password:'',
  }
  render() {
    return (
      <MainNavbar>
      <Grid style={{marginTop:100}}>
        <Row className="show-grid">
          <Col xs={12} md={12}>

          </Col>
         
        </Row>
        </Grid>
      </MainNavbar>
    );
  }
}

