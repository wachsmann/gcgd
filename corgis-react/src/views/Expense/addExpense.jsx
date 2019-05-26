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
        var currentUser = JSON.parse(localStorage.getItem('user'))

        this.state = {
            groupList: [],
            userId:currentUser.user.id,
            selectedQtts: null,
            selectedGroupOption:null,
            usersGroups:[],
            selectedCategory: null,
            options: [],
            expenseName: "",
            expenseDescription: "",
            expenseValue: "",
            expenseExpirationDate: "",
        };

       
        //Get first users
        this.props.dispatch(userActions.getAll());
        
        //Get groups related to current user
        this.props.dispatch(userActions.getGroups(currentUser.user.id));
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
    saveExpense = () => {
        console.log(this.state)
        this.props.dispatch(
            expenseActions.register(
                {
                description:this.state.expenseDescription,
                validity:this.state.expenseExpirationDate,
                name:this.state.expenseName,
                total:this.state.expenseValue,
                expense_type:this.state.selectedCategory,
                collective: this.state.selectedGroupOption,
                parcels: this.state.selectedQtts,
                user:this.state.userId
                }
            )
        ); 
        

    }
    handleUsersChange = (selectedGroupOption) => {
        console.log(selectedGroupOption,"selectedGroup")
        //populate table with group users
        this.setState({selectedGroupOption});
        

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
    handleParcelQtt = (selectedQtts) =>{
        this.setState({selectedQtts});
    }

    render() {
        const {selectedCategory, selectedOption} = this.state;
        const {users, categories} = this.props;
        const groups = typeof users.groups != "undefined" ? users.groups : [];
        const options = typeof users.groups != "undefined" ? users.groups.map(function (item) {

            return {value: item.id, label: item.name,users:item.users};
        }) : [];

        const options_categories = typeof categories != "undefined" ? categories.map(function (item) {

            return {value: item.id, label: item.name};
        }) : [];
        var options_qtts = [];
        for (let index = 0; index < 12; index++) {
            options_qtts[index] = {value: index+1, label:index+1};
            
        }
       
        var _this = this;

        const value_expense  = typeof this.state.expenseValue != "undefined" ? this.state.expenseValue / groups.length : "Sem Valor";

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Col md={12}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <span className="glyphicon glyphicon-retweet"></span>
                                    <ControlLabel>Cadastrar Despesas</ControlLabel>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="box-body">
                                            <Col md={3}>
                                                <div className="form-group">
                                                    <ControlLabel>Nome da Despesa</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseName}
                                                                 onChange={this.handleExpenseNameChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className="form-group">
                                                    <ControlLabel>Descrição</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseDescription}
                                                                 onChange={this.handleExpenseDescriptionChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className="form-group">
                                                    <ControlLabel>Valor</ControlLabel>
                                                    <FormControl type="text" value={this.state.expenseValue}
                                                                 onChange={this.handleExpenseValueChange.bind(this)}/>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className="form-group">
                                                    <ControlLabel>Data de Validade</ControlLabel>
                                                    <FormControl type="date" value={this.state.expenseExpirationDate}
                                                                 onChange={this.handleExpenseExpirationDateChange.bind(this)}/>
                                                </div>
                                            </Col>
                                        </div>
                                        <div className="box-body">
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
                                                <Select
                                                    value={this.selectedQtts}
                                                    onChange={this.handleParcelQtt}
                                                    options={options_qtts}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <ControlLabel>Selecione um Grupo para vincular a Despesa</ControlLabel>
                                                <Col md={10}>
                                                    <Select
                                                        value={this.state.selectedGroupOption}
                                                        onChange={this.handleUsersChange}
                                                        options={options}
                                                        placeholder={"Selecione um usuário"}
                                                    />
                                                </Col>
                                              
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <Col md={12}>
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr bgcolor="#ddd">
                                                    <th>Colaborador</th>
                                                    <th>Valor</th>
                                                    
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.selectedGroupOption && this.state.selectedGroupOption.users.map(function (user) {
                                                        return <ExpenseListLine
                                                            handleDelete={_this.handleDelete}
                                                            name={user.name}
                                                            value={value_expense}
                                                            id={user.id}
                                                            //email={"jarbas@gmail.com"}
                                                            key={user.value}
                                                        />
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </Col>
                                    </div>
                                    <hr/>
                                    <Link to="/despesa" className="btn btn-warning" title="Voltar">Voltar</Link>
                                    <div className="pull-right">
                                        {
                                            /*
                                            this.state.expenseName > 3 && 
                                            this.state.expenseValue > 0 && 
                                            this.state.expenseExpirationDate != null && 
                                            this.state.expenseDescription != null &&
                                            this.state.selectedGroupOption.users.length > 0 &&
                                            this.state.selectedCategory != null  ?
                                            */
                                           true ?
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
