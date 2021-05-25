import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Spinner from '../../../component/UI/Spinner/Spinner'
import axios from 'axios'
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        videoId:'',
        content: '',
        author: 'Felix',
        submitted: false,
        loading: false

    }
    componentDidMount () {
        console.log(this.props)
    }
    postDataHandler = () => {
        this.setState({loading:true})
        const data = {
            title:this.state.title,
            videoId:this.state.videoId,
            content: this.state.content,
            author: this.state.author
        }
            
             
        axios.post('https://uecr-rwanda-default-rtdb.firebaseio.com/news.json', data)
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
                    {redirect}
                <h1>Add News related to videos Post</h1>
                <label>Video Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                 <label>Video Id</label>
                <input type="text" value={this.state.videoId} onChange={(event) => this.setState({videoId: event.target.value})} />
                <label>Content</label>
                <textarea  rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Berge</option>
                    <option value="Manu">Journalist</option>
                </select>
                   {redirect}
                <button onClick ={this.postDataHandler}>Post</button>
            </div>
        );
    }
}

export default NewPost;