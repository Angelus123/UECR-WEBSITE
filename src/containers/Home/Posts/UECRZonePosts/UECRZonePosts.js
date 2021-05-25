import React, {Component} from 'react'
import axios from '../../../../axios';
import {Link} from 'react-router-dom'
import Aux from '../../../../hoc/Auxi/Auxilliary'
import Post from '../../../../component/Post/UECRZone/UECRZone'
import './UECRZonePosts.css'
class WeekNewsPosts extends Component {
    state
    = {
        posts:[],
     
   }
   
    
   componentDidMount() {
       console.log("--did saint")
    axios.get('https://uecr-rwanda-default-rtdb.firebaseio.com/zone.json')
    .then(response => {
        const posts = response.data;
        console.log('--res saint-', posts)
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
      
           posts =  limitposts.slice(0,6).map(post => {
            return (
            <Link to ={'/posts/'+ post.id} key = {post.id}>
                <Post  
                key = {post.id}
                name ={post.name} 
                number={post.number}
                content ={post.content}
                clicked ={() =>this.postSelectedHandler(post.id)}/>  
         </Link> 
          )
        }
           )
        
        
        return ( 
            <Aux >
                
                  
<div className="item item--9">
    <div style ={{backgroundColor:"White",borderRadius:'5%'}}> <h1>UECR Zone</h1></div>
 
                     {posts}
                     <Link to ={{

                                pathname:"/add-zone",
                                hash:"#submit",
                                search:"?quick-submit=true"}}><button>Add Zones</button></Link>
                            
                   </div>
               
            </Aux>)
    }
}
export default WeekNewsPosts