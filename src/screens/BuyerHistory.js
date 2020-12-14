import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

function BuyerHistory(){

	const [history,setHistory]=useState([]);
	const {user, setUser}=useContext(UserContext);
	const back=useHistory();
	let id="";
	let order=0;
	
	useEffect(() => {
	if(user==-1)
	{
		back.push('/');
	}
	else
	{
		console.log(user);
		id=user.buyer_id.toString();
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/buyerhistory/" +id;
			const request = await axios.get(url);
			setHistory(request.data);
			
			return request
		}
		fetchData()
	}
	})

	const hist=history.map((obj,i)=>(
	<>
		{obj.order_id!=order? <h2> Order # {obj.order_id} </h2>:""}

		
		<div> {"order ID:"+ obj.order_id}</div>
		<div> {"Date :"+obj.date}</div>
		<div> {"Product: " +obj.name}</div>
		<div> {"Quantity: " +obj.quantity}</div>
		<div> {"Price: "+obj.price}</div>
		<script>
		{order=obj.order_id}
		</script>
		</>
	
	
	
	));


	return(
	<>
		<h1> Your Orders </h1>
		<div> {hist}</div>



	</>
	);
}
export default BuyerHistory;