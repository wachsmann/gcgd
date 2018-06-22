import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar } from '../../_components';
import './home.css'
export class HomeView extends React.Component {

  render() {
    return (
        <div>
            <MainNavbar/>
            <div className="content">
                <div className="col-md-12 container clearfix">
                    <div className="row">
                        <div className="col-md-6 centered">
                            <h2>Bem-Vindo ao Corgis</h2>
                            <h3>Corgis é um sistema de gerenciamento coletivo de gastos domiciliares multiplataforma.</h3>
                        </div>
                        <div className="col-xs-12 col-md-4 pull-right">
                            <div className="logo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

