import React from 'react';
import { Link } from 'react-router-dom';
import './group.css';
import UserListLine from "../../_components/Groups/UserListLine";
import { UserSelector } from "../../_components/UserSelector";
import Select from 'react-select';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


/*
*
* VIEW COMP. 
*   Display create view for new group creation
*/
class AddGroupView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
      selectedUser: {},
      selectedOption: null,
      options: []
    };
    //Get first users 
    this.props.dispatch(userActions.getAll());

  }

  addUser = () => {
    const { selectedOption, usersList } = this.state; 
   
    const newList = usersList.concat(selectedOption);

    const patchedState = this.setState({'usersList':[...new Set(newList.map(function(name){return name}))]});
    
  }
  handleUsersChange = (selectedOption) => {
    this.setState({ selectedOption });

  }
  render() {
    const { selectedOption, usersList } = this.state;
    const { users } = this.props;


    const options = typeof users.items != "undefined" ? users.items.map(function (item) {

      return { value: item.id, label: item.name };
    }) : [];




    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <span className="glyphicon glyphicon-user"></span>    Novo Grupo
                            </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <form>
                        <div className="form-group">
                          <label >Nome do Grupo</label>
                          <input type="nome" className="form-control" id="nome" aria-describedby="nome"></input>
                        </div>
                      </form>
                    </div>
                    <div className="col-xs-6 col-md-6">
                      <label >Selecione um Usuário para vincular ao Grupo</label>
                      <div className="col-xs-10 col-md-10">

                        <Select
                          value={selectedOption}
                          onChange={this.handleUsersChange}
                          options={options}
                          placeholder={"Selecione um usuário"}
                        />
                      </div>
                      <div className="col-xs-2 col-md-2">
                        <span className="input-group-btn">

                          <Button onClick={this.addUser} className="btn btn-success">Inserir</Button>
                        </span>
                      </div>

                    </div>

                    <div className="panel-body">
                      <div className="row">
                        <div className="col-xs-6 col-md-12">
                          <table className="table table-bordered">
                            <thead>
                              <tr bgcolor="#ddd">
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                usersList.map(function (user) {
                                  return <UserListLine name={user.label} email={"jarbas@gmail.com"} key={user.value} />;
                                })
                              }




                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <Link to="/grupo" title="Voltar" className="btn btn-warning">Voltar</Link>

                  <div className="pull-right">
                    <a href="group" className="btn btn-success" data-toggle="tooltip" title="Salvar"> Salvar</a>
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

/*
*  REDUX CONNECTOR  
*/
function mapStateToProps(state) {

  const { users } = state;
  console.log(users, "users")
  return {
    users
  };
}
const connectedAddGroupView = connect(mapStateToProps)(AddGroupView);
export { connectedAddGroupView as AddGroupView };
