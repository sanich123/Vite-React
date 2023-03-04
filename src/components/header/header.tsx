import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes, RoutesNames } from '../../utils/const/const';
import styles from '../header/header.module.scss';

export default function Header() {
  const pathname = window.location.pathname;
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to={Routes.main}
              end
              className={pathname === Routes.main ? styles.active : styles.notActive}
            >
              {RoutesNames.main}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.notActive)}
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
