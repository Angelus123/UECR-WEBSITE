import React,{Component} from 'react'
import Aux from '../../hoc/Auxi/Auxilliary'
import Toolbar from '../../component/Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer'
import Footer from '../../component/Footer/Footer'
class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
                this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
            
        } )
      
    }
    render(){
        return (
            <Aux>
                
                <Toolbar 
        
                    open={this.state.showSideDrawer} 
                    toggle ={this.sideDrawerToggleHandler }
                    /> 

                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed ={this.sideDrawerClosedHandler }/>
                <main className ='content'>
                    {this.props.children}  
                </main>
                <Footer />
            </Aux>
   
        )

    }
}

export default Layout