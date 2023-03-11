import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesNames, Routes } from 'src/utils/const/const';
import styles from '../header/header.module.scss';

export default class Header extends Component {
  render() {
    const pathname = window.location.pathname;
    const { header, headerUl, active, notActive } = styles;
    return (
      <header className={header}>
        <nav>
          <ul className={headerUl}>
            <li>
              <NavLink
                to={Routes.main}
                end
                className={pathname === Routes.main ? active : notActive}
              >
                {RoutesNames.main}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? active : notActive)}
                to={Routes.aboutUs}
              >
                {RoutesNames.aboutUs}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
