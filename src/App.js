import React, {Component} from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'

import Register from './component/Page/Register/Register'
import Login from './component/Page/Login/Login'
import About from './component/Page/About/About'
import Community from './component/Page/Community/Community'
import History from './component/Page/History/History'
import Staff from './component/Page/Staff/Staff'

class App extends Component {
    render(){
        return (
     
            <BrowserRouter>
                  <Layout>
                    <Route path= "/"  exact component ={Home }/>
                    <Route path= "/login" component ={Login}/>
                    <Route path= "/register" component ={Register}/>
                    <Route path= "/aboutuecr" component ={About}/>
                    <Route path= "/community" component ={Community}/>
                    <Route path= "/history" component ={History}/>
                    <Route path= "/staff" component ={Staff}/>
                  </Layout>
            
            </BrowserRouter>
           
        )
    }
}
export default App