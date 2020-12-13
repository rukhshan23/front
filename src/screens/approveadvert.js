import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useContext} from 'react';
import {UserContext} from './UserContext'
import './style.css'


function ApproveAdvert()
{
	const button = useHistory();
	const back=useHistory();
	const {user, setUser}=useContext(UserContext);
    const handleClick1 = (id) => {
		console.log(id);
		id=id.toString();
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/approveadvert',{
				"product_id" : id
			})
			if(request && request.data.success)
			{
				alert("Advertisement Successfully Approved")
			}
            
			return request
		}
		fetchData()
	}
    const handleClick2 = (id) => {
		id=id.toString();
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/rejectadvert',{
				"product_id" : id
			})
			if(request && request.data.success)
			{
				alert("Advertisement Successfully Rejected")
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
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/pendingadvert";
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
	})
	const hist=history.map((obj,i)=>(
		<>
			<hr></hr>
			<div>
				<div> {"Product Name: "+obj.name}</div>
				<div> {"Product ID: " +obj.product_id}</div>
				<div> {"Seller ID: " +obj.seller_id}</div>
				<div><img src = {obj.pic_links}/></div>
				<button type='submit' onClick={(i) => handleClick1(obj.product_id)}>Approve</button>
				<button type='submit' onClick={(i) => handleClick2(obj.product_id)}>Reject</button>
			</div>
			<hr></hr>
		</>
		));
	if (hist.length == 0){
		return(
			<>
				<h1>No Advertisements to Approve or Reject</h1>
			</>
		);
	}
	return(
        <>
			<h1>Advertisement To Be Approved</h1> 
			<div>{hist}</div>
        </>   
	);
}
export default ApproveAdvert;