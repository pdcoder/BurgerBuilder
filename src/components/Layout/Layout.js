import React , { Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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