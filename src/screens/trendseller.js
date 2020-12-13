import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";



function TrendSeller()
{
	const [history,setHistory]=useState([]);

	useEffect(() => {
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/viewalltrends";
			const request = await axios.get(url);
			setHistory(request.data);
			
			return request
		}
		fetchData()
	
	},[])
	const hist=history.map((obj,i)=>(
		<>
			<hr></hr>
			<div> {"Seller ID:"+ obj.seller_id}</div>
			<div> {"Earnings :"+obj.price}</div>
			<div> {"Items Sold: " +obj.quantity}</div>
			<hr></hr>
		</>
		));
   
	return(
        <>
			<h1> View Overall Earnings </h1> 
			<div>{hist}</div>
        </>
		   
	);
}
export default TrendSeller;