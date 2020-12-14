import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

function Cart(){

	const [cart,setCart]=useState([]);
	const [credit,setCredit]=useState(0);
	const {user, setUser}=useContext(UserContext);
	const back=useHistory();
	let id="";
	let order=0;
	let bill=0;
	let temp=0
	
	useEffect(() => {
	if(user==-1)
	{
		back.push('/');
	}
	else
	{
		
		id=user.buyer_id.toString();
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/getcart/" +id;
			const request = await axios.get(url);
			setCart(request.data);
			
			return request
		}
		fetchData()
	}
	})
	const handleClick1 = (obj) => {

		console.log(obj);
	
		id=user.buyer_id.toString();
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/deletecart";
			const request = await axios.post(url,{
			data:{
			"buyer_id":obj.buyer_id,
			"product_id":obj.product_id
			}
			
			
			});
			
			console.log(request);
			return request
		}
		fetchData()
		

	}

	const car=cart.map((obj,i)=>(
	<>
		

		<h3> Item #{order++} </h3>
		<div key={obj.product_id}>
		<div> {"Product ID:"+ obj.product_id}</div>
		<div> {"Name :"+obj.name}</div>
		<div> {"Price: " +obj.price}</div>
		<div> {"Quantity: " +obj.quantity}</div>
		<script>
		
			{temp=obj.price*obj.quantity*(100-obj.discount)/100}
			{bill=bill+temp}
		</script>
		<div><h2> total: {temp} </h2></div>
		<div>
		<button type='submit' onClick={(i) => handleClick1(obj)}>Remove this item</button>
		</div>
		</div>

		</>
	
	
	
	));
	const handleClick2 = (evt) => {
		const userdata={
			"buyer_id": user.buyer_id,
			"credit": user.credit,
			"success": user.success,
			"type": user.type,
			"username": user.username,
			"bill":bill
		};
		setUser(userdata);

	evt.preventDefault();
	back.push('/buyerdashboard/checkout');
	}


	const handleChange = (evt) => {

	if(credit>user.credit)
	{
		alert("You have exceeded your credit amount");
		setCredit(0);

	}
	else
	{
		setCredit(evt);
	}
	
	}


	return(
	<>
		<h1> Your Orders </h1>
		<div> {car}</div>
		<h2> Your total Bill is {bill-credit}Rs </h2>
		You have credit of Rs {user.credit}
		{user.credit?
		<>
		<br/>
		<label>
		  Enter the amount of credit you want to use
		  <br/>
		  <input
		  type='text'
		  placeholder='Credit'
		  value={credit}
		 onChange={event => handleChange(event.target.value)}
      	  />
      	  </label>
      	  <br/> 
		  </>
		  : ""}
		  <br/>
		
		<button className="btn btn-outline-success" type='submit' onClick={handleClick2}> Proceed to checkout</button>



	</>
	);
}
export default Cart;
