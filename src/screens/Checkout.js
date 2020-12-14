import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

function Checkout(){

	const [cart,setCart]=useState([]);
	const [cancel,setCancel]=useState(0);
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
	},[])

	const dunc=()=>{

	async  function fetchData() 
	{
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/decrementcredit"
			const request = await axios.post(url,{
			"buyer_id":user.buyer_id,
			"val":credit
					
			});
			console.log(request);
			bill=bill-credit;
			
	}
	

	fetchData()
	
	}
	

	

	const handleClick1 = (obj) => {
	
	if (credit>user.credit)
	{
		alert("Insufficient Credit")
		return;

	}

	async  function fetchData() 
	{
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/updatecredit"
			const request = await axios.post(url,{
			"buyer_id":user.buyer_id,
			"bill":user.bill
					
			});
			
	}
	

	fetchData()

	const userdata={
			"buyer_id": user.buyer_id,
			"credit": user.credit-credit+0.01*user.bill,
			"success": user.success,
			"type": user.type,
			"username": user.username,
			"bill":bill
		};
		setUser(userdata);

	

		
	let order_id=-1
	var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	async  function fetchData() 
	{
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/additem"
			const request = await axios.post(url,{
					"order_id":-1,
					"product_id":cart[0].product_id,
					"discount":cart[0].discount,
					"quantity":cart[0].quantity,
					"price":cart[0].price,
					"seller_id":cart[0].seller_id,
					"buyer_id":cart[0].buyer_id,
					"shipping_status":0,
					"credit_used":credit,
					"date":date
			});
			if(request && request.data.success)
			{
				console.log(request.data);
				order_id=request.data.order_id;
				for( var i=1;i<cart.length; i++)
				{
					console.log(order_id);
					async  function fetchData() {
					let url="https://glacial-fjord-98034.herokuapp.com/runtime/additem"
					const request = await axios.post(url,{
					"order_id":order_id,
					"product_id":cart[i].product_id,
					"discount":cart[i].discount,
					"quantity":cart[i].quantity,
					"price":cart[i].price,
					"seller_id":cart[i].seller_id,
					"buyer_id":cart[i].buyer_id,
					"shipping_status":0,
					"credit_used":credit,
					"date":date});
					}
					fetchData()
					
				}
			}
		
	}
	fetchData()
	for( var i=0; i<cart.length;i++)
	{
			async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/deletecart";
			const request = await axios.post(url,{
			data:{
			"buyer_id":cart[i].buyer_id,
			"product_id":cart[i].product_id
			}
			
			
			});
			
			console.log(request);
			
		}
		fetchData()
	}
			
	dunc()
	alert("Order Placed!")
	back.push("/")
	}
	
	const handleClick2 = (obj) => {

	for( var i=0; i<cart.length;i++)
	{
			async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/deletecart";
			const request = await axios.post(url,{
			data:{
			"buyer_id":cart[i].buyer_id,
			"product_id":cart[i].product_id
			}
			
			
			});
			
			console.log(request);
			
		}
		fetchData()
	}

	
		alert("Order Cancelled!")
		back.push("/")
	
		

	}

	
		return cart.length?
		(
		<>
		<div>
		<h2> Your total Bill is {user.bill-credit}Rs </h2>
		</div>
		<div>
		You have credit of Rs {user.credit}
		</div>
		{user.credit?
		<>
		<br/>
		<label>
		  Enter the amount of credit you want to use
		  </label>
		  <br/>
		  <input
		  type='text'
		  placeholder='Credit'
		  value={credit}
		 onChange={event => setCredit(event.target.value)}
      	  />
     
      	  <br/> 
		   
		  </>
		  :""}
		 
		  <br/>
		
		<button className="btn btn-outline-success" type='submit' onClick={handleClick1} > Confirm Order</button>
		<button className="btn btn-outline-success" type='submit' onClick={handleClick2} > Cancel Order</button>

		</>
		):
		(<h1> Your cart is empty </h1>)




	
	
}
export default Checkout;