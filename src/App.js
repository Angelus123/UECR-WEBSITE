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
import AddNews from './containers/NewPost/AddNews/NewPost'
import AddZone from './containers/NewPost/Zone/NewPost'
import AddGift from './containers/NewPost/Gift/NewPost'
import AddAnnouncements from './containers/NewPost/Announcements/NewPost'
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
                    <Route path= "/add-news" component ={AddNews}/>
                    <Route path= "/add-zone" component ={AddZone}/>
                    <Route path= "/add-gift" component ={AddGift}/>
                    <Route path= "/add-announcements" component ={AddAnnouncements}/>
                  </Layout>
            
            </BrowserRouter>
           
        )
    }
}
export default App