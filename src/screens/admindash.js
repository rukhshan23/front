import React, { useState, useEffect} from 'react';
//import './login.css';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";

function AdminDash()
{
    const history = useHistory();
    const handleClick1 = (evt) => {
        return(
        history.push("/approveprod")
		);
    }
    const handleClick2 = (evt) => {
        return(
        history.push("/trenddash")
		);
    }
    const handleClick3 = (evt) => {
        return(
        history.push("/subsplan")
		);
    }
    const handleClick4 = (evt) => {
        return(
        history.push("/approveadvert")
		);
    }

	return(
        <>
	
		<h1> ADMIN DASHBOARD </h1> 
		
        <div className="FrontAdmin">
            <button type='submit' onClick={handleClick4}>Approve Advertisements</button>
            <br/>
            <button type='submit' onClick={handleClick1} >Approve Products</button>
            <br/>
            <button type='submit' onClick={handleClick2}>View Trends</button>
            <br/>
            <button type='submit' onClick={handleClick3}>Add Subscription Plan</button>
            <br/>
        </div>
        </>
		   
	);
}
export default AdminDash;