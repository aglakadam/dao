import React from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faComment, faEnvelope, faMusic, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
    </div>
  )
}

export default App;
