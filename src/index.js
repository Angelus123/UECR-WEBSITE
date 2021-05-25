
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router,Route} from 'react-router-dom';
import axios from 'axios'
import './App.css';
import App from './App'

axios.defaults.baseURL ='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-type'] ='application/json'
axios.interceptors.request.use(request =>{
    console.log('......', request)
    return request
},
error => {
    console.log('..response....',error)
    return Promise.reject(error)
})

axios.interceptors.response.use(response =>{
    console.log('......', response)
    return response
},
error => {
    console.log('..response....',error)
    return Promise.reject(error)
}
)


ReactDOM.render(<App/>, document.getElementById('root'));
