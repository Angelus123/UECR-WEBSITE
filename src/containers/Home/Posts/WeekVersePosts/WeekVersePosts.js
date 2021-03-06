import React, {Component} from 'react'
import axios from '../../../../axios';
import {Link} from 'react-router-dom'
import Aux from '../../../../hoc/Auxi/Auxilliary'
import Post from '../../../../component/Post/WeekVersel/WeekVersel'
import './WeekVersePosts'
class WeekVersePosts extends Component {
    state
    = {
       posts:[]
      
   }
   
    
   componentDidMount() {
       console.log("--did saint")
    axios.get('/posts')
    .then(response => {
        console.log('--res saint-',response)
        const posts = response.data.slice(0,1);
        const updatePosts = posts.map(post => {
            return{
                ...post,
                author:'Max'
            } 

        })

    
        this.setState({posts:updatePosts})
         console.log('update',updatePosts)
        }
        )
        .catch(err => {
        this.setState({Error:true})

        })
    
}
   postSelectedHandler =(id) => {
    this.setState({selectedPostId:id})
}
    render () {

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
        posts = this.state.posts.map(post => {
            return (
            <Link to ={'/posts/'+ post.id} key = {post.id}>
                <Post  key = {post.id}
                title ={post.title} 
                body={post.body}
                clicked ={() =>this.postSelectedHandler(post.id)}/>  
         </Link> 
          )
        }
        )
        
        return ( 
            <Aux >
                     {posts}
               
            </Aux>)
    }
}
export default WeekVersePosts