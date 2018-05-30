import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
 
export class HomeView extends React.Component {
  state={
    email:'',
    password:'',
  }
  render() {
    return (
      <Grid style={{marginTop:100}}>
        <Row className="show-grid">
          <Col xs={12} md={12}>

          </Col>
         
        </Row>
        </Grid>
    );
  }
}