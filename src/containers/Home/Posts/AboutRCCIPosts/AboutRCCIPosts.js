import React, {Component} from 'react'
import axios from '../../../../axios';
import Post from '../../../../component/Post/AboutRCCIPost/AboutRCCIPost'
import './AboutRCCIPosts.css'
class AboutRCCIPosts extends Component {
    state
    = {
       posts:[],
      
   }
    
   componentDidMount() {
       console.log("--did")
    axios.get('/posts')
    .then(response => {
        console.log('--resppppppppppp-',response)
        const posts = response.data.slice(0, 1);
        const updatePosts = posts.map(post => {
            return{
                ...post,
                author:'Max'
            } 

        })
        this.setState({posts:updatePosts})
            console.log(updatePosts)
        })
        .catch(err => {
         console.log('-------------',err)
        // this.setState({Error:true})

        })
    
}
   postSelectedHandler =(id) => {
    this.setState({selectedPostId:id})
}
    render () {

        let posts =<p style ={{textAlign: 'center',color: 'red'}}>Something went wrong!</p>
        if(!this.state.Error)  
         posts = this.state.posts.map(post => {
            return <Post 
            key ={post.id}
            title ={post.title} 
            author ={post.author}
            clicked ={() =>this.postSelectedHandler(post.id)}/>
        }
        )

        return ( 
            <section className="Posts">
                {posts}
            </section>)
    }
}
export default AboutRCCIPosts