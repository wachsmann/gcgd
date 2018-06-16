import React from 'react';
import { Grid,Row,Col,FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                phone:''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        console.log(user);
        if (user.name && user.email && user.phone && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Cadastro</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
                        {submitted && !user.name &&
                            <div className="help-block">Nome é obrigatório!</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" className="form-control" name="email"
                         value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">E-mail é obrigatório!</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.phone ? ' has-error' : '')}>
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" className="form-control" name="phone"
                         value={user.phone} onChange={this.handleChange} />
                        {submitted && !user.phone &&
                            <div className="help-block">Telefone é obrigatório!</div>
                        }
                    </div>                    
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" name="password"
                         value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Senha é obrigatória!</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Cadastrar</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterView = connect(mapStateToProps)(RegisterView);
export { connectedRegisterView as RegisterView };