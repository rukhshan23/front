import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';
function BuyerRegister ()
{
	const [name,setName] = useState('');
	const [address,setAddress] = useState('');
	const [phone,setPhone]=useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [secques,setSecques] = useState('');
	const [secans,setSecans] = useState('');


	const resetForm=()=>{
		
		setSecans("");
		setSecques("");
		setEmail("");
		setPassword("");
		setPhone("");
		setAddress("");
		setName("");
	}

	const handleClick = (evt) => {
		evt.preventDefault()
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addaccount', {
				'email' : email,
				'password':password,
				'sec_ques':secques,
				'sec_ans':secans,
				'type':'buyer'
		})

			console.log(request.data.success);
			
			if(request &&!request.data.success)
			{

				alert("Some or all of the inputs are invalid. Please try again");
				resetForm();

			}
			else if (request &&request.data.success)
			{
				async function fetchData2(){
					const result = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addBuyer', {
						'name' : name,
						'mailing_address':address,
						'phone':phone,
						'credit':0,
						'account_id':request.data.account_id
				})
					if(result &&!result.data.success)
					{
					alert("Some or all of the inputs are invalid. Please try again");
					resetForm();

					}
					else if(result && result.data.success)
					{
						let msg="Congratulations "+ name+"!";
						let msg1=msg+" Your account has been created";
						alert(msg1);
					}


				}
				fetchData2()
			

			}

			return request
		}
		fetchData()
	}

	return(
		<div className="buyer_reg">
			<form>
			<label>
				Enter your name
				<br/>
		      	<input
			      	type='text'
			      	placeholder='Name'
			      	value={name}
			      	onChange={event => setName(event.target.value)}
		      	/>
		    </label>
		    <br/>
		    <label>
		    	Enter Mailing Address
		    	<br/>
		      	<input
			      	type='text'
			      	placeholder='Address'
			      	value={address}
			      	onChange={event => setAddress(event.target.value)}
      			/>
      		</label>
      		<br/>
		    <label>
		    	Enter Phone Number
		    	<br/>
		      	<input
			      	type='text'
			      	placeholder='Phone Number'
			      	value={phone}
			      	onChange={event => setPhone(event.target.value)}
      			/>
      		</label>
      		<br/>
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
      		
      		<button type='submit' onClick={handleClick}>Next</button>
		    </form>
		</div>
		);
} 
export default BuyerRegister;
