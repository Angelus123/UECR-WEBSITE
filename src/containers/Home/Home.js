import React, {Component} from 'react'
import '../../style/ustyle.css'
import Header from '../../component/Header/Header'
import Slide from '../../component/SlideImg/SlideImg'
import Side from '../../component/Side/Side'
import AboutUECRPosts from '../Home/Posts/AboutUECRPosts/AboutUECRPosts'
import AboutRCCIPosts from '../Home/Posts/AboutRCCIPosts/AboutRCCIPosts'
import AboutRCCPosts from './Posts/AboutRCCPosts/AboutRCCPosts'
import WelcUECR from '../../component/Post/WelcUECR/WelcUECR'
import WelcUECREi from '../../component/Post/WelcUECR_8/WelcUECR_8'
import WelcUECRNi from '../../component/Post/WelcUECR_9/WelcUECR_9'
import WeekSaintPosts from '../Home/Posts/WeekSaintPosts/WeekSaintPosts'
import WeekVersel from '../../component/Post/WeekVersel/WeekVersel'
import SevenGift from '../../component/Post/SevenGift/SevenGift'
import UECRZone from '../../component/Post/UECRZone/UECRZone'
import Login from '../../component/UI/Login/Login'
import Register from '../../component/UI/Register/Register'
import LoginForm from '../../component/Page/Login/Login'
import RegisterForm from '../../component/Page/Register/Register'

class Home extends Component{
    state ={
        loginClicked:false,
        registerClicked:false
    }
    loginClickedHandle= ()=>{
        const login = this.state.loginClicked
   this.setState({loginClicked:!login})
    }

    registerClickedHandle= ()=>{
        const register = this.state.registerClicked
   this.setState({registerClicked:!register})
    }
    render(){

        return( 

          
                    <div className="container">
                       
                        <Header />
                        <Slide />
                        <Side
                        login={this.loginClickedHandle}
                        register={this.registerClickedHandle}/>
                        <Login 
                            show ={this.state.loginClicked} 
                            loginClosed ={this.loginClickedHandle}>
                            <LoginForm/>
                        </Login> 


                        <Register
                            show ={this.state.registerClicked} 
                            registerClosed ={this.registerClickedHandle}>
                            <RegisterForm 
                            login={this.loginClickedHandle}
                            registerClosed ={this.registerClickedHandle}
                            />
                        </Register>                        
                        <AboutUECRPosts />
                        <AboutRCCPosts /> 
                        <AboutRCCIPosts /> 
                        <WeekSaintPosts />                  
                        <WelcUECR />
                        <WelcUECREi /> 
                        <WelcUECRNi />
                     
                        <WeekVersel />
                        <SevenGift/>
                        <UECRZone/>
                     
         
                    </div>
                 
              
                              
        ) 
    }
}
export default Home