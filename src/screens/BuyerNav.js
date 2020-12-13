
import './BuyerNav.css';
import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import { useState, useEffect} from 'react';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import axios from 'axios';

const Nav=()=>{



const [search,setSearch]=useState('');
const [results,setResults]=useState([]);
const back=useHistory();
const {user, setUser}=useContext(UserContext);
const handleChange=(evt) => {
	evt.preventDefault()
	console.log(search);
	let path="/search/"+search;
	back.push(path);
		
	}
	const handleChange1=(evt) => {
	evt.preventDefault()
	
	setUser(-1);
	back.push('/');
		
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
          <NavLink className="nav-link active" aria-current="page" to="/buyerdashboard/cart">shopping cart</NavLink>
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
		 <button className="btn btn-outline-success"
		type="submit"
		onClick={handleChange1}> LogOut</button>
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
