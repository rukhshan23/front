import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect} from 'react';
import {UserContext} from './screens/UserContext';
import {useContext} from 'react';
import axios from 'axios';

const Nav=()=>{

const [search,setSearch]=useState('');
const [results,setResults]=useState([]);
const back=useHistory();
const handleChange=(evt) => {
	evt.preventDefault()
	console.log(search);
	let path="/search/"+search;
	back.push(path);
		
	}


	return(

	<div className="container-fluid nav_bg">
		<div className="row">
		<div className="col-10 mx-auto">

	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">BuzKart.pk</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register"> Signup</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control mr-2" 
		type="search" 
		placeholder="Search"
		aria-label="Search"
		value={search}
		onChange={event => setSearch(event.target.value)}
		/>
        <button className="btn btn-outline-success"
		type="submit"
		onClick={handleChange}> Search</button>
      </form>
	  
    </div>
  </div>
</nav>
</div>
</div>
</div>
		);
}
export default Nav;