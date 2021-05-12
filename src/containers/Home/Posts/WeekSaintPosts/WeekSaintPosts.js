import React, {Component} from 'react'
import axios from '../../../../axios';
import Aux from '../../../../hoc/Auxi/Auxilliary'
import Post from '../../../../component/Post/UECRNewsPost/UECRNewsPost'
import './WeekSaintPosts.css'
class WeekSaintPosts extends Component {
    state
    = {
       posts:[[{id:1},{title:'Therese'},{body:'therese yari uwikarikuta'},{author:'Felix'}],
       [{id:1},{title:'Therese,body:therese yari uwikarikuta'},{author:'Felix'}]],
      
   }
   
    
   componentDidMount() {
       console.log("--did saint")
    // axios.get('/posts')
    // .then(response => {
    //     console.log('--res saint-',response)
        const posts = this.state.posts;
        const updatePosts = posts.map(post => {
            return{
                ...post,
                author:'Max'
            } 

        })

        console.log('--up----',updatePosts)
        this.setState({posts:updatePosts})
            console.log(updatePosts)
        // }
        // )
        // .catch(err => {
        //  console.log('-------------',err)
        // // this.setState({Error:true})

        // })
    
}
   postSelectedHandler =(id) => {
    this.setState({selectedPostId:id})
}
    render () {

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
         posts = this.state.posts.map(post => {
            return  post
        }
         )
console.log('testtttttttt',posts[0][1].title)
        return ( 
            <Aux >
               <Post title= {posts[0][1].title}
                     body={posts[0][2].body}
                     author={posts[0][2].author}
                     
                     title1= {posts[1][1].title}
                     body1={posts[1][2].body}
                     author1={posts[1][2].author}/>
            </Aux>)
    }
}
export default WeekSaintPosts