import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "./UserContext";
import axios from 'axios';
import Select from 'react-select';

const SellerDash = () => {


	const [product_id,setProduct_id] = useState('');
	const [name,setName] = useState('');
	const [seller_id,setSeller_id] = useState('');
	const [pic_links,setPic_links] = useState('');
	const [price,setPrice] = useState('');
	const [stock,setStock] = useState('');
	const [category,setCategory] = useState('');
	const accounttypes=[
		{label:"beverages",value:"beverages"},
		{label:'crockery',value:'crockery'},
		{label:'electronics',value:'electronics'},
		{label:'snacks',value:'snacks'},
		{label:'sports',value:'sports'},
		{label:'garments',value:'garments'},
		{label:'grocery',value:'grocery'},
		{label:'cosmetics',value:'cosmetics'},
		];
	const {user, setUser}=useContext(UserContext);

	useEffect(() => {
		console.log(user);
	},[])

	
	

	const handleClick = (evt) => {
	evt.preventDefault();
	
      
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/postproduct', {
				'name' : name ,
				'seller_id':user.seller_id,
				'pic_links':pic_links,
				'price':price,
				"stock":stock,
				"category":category.value
		})
			if(request &&!request.data.success)
			{

				alert("Some or all of the inputs are invalid. Please try again");
				//resetForm();

			}
			else if (request &&request.data.success)
			{
				//let msg= "Welcome "+request.data.username+"!";
				alert("PRODUCT POSTED SUCCESSFULLY");
				console.log(request.data);
			}
			return request
		}
		fetchData()
	
		
		
		
		}























		const handleClick2 = (evt) => {
	evt.preventDefault();
	console.log(user);
      
		}


	return (


		<div className= "loginForm">
		<h1> {user.username} </h1>
		<h1> Post Product </h1>
		<form>
      	<input
	      	type='text'
	      	placeholder='name'
	      	value={name}
	      	onChange={event => setName(event.target.value)}
      	/>
      	
      	<input
	      	type='text'
	      	placeholder='pic_links'
	      	value={pic_links}
	      	onChange={event => setPic_links(event.target.value)}
      	/>
      	<input
	      	type='text'
	      	placeholder='price'
	      	value={price}
	      	onChange={event => setPrice(event.target.value)}
      	/>
      	<input
	      	type='text'
	      	placeholder='stock'
	      	value={stock}
	      	onChange={event => setStock(event.target.value)}
      	/>
      
      	<label>
      			Select Category
      		<Select 
	      		defaultValue={category}
	      		options={accounttypes} 
	      		onChange={setCategory}
      		/>
      		</label>
      	</form>
	
			<button type='submit' onClick={handleClick2}>List</button>
			<button type='submit' onClick={handleClick}>Post</button>
		</div>
	);
}

export default SellerDash;