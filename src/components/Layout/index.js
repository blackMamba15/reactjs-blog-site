import React from 'react';
import './style.css';


const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
    </div>

      </React.Fragment>
    
   )

 }

export default Layout