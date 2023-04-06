import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'src/utils/const/const';
import styles from '../header/header.module.scss';

export default class Header extends Component {
  render() {
    const { header, headerUl, active, notActive } = styles;

    return (
      <header className={header}>
        <nav>
          <ul className={headerUl}>
            {Object.values(ROUTES).map(({ path, name }) => (
              <li key={`${path}-${name}`}>
                <NavLink to={path} end className={({ isActive }) => (isActive ? active : notActive)}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
