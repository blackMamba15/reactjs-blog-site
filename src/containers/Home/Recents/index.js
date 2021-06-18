import React from 'react';
import './style.css';


const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        
            <div className="postImageWrapper">
                <img src={"https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Sports</h2>
                <span>posted on June 17 by Ak</span>
                <p>Nibh mauris cursus mattis molestie a iaculis. Ante metus dictum at tempor commodo. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Morbi tristique senectus et netus et malesuada fames ac. Vitae nunc sed velit dignissim sodales. Dictumst vestibulum rhoncus est pellentesque elit. Elementum facilisis leo vel fringilla. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed turpis tincidunt id aliquet risus feugiat in ante. Semper eget duis at tellus at. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Dignissim cras tincidunt lobortis feugiat. Facilisi nullam vehicula ipsum a arcu cursus. Sed velit dignissim sodales ut eu sem integer. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Quam pellentesque nec nam aliquam. Odio ut enim blandit volutpat maecenas volutpat.</p>

                <button>Read More</button>     

            </div>

    </div>
   )

 }

export default RecentPosts