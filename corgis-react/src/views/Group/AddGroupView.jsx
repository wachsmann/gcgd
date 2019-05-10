import React from 'react';
import { Link } from 'react-router-dom';
import './group.css';
import UserListLine from "../../_components/Groups/UserListLine";
import { UserSelector } from "../../_components/UserSelector";
import Select from 'react-select';
import { userActions,groupActions } from '../../_actions';
import { connect } from 'react-redux';
import { Button,FormControl } from 'react-bootstrap';


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
      options: [],
      groupName:""
    };
    //Get first users 
    this.props.dispatch(userActions.getAll());

  }

  addUser = () => {
    const { selectedOption, usersList } = this.state; 
   
    
    var existOnList = false;
    usersList.forEach(function(item){
      if(selectedOption.value == item.value){
        existOnList = true;
        
      }
        
    });
    if(!existOnList){
      const newList = usersList.concat(selectedOption);
      this.setState({'usersList':newList});
    }else{
      this.setState({'usersList':usersList});
    }
      
    
    
  }
  handleUsersChange = (selectedOption) => {
    this.setState({ selectedOption });

  }
     
  handleDelete = (e,id)=>{
    const { usersList } = this.state; 
   
    const newList = usersList.filter(function(user){
      return user.value != id;
    });
    this.setState({"usersList":newList});
    
  }
  saveGroup = () => {
    const { usersList,groupName } = this.state; 
    console.log(usersList,groupName)
    this.props.dispatch(groupActions.register({usersList,groupName})); 

  }
  handleNameChange = (event) => {
    this.setState({groupName: event.target.value})
  }
  render() {
    const { selectedOption, usersList } = this.state;
    const { users } = this.props;


    const options = typeof users.items != "undefined" ? users.items.map(function (item) {

      return { value: item.id, label: item.name };
    }) : [];

    var _this = this;


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
                          <FormControl type="text" value={this.state.groupName} onChange={this.handleNameChange.bind(this)} placeholder="Insira o nome do Grupo" />
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
                              
                                <th>Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                usersList.map(function (user) {
                                  return <UserListLine 
                                          handleDelete={_this.handleDelete}  
                                          name={user.label} 
                                          id={user.value}
                                          //email={"jarbas@gmail.com"} 
                                          key={user.value} 
                                          />;
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
                    { this.state.groupName.length > 3 && this.state.usersList.length > 0 ? 
                      <Button onClick={this.saveGroup} className="btn btn-success">Salvar</Button> :
                      <Button onClick={this.saveGroup} disabled className="btn btn-success">Salvar</Button>
                    }

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
