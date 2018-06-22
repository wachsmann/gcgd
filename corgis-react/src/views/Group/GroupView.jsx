import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import {MainNavbar} from "../../_components";

import { connect } from 'react-redux';

import { groupActions } from '../../_actions';
import './group.css'
import { Link } from 'react-router-dom';

export class GroupView extends React.Component {
   constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(groupActions.getAll());
  }
  render() {
    return (
        <div>
            <MainNavbar/>
            <div class="container">
                <div class="row">   
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <span class="glyphicon glyphicon-user"></span>    Grupos
                                <div class="button pull-right">
                                <Link to="/grupo-novo" title="Voltar" className="btn btn-info" title="Adicionar">Adicionar</Link>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6 col-md-12  '">
                                        <table class="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th>Nome</th>
                                              <th>Quantidade de membros</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>John</td>
                                              <td>5</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                <a href="editGroup" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Mary</td>
                                              <td>23</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                <a href="editGroup" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>July</td>
                                              <td>10</td>
                                              <td>
                                                <a href="" class="btn btn-danger glyphicon glyphicon-remove" data-toggle="tooltip" title="Visualizar"></a>
                                                <a href="editGroup" class="btn btn-primary glyphicon glyphicon-pencil" data-toggle="tooltip" title="Visualizar"></a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
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