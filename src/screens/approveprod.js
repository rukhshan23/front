import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useContext} from 'react';
import {UserContext} from './UserContext'
import './style.css';
function ApproveProd()
{
const {user, setUser}=useContext(UserContext);
	const button = useHistory();
	const back=useHistory();
    const handleClick1 = (id) => {
		console.log(id);
		id=id.toString();
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/runtime/adminapproval',{
				"product_id" : id
			})
			if(request && request.data.success)
			{
				alert("Product Successfully Approved")
			}
			
			return request
		}
		fetchData()
	}
    const handleClick2 = (id) => {
		id=id.toString();
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/runtime/adminrejection',{
				"product_id" : id
			})
			if(request && request.data.success)
			{
				alert("Product Successfully Rejected")
			}
		
		return request
	}
		fetchData()
    }
	const [history,setHistory]=useState([]);
	useEffect(() => {
	if(user==-1)
	{
		back.push('/');
	}
	else
	{
		if(user.type=="admin")
		{

		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/pendingapproval";
			const request = await axios.get(url);
			setHistory(request.data);
			return request
		}
		fetchData()
		}
		else
		{
		back.push('/');
		}
	}
	});
	const hist=history.map((obj,i)=>(
		<>
			<hr></hr>
			<div>
				<div> {"Product ID: "+ obj.product_id}</div>
				<div> {"Product Name: "+obj.name}</div>
				<div> {"Seller ID: " +obj.seller_id}</div>
				<div> {"Price: " +obj.price}</div>
				<div> {"Stock: " +obj.stock}</div>
				<div><img src ={obj.pic_links} /></div>
				<button type='submit' onClick={(i) => handleClick1(obj.product_id)}>Approve</button>
				<button type='submit' onClick={(i) => handleClick2(obj.product_id)}>Reject</button>
			</div>
			<hr></hr>
		</>
		));
	if (hist.length == 0){
		return(
			<>
				<h1>No Items to Approve or Reject</h1>
			</>
		);
	}
	return(
        <>
			<h1>Items To Be Approved</h1> 
			<div>{hist}</div>
        </>   
	);
}
export default ApproveProd;