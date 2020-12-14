import React from 'react';
import {NavLink,useParams,useHistory} from 'react-router-dom';

import { useState, useEffect} from 'react';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {produce} from "immer";
import './style.css';



const Search=({match})=>{

	const [results,setResults]=useState([]);
	let s=match.params.name;
	const back=useHistory();
	
	const {user, setUser}=useContext(UserContext);
	
	
	const [quant,setQuant]=useState(1);

	const handleClick1 = (obj) => {

	if (quant>obj.stock)
	{
		alert("Quantity is more than stock")
		
	}
	else
	{


	
	
		if (quant>0)
		{
		console.log(obj);
		async  function fetchData() {
		
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/addtocart";
			const request = await axios.post(url,{
				"product_id":obj.product_id,
				"name": obj.name,
				"seller_id":obj.seller_id,
				"quantity": quant,
				"discount":obj.discount,
				"buyer_id":user.buyer_id,
				"price":obj.price
			});
			if(request &&request.data.success)
			{

				alert("Item added to cart");
				

			}
			console.log(request.data);
			return request
		}
		
		fetchData()
		}
		else
		{
			alert("Enter a valid quantity");
		}
	
		}
		
	}

	useEffect(() => {
	
	if(user==-1)
	{
		back.push('/login');
	}

		
		async  function fetchData() {
		
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/search/" +s;
			const request = await axios.get(url);
			setResults(request.data);
			
			return request
		}
		
		fetchData()
		
	
	})

	const res=results.map((obj,i)=>(
	<>
		
		<div key={obj.product_id}>
		
		<div> {"Product ID:"+ obj.product_id}</div>
		<div> {"name :"+obj.name}</div>
		<div> {"Price: " +obj.price}</div>
		<img src ={obj.pic_links} />
		
		<input
	      	type='text'
	      	placeholder='quantity'
			value={quant}
			onChange={event => setQuant(event.target.value)}
	      	
			
      	/>
		{obj.stock==0 ? <button className="btn btn-outline-success" type='submit'> Out of Stock</button>:
		<button className="btn btn-outline-success" type='submit' onClick={(i) => handleClick1(obj)}> Add to cart</button>}
		</div>
		</>
	
	
	
	));

	return(
	<>
		<h1> Search results </h1>
		<div> {res}</div>



	</>
	);




	
};

export default Search
