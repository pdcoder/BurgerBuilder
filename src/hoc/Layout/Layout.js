import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showdrawer: false
    }
    sidedrawerhandler = () =>{
this.setState({showdrawer:false});
    }


    sidedrawertogglehandler = () =>{
        this.setState((prvstate)=>{
           return  {showdrawer: !prvstate.showdrawer}
    });
}
    render(){
    return (
    <Aux>
    <Toolbar drawerToggleClicked={this.sidedrawertogglehandler} />
    <SideDrawer open={this.state.showdrawer} closed={this.sidedrawerhandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
)
    }
}
export default Layout;