import React from 'react';

import { connect } from 'react-redux';

import { groupActions } from '../../_actions';
import GroupListLine from "../../_components/Groups/GroupListLine";
import './group.css'
import { Link } from 'react-router-dom';

class GroupView extends React.Component {
   constructor(props) {
    super(props);

    this.props.dispatch(groupActions.getAll());
  }
  handleDelete = (e,id)=>{
   /*
    const { usersList } = this.state; 
   
    const newList = usersList.filter(function(user){
      return user.value != id;
    });
    this.setState({"usersList":newList});
    */
  }
  render() {
    const { list } = this.props;
    var _this = this;
    return (
        <div>
            <div className="container">
                <div className="row">   
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-user"></span>    Grupos
                                <div className="button pull-right">
                                <Link to="/grupo-novo" className="btn btn-info" title="Adicionar">Adicionar</Link>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-6 col-md-12  '">
                                        <table className="table table-bordered">
                                          <thead>
                                            <tr bgcolor="#ddd">
                                              <th>Nome</th>
                                              <th>Quantidade de membros</th>
                                              <th>Ações</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                          {
                                            list && list.map(function (group) {
                                              return <GroupListLine 
                                                      handleDelete={_this.handleDelete}  
                                                      name={group.name} 
                                                      id={group.id}
                                                      qtd={group.users.length} 
                                                      key={group.id} 
                                                      />;
                                            })
                                          }
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

function mapStateToProps(state) {
    const { list} = state.groups;
    
    
    return {
      list
    };
}

const connectedGroupView = connect(mapStateToProps)(GroupView);
export { connectedGroupView as GroupView }; 