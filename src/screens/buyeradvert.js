import React, { useState, useEffect} from 'react';
//import './login.css';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "./style.css";
function BuyerAdvert()
{
	const [history,setHistory]=useState([]);

	useEffect(() => {
	
	
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/buyeradvert";
			const request = await axios.get(url);
			setHistory(request.data);
			
			return request
		}
		fetchData()
	
	},[])
	const hist=history.map((obj,i)=>(
		<>
			
	
			<hr></hr>
			<div> {"name :"+obj.name}</div>
			<div> {"Price: " +obj.price}</div>
			<div>
			<img src ={obj.pic_links} />
			</div>
			<hr></hr>
			
			
		</>
		
		
		
		));

   
	return(
        <>
	
		<h1> Happy Shopping! </h1> 
		<div>{hist}</div>
		
        
        </>
		   
	);
}
export default BuyerAdvert;