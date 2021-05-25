import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Spinner from '../../../component/UI/Spinner/Spinner'
import axios from 'axios'
import './NewPost.css';

class NewZone extends Component {
    state = {
        name: '',
        number:'',
        content: '',
        berger: '',
        submitted: false,
        loading: false

    }
    componentDidMount () {
        console.log(this.props)
    }
    postDataHandler = () => {
        this.setState({loading:true})
        const data = {
            name:this.state.name,
            number:this.state.number,
            content: this.state.content,
            berger: this.state.berger
        }
            
             
        axios.post('https://uecr-rwanda-default-rtdb.firebaseio.com/zone.json', data)
            .then(response =>{
                console.log(response)
              this.setState({submitted:true})
                this.setState({loading:false})
            }).catch(err => {
                console.log(err)
            })
    }

    render () {
        let redirect =null ;
          if(this.state.loading){
            console.log('there! i am')
           redirect = <Spinner />
        }
    
        if(this.state.submitted){
            redirect =<Redirect to ="/" />
        }
        return (
       
            <div className="NewPost">
            
                <h1>Register Zone</h1>
                <label>Zone Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                 <label>Number of Communities</label>
                <input type="text" value={this.state.number} onChange={(event) => this.setState({number: event.target.value})} />
                <label>Content</label>
                <textarea  rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Berger</label>
                <input type="text" value={this.state.berger} onChange={(event) => this.setState({berger: event.target.value})} />
                   {redirect}
                <button onClick ={this.postDataHandler}>Add zone</button>
            </div>
        );
    }
}

export default NewZone;