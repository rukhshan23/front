import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {UserContext} from "./UserContext";

function Dispatch()
{
	const [history,setHistory]=useState([]);
	const {user, setUser}=useContext(UserContext);
	const [orderid,setOrderid] = useState('');
	const button = useHistory();
	const back=useHistory();
    const handleClick = (id) => {
		
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/dispatch',{
				'order_id':id,
				'seller_id':user.seller_id			
			})
			if(request && request.data.success)
			{
				alert("You can see your updated orders' status below!")
			}
		return request
	}
		fetchData()
    }
	
	useEffect(() => {
	if(user==-1)
	{
		back.push('/');
	}
	else
	{
		if(user.type=="seller")
		{
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/dispatchlist', {
				'seller_id':user.seller_id
		})
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
				<div> {"Order ID: "+ obj.order_id}</div>
				<div> {"Product ID: "+ obj.product_id}</div>
				<div> {"Price: " +obj.price}</div>
				
	      		<button type='set' onClick={(i) => handleClick(obj.order_id)}>Dispatch</button>
			</div>
			<hr></hr>
		</>
		));
	if (hist.length == 0){
		return(
			<>
				<h1>There are no orders to be dispatched</h1>
			</>
		);
	}
	return(
        <>
			<h1>Items:</h1> 
			<div>{hist}</div>
        </>   
	);
}
export default Dispatch;