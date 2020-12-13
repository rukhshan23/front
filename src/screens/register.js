import React, { useState, useEffect} from 'react';
import './register.css';
import axios from 'axios';
import Select from 'react-select';
import {Link,Redirect} from 'react-router-dom';
function Register ()
{
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [secques,setSecques] = useState('');
	const [secans,setSecans] = useState('');
	const [type,setType]=useState('');

	const accounttypes=[
		{label:'Buyer Account',value:'buyer'},
		{label:'Seller Account',value:'seller'},

	];
	const resetForm=()=>{
		setType("");
		setSecans("");
		setSecques("");
		setEmail("");
		setPassword("");
	}
	const handleClick = (evt) => {
		evt.preventDefault()
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addaccount', {
				'email' : email,
				'password':password,
				'sec_ques':secques,
				'sec_ans':secans,
				'type':type.value
		})

			console.log(request.data.success);
			
			if(request &&!request.data.success)
			{
				alert("Some or all of the inputs are invalid. Please try again");
				resetForm();

			}
			else if (request &&request.data.success)
			{
				console.log("hello");
				return <Redirect to="/register/buyer" />

			}

			return request
		}
		fetchData()
	}
	return(
		<div className= "RegisterForm">
		
		<form>
			<label>
				Enter a valid email address
				<br/>
		      	<input
			      	type='text'
			      	placeholder='Email address'
			      	value={email}
			      	onChange={event => setEmail(event.target.value)}
		      	/>
		    </label>
		    <br/>
		    <label>
		    	Enter Password
		    	<br/>
		      	<input
			      	type='password'
			      	placeholder='Password'
			      	value={password}
			      	onChange={event => setPassword(event.target.value)}
      			/>
      		</label>
      		<br/>
      		<label>
		    	Set a security question
		    	<br/>
		      	<input
			      	type='text'
			      	placeholder='Security question'
			      	value={secques}
			      	onChange={event => setSecques(event.target.value)}
      			/>
      		</label>
      		<br/>
      		<label>
		    	Set an answer for your question
		    	<br/>
		      	<input
			      	type='text'
			      	placeholder='Answer'
			      	value={secans}
			      	onChange={event => setSecans(event.target.value)}
      			/>
      		</label>
      		<br/>
      		<Select 
      		defaultValue={type}
      		options={accounttypes} 
      		onChange={setType}
      		/>
      		<br/>
      		
      		<button type='submit' onClick={handleClick}>Next</button>

      	</form>

		</div>
		)
	
	
}
export default Register;
