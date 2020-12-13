import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {UserContext} from "./UserContext";

function Discount()
{
	const [history,setHistory]=useState([]);
	const {user, setUser}=useContext(UserContext);
	const [dis,setDis] = useState('');
	const button = useHistory();
	const back=useHistory();
    const handleClick = (id) => {
		id=id.toString();
		if (dis>100)
		{
			alert("Discount can not be more than 100.")
			return
		}
		if (dis<0)
		{
			alert("Discount can not be less than 0.")
			return
		}
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/discount',{
				"product_id" : id,
				"discount":dis
			})
			if(request && request.data.success)
			{
				alert("Discount Set!")
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
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/list', {
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
				<div> {"Product ID: "+ obj.product_id}</div>
				<div> {"Product Name: "+ obj.name}</div>
				<div> {"Price: " +obj.price}</div>
				<div> {"Stock: " +obj.stock}</div>
				<div> {"Current discount: " +obj.discount}</div>
				<img src ={obj.pic_links} />
				<input
			      	type='text'
			      	placeholder='Discount'
			      	value={dis}
			      	onChange={event => setDis(event.target.value)}
	      		/>
	      		<button type='set' onClick={(i) => handleClick(obj.product_id)}>Set Discount</button>
			</div>
			<hr></hr>
		</>
		));
	if (hist.length == 0){
		return(
			<>
				<h1>There are no items</h1>
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
export default Discount;