import React, { useState, useEffect } from 'react';
import './style.css';
import blogPost from '../../data/blog.json';



const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    
  const[postId,setPostId]=useState({id:""}); 
  

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id === postId);
        
        setPost(post);
        setPostId(postId);
       
    }, [post, props.match.params.postId]);

    if(post.blogImage==="") return null;

  return(
        <div className="blogPostContainer">
         
                <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>

                <div className="postImageContainer">
                    <img src={require("../../blogPostImages" +post.blogImage)} alt="" />  
                </div>

                <div className="postContent">
                 <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
                </div>
                
            
        </div>
   )

 }

export default BlogPost