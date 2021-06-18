import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';


const Post = (props) => {

    console.log(props);


  return(
    <div>
      <div>
        <Layout>
          
          <BlogPost {...props} />
        </Layout>
        </div>
        </div>
   )

 }

export default Post;