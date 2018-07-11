import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
export class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    var obj =JSON.parse(localStorage.getItem('user'));
    this.state = {
      user: obj.user,
      
    };
  }
  render() {
    const {user} = this.state;
    
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">Corgis</Link>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    
                    <li><a>Olá, {user.name}</a></li>

                    
                    <li>
                      <Link to="/perfil" className="link">Perfil</Link>
                    </li>
                    <li>
                      <Link to="/despesa" className="link">Despesa</Link>
                    </li>
                    <li>
                      <Link to="/grupo" className="link">Grupo</Link>
                    </li>
                    <li>
                      <Link to="/login" className="link">Sair</Link>
                    </li>                  
                </ul>
            </div>
        </nav>
    );
  }
}