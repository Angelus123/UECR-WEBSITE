import React, {Component} from 'react'
import axios from '../../../../axios';
import {Link} from 'react-router-dom'
import Aux from '../../../../hoc/Auxi/Auxilliary'
import Post from '../../../../component/Post/UECRNewsPost/UECRNewsPost'
import './WeekNewsPosts.css'
class WeekNewsPosts extends Component {
    state
    = {
        posts:[],
     
   }
   
    
   componentDidMount() {
       console.log("--did saint")
    axios.get('https://uecr-rwanda-default-rtdb.firebaseio.com/news.json')
    .then(response => {
        const posts = response.data;

        const fetchResults =[];
        for(let key in posts){
            fetchResults.unshift(
                {
                    ...response.data[key],
                    id:key
                }
            ) 
        }
        console.log(fetchResults)
        this.setState({posts:fetchResults})
       
        }
        )
        .catch(err => {
        this.setState({Error:true})
            console.log("izere",this.state.posts)
    }) 
  
}
  
    render () {
        let limitposts=[]

    limitposts=this.state.posts

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
      
           posts =  limitposts.slice(0,9).map(post => {
            return (
            <Link to ={'/posts/'+ post.id} key = {post.id}>
                <Post  
                key = {post.id}
                title ={post.title} 
                videoId={post.videoId}
                body ={post.body}
                clicked ={() =>this.postSelectedHandler(post.id)}/>  
         </Link> 
          )
        }
           )
        
        
        return ( 
            <Aux >

                     {posts}
                     <Link to ={{

                                pathname:"/add-news",
                                hash:"#submit",
                                search:"?quick-submit=true"}}><button>Add news</button></Link>
                            
                   
               
            </Aux>)
    }
}
export default WeekNewsPosts