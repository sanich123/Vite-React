import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesNames, Routes, ROUTES } from 'src/utils/const/const';
import styles from '../header/header.module.scss';

export default class Header extends Component {
  render() {
    const { header, header__nav, header__ul, active, notActive } = styles;

    return (
      <header className={header}>
        <nav className={header__nav}>
          <ul className={header__ul}>
            {Object.values(ROUTES).map(({ path, name }) => (
              <li key={`${path}-${name}`}>
                <NavLink
                  to={path}
                  end
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
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
