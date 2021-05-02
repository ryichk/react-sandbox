import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='navigation-menu'>
      <li>
        <NavLink to='/' activeClassName='active' exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' activeClassName='active'>
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' activeClassName='active'>
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;