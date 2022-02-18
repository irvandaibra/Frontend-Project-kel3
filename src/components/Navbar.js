import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZdJha7GRZc6_Ai8zl45XC2R-tWK-QkhrNQ&usqp=CAU" width="100%" alt="logo" />
          </a>

          <a href="/product" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/product" className="navbar-item">
              Home
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="/add" className="navbar-item">
                Add Database
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button is-danger mt-2">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar