import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props)=>(
    <header classname={classes.Toolbar}>
        <div>Menu</div>
        <div classname={classes.Logo}> 
           <Logo />
           </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;