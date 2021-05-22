import React, {Component} from 'react'
import axios from '../../../../axios';
import {Link} from 'react-router-dom'
import Aux from '../../../../hoc/Auxi/Auxilliary'
import Post from '../../../../component/Post/UECRNewsPost/UECRNewsPost'
import './WeekNewsPosts.css'
class WeekNewsPosts extends Component {
    state
    = {
       posts:[]
      
   }
   
    
   componentDidMount() {
       console.log("--did saint")
    axios.get('/posts')
    .then(response => {
        console.log('--res saint-',response)
        const posts = response.data.slice(0,6);
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
                author ={post.author}
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
export default WeekNewsPosts