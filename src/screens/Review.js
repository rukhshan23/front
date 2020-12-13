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
	const [rev,setRev] = useState('');
	const [rat,setRat] = useState('');
	const button = useHistory();
	const back=useHistory();
    const handleClick = (id) => {
    	if (rat>10)
    	{
    		alert("Rating must be less than 10 and greater than 0")
    		return
    	}
    	if (rat<0)
    	{
    		alert("Rating must be less than 10 and greater than 0")
    		return
    	}

		id=id.toString();
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/review',{
				"buyer_id":user.buyer_id,
			   "product_id":id,
			   "review":rev,
			   "rating": rat		
			})
			if(request && request.data.success)
			{
				alert("Review added!")
			}
			else
			{
				alert("Review already added!")
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
		if(user.type=="buyer")
		{
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/listmysellers', {
				'buyer_id':user.buyer_id
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
				<div> {"Product Name: "+ obj.name}</div>
				<div> {"Product ID: "+ obj.product_id}</div>
				<input
			      	type='text'
			      	placeholder='Review'
			      	value={rev}
			      	onChange={event => setRev(event.target.value)}
	      		/>
	      		<input
			      	type='text'
			      	placeholder='Rating'
			      	value={rat}
			      	onChange={event => setRat(event.target.value)}
	      		/>
	      		<button type='set' onClick={(i) => handleClick(obj.product_id)}>Add Review</button>
			</div>
			<hr></hr>
		</>
		));
	if (hist.length == 0){
		return(
			<>
				<h1>No Product to Add Review For</h1>
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