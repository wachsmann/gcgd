import React from 'react';
import {Link} from 'react-router-dom';
import './expense.css';
import UserListLine from "../../_components/Groups/UserListLine";
import {UserSelector} from "../../_components/UserSelector";
import Select from 'react-select';
import {userActions, expenseActions} from '../../_actions';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl} from "react-bootstrap";
import ExpenseListLine from "../../_components/Groups/ExpenseListLine";

class addExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            selectedOption: null,
            selectedCategory: null,
            options: [],
            expenseName: "",
            expenseDescription: "",
            expenseValue: "",
            expenseExpirationDate: "",
        };

        //Get first users
        this.props.dispatch(userActions.getAll());

        // Get Category
        this.props.dispatch(expenseActions.getAllCategory());
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
    handleExpenseNameChange = (event) => {
        this.setState({expenseName: event.target.value})
    }
    handleExpenseDescriptionChange = (event) => {
        this.setState({expenseDescription: event.target.value})
    }
    handleExpenseValueChange = (event) => {
        this.setState({expenseValue: event.target.value})
    }
    handleExpenseExpirationDateChange = (event) => {
        this.setState({expenseExpirationDate: event.target.value})
    }
    handleExpenseCategoryChange = (selectedCategory) => {
        this.setState({selectedCategory});
    }

    render() {
        const {selectedCategory, selectedOption, usersList} = this.state;
        const {users, categories} = this.props;

        const options = typeof users.items != "undefined" ? users.items.map(function (item) {

            return {value: item.id, label: item.name};
        }) : [];

        const options_categories = typeof categories != "undefined" ? categories.map(function (item) {

            return {value: item.id, label: item.name};
        }) : [];

        var _this = this;

        const value_expense  = typeof this.state.expenseValue != "undefined" ? this.state.expenseValue / this.state.usersList.length : "Sem Valor";

        return (
            <div>
                <div class="container">
                    <div class="row">
                        <Col md={12}>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <span class="glyphicon glyphicon-retweet"></span>
                                    <ControlLabel>Cadastrar Despesas</ControlLabel>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="box-body">
                                            <Col md={3}>
                                                <div class="form-group">
                                                    <ControlLabel>Nome da Despesa</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseName}
                                                                 onChange={this.handleExpenseNameChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div class="form-group">
                                                    <ControlLabel>Descrição</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseDescription}
                                                                 onChange={this.handleExpenseDescriptionChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div class="form-group">
                                                    <ControlLabel>Valor</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseValue}
                                                                 onChange={this.handleExpenseValueChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div class="form-group">
                                                    <ControlLabel>Data de Validade</ControlLabel>
                                                    <FormControl type="date" value={this.state.expenseExpirationDate}
                                                                 onChange={this.handleExpenseExpirationDateChange.bind(this)}/>
                                                </div>
                                            </Col>
                                        </div>
                                        <div class="box-body">
                                            <Col md={3}>
                                                <ControlLabel>Categoria</ControlLabel>
                                                <Select
                                                    value={selectedCategory}
                                                    onChange={this.handleExpenseCategoryChange}
                                                    options={options_categories}
                                                />
                                            </Col>
                                            <Col md={3}>
                                                <ControlLabel>Quantidades de Parcelas</ControlLabel>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Todos</option>
                                                    <option>...</option>
                                                </select>
                                            </Col>
                                            <Col md={6}>
                                                <ControlLabel>Selecione um Usuário do Grupo para vincular há Despesa</ControlLabel>
                                                <Col md={10}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={this.handleUsersChange}
                                                        options={options}
                                                        placeholder={"Selecione um usuário"}
                                                    />
                                                </Col>
                                                <Col md={2}>
                                                    <span className="input-group-btn">
                                                    {this.state.expenseValue > 0 ?
                                                        <Button onClick={this.addUser}
                                                                className="btn btn-success">Inserir</Button> :
                                                        <Button onClick={this.addUser} disabled
                                                                className="btn btn-success">Inserir</Button>
                                                    }
                                                    </span>
                                                </Col>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <Col md={12}>
                                            <table class="table table-bordered">
                                                <thead>
                                                <tr bgcolor="#ddd">
                                                    <th>Colaborador</th>
                                                    <th>Valor</th>
                                                    <th>Ações</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.usersList && this.state.usersList.map(function (user) {
                                                        return <ExpenseListLine
                                                            handleDelete={_this.handleDelete}
                                                            name={user.label}
                                                            value={value_expense}
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
                                    <hr/>
                                    <Link to="/despesa" className="btn btn-warning" title="Voltar">Voltar</Link>
                                    <div className="pull-right">
                                        {this.state.expenseName > 3 && this.state.expenseValue > 0 && this.state.expenseExpirationDate != null && this.state.expenseDescription != null && this.state.usersList.length > 0 && selectedCategory != null ?
                                            <Button onClick={this.saveExpense}
                                                    className="btn btn-success">Salvar</Button> :
                                            <Button onClick={this.saveExpense} disabled
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
    const {users} = state;
    const {categories} = state.expenses;

    return {
        categories,
        users
    };
}

const connectedAddExpense = connect(mapStateToProps)(addExpense);
export {connectedAddExpense as addExpense};
