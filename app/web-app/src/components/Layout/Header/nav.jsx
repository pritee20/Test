import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../Layout/App';



export default class Nav extends Component {
  render() {
    return (
         
             <ul className="nav navbar-nav">
                  
                    <li><NavLink
                    activeClassName='Menu-link--active'
                    
                    exact
                    to={ routeCodes.DASHBOARD }
                  >Home</NavLink></li>
                  
                  
                    <li><NavLink
                    activeClassName='Menu-link--active'
                    className='Menu-link'
                    to={ routeCodes.MyAccounts }
                  >My Accounts</NavLink></li>
                  
                  
                    <li><NavLink
                    activeClassName='Menu-link--active'
                    className='Menu-link'
                    to='404'
                  >404</NavLink></li>
                  
        </ul>
    
    );
  }
}
