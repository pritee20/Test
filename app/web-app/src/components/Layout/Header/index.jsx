import React, { Component } from 'react';
import Nav from './Nav';
import empowerLogoImg from '../../../../../../assets/img/empower.svg';




class Header extends React.Component {

  render() { 
    return (
<header className="site-header">
  <div className="container">
    <nav className="main-nav utility-nav navbar-default pull-right">
      <button type="button" className="navbar-toggle" data-toggle-content="#utility-nav">
        <i className="fa fa-user"></i>
      </button>
      <div className="main-nav-menu navbar-default" id="utility-nav">
        <a className="navbar-toggle utility-nav-toggle" data-toggle-content="#utility-nav"><i className="fa fa-times"></i></a>
        <ul className="nav navbar-nav">
          <li className="utility-nav-item dropdown">
            <a className="utility-nav-item-link" data-toggle="dropdown" aria-haspopup="true" id="suggestionsDropdown" title="Think about this">
                <span className="label-count label-red">2</span>
                <span className="label-text">Think about this</span>
            </a>
            <ul className="dropdown-menu" role="menu" aria-labelledby="suggestionsDropdown">
              <li role="presentation">
                <a href="./guidance.html" role="menuitem">Your investments may not be well diversified.</a>
                <a href="#" role="menuitem">Add a beneficiary.</a>
              </li>
              <li role="presentation" className="inverse">
                <a href="./jp-managed.html" role="menuitem">More best next steps</a>
              </li>
            </ul>
          </li>
          <li id="utility-nav-user" className="utility-nav-item dropdown">
            <a className="utility-nav-item-link" data-toggle="dropdown" aria-haspopup="true" id="profileDropdown" title="Sean Lewis">
              <span className="label-count label-red">1</span>
              <span className="label-text">Sean Lewis</span>
            </a>
            <ul className="dropdown-menu" role="menu" aria-labelledby="profileDropdown">
              <li role="presentation">
                <span role="menuitem">Secure Messages: <span className="label-count label-red">1</span></span>
              </li>
              <li role="presentation">
                <span role="menuitem">Transactions: <span className="label-count label-default">0 Pending</span></span>
              </li>
              <li role="presentation">
                <span role="menuitem">Age: <span>35</span></span>
              </li>
              <li role="presentation">
                <span role="menuitem">Salary: <span>$80,000.00</span></span>
              </li>
              <li role="presentation" className="inverse">
                <a href="./user_profile.html" role="menuitem">Edit Full Profile</a>
              </li>
              <li role="presentation">
                <a className="menu-item-link" href="./registration/">Log Out</a>
              </li>
            </ul>
          </li>
          <li className="utility-nav-item">
            <a className="utility-nav-item-link">
              <span className="label-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <h3> <a href="#" title="Title"><img src={ empowerLogoImg }  alt='Empower'/></a></h3>
      <div className="collapse navbar-collapse" id="prelogin-main-nav">
        <Nav/>
      </div>    
    <nav className="main-nav navbar-default">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#prelogin-main-nav">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </nav>
  </div>
</header>
    );   
  }  
}





 
export default Header;
