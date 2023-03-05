import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesNames, Routes } from 'src/utils/const/const';
import styles from '../header/header.module.scss';

export default class Header extends React.Component {
  render() {
    const pathname = window.location.pathname;
    const { header, header__nav, header__ul, active, notActive } = styles;
    return (
      <header className={header}>
        <nav className={header__nav}>
          <ul className={header__ul}>
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
