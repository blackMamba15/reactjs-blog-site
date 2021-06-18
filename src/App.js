import React from 'react';
import './App.css';
import Home from './containers/Home/index'
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import New from './containers/New'

function App() {
  return (
    <Router>
    <div className="App">
      
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" exact component={ContactUs}/> 
      <Route path="/post/:postId" exact component={Post}/>   
      <Route path="/post" exact component={New}/>
    </div>
    </Router>

  );
}

export default App;
