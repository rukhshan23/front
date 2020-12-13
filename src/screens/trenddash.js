import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";

function TrendDash()
{
    const history = useHistory();
    const handleClick1 = (evt) => {
        return(
        history.push("/trendseller")
		);
    }
    const handleClick2 = (evt) => {
        return(
        history.push("/trenddateseller")
		);
    }
    const handleClick3 = (evt) => {
        return(
        history.push("/trendspecificseller")
		);
    }
	return(
        <>
	
		<h1> View Trends </h1> 
		
        <div className="FrontAdmin">
        <button type='submit' onClick={handleClick1} >View Seller Trend</button>
        <button type='submit' onClick={handleClick2}>View Date Trend</button>
        <button type='submit' onClick={handleClick3}>View Specific Seller Trend</button>
        </div>
        </>
		   
	);
}
export default TrendDash;