import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

<<<<<<< HEAD
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );
=======
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
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
