import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './group.css'
import {Button, Col, ControlLabel, FormControl} from "react-bootstrap";
import {UserSelector} from "../../_components/UserSelector";
import {groupActions, userActions} from "../../_actions";
import GroupListLine from "../../_components/Groups/GroupListLine";
import UserListLine from "../../_components/Groups/UserListLine";
import Select from 'react-select';

class editGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            selectedUser: {},
            selectedOption: null,
            options: [],
            groupName: "",
            groupID: null
        };

        this.props.dispatch(groupActions.getById(6));
        //Get first users
        this.props.dispatch(userActions.getAll());
    }

    addUser = () => {
        const {selectedOption, usersList} = this.state;

        var existOnList = false;
        usersList.forEach(function (item) {
            if (selectedOption.value == item.value) {
                existOnList = true;

            }
        });

        if (!existOnList) {
            const newList = usersList.concat(selectedOption);
            this.setState({'usersList': newList});
        } else {
            this.setState({'usersList': usersList});
        }
    }
    handleUsersChange = (selectedOption) => {
        this.setState({selectedOption});

    }
    handleDelete = (e, id) => {
        const {usersList} = this.state;

        const newList = usersList.filter(function (user) {
            return user.value != id;
        });
        this.setState({"usersList": newList});

    }
    saveGroup = () => {
        const {usersList, groupName, groupID} = this.state;
        this.props.dispatch(groupActions.update({usersList, groupName, groupID}));
    }
    handleNameChange = (event) => {
        this.setState({groupName: event.target.value})
    }

    render() {
        const {selectedOption, usersList} = this.state;
        const {group, users} = this.props;

        const options = typeof users.items != "undefined" ? users.items.map(function (item) {
            return {value: item.id, label: item.name};
        }) : [];

        var _this = this;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Col md={12}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="glyphicon glyphicon-user"></span><ControlLabel> Editar Grupo
                                    - {group && group.name}
                                </ControlLabel>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <Col md={6}>
                                            <div className="form-group">
                                                <ControlLabel>Nome do Grupo</ControlLabel>
                                                <FormControl
                                                    className={"form-control"}
                                                    type="text"
                                                    value={group && group.name}
                                                    onChange={this.handleNameChange.bind(this)}
                                                    placeholder="Insira o nome do Grupo"
                                                />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <ControlLabel>Selecione um Usuário para vincular ao Grupo</ControlLabel>
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
                                                <Button onClick={this.addUser}
                                                        className="btn btn-success">Inserir</Button>
                                            </span>
                                            </div>
                                        </Col>
                                        <div className="panel-body">
                                            <div className="row">
                                                <Col md={12}>
                                                    <table className="table table-bordered">
                                                        <thead>
                                                        <tr bgcolor="#ddd">
                                                            <th>Nome</th>
                                                            <th>Ações</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            this.state.usersList && this.state.usersList.map(function (user) {
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
                                                </Col>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <Link to="/grupo" title="Voltar" className="btn btn-warning">Voltar</Link>

                                    <div className="pull-right">
                                        {this.state.groupName.length > 3 && this.state.usersList.length > 0 ?
                                            <Button onClick={this.saveGroup}
                                                    className="btn btn-success">Salvar</Button> :
                                            <Button onClick={this.saveGroup} disabled
                                                    className="btn btn-success">Salvar</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
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
    const {group} = state.groups;
    const {users} = state;

    return {
        group,
        users
    };
}

const connectedEditGroup = connect(mapStateToProps)(editGroup);
export {connectedEditGroup as editGroup};
