import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';

function SellerRegister(){
	const [name,setName] = useState('');
	const [subs,setSubs] = useState('');
	const [phone,setPhone]=useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [secques,setSecques] = useState('');
	const [secans,setSecans] = useState('');
	const accounttypes=[
		{label:"Admin Commission: 20% Number of Products allowed: 50",value:24},
		{label:'Admin Commission: 50% Number of Products allowed: 110',value:25},

	];

	const resetForm=()=>{
		
		setSecans("");
		setSecques("");
		setEmail("");
		setPassword("");
		setPhone("");
		setSubs("");
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
				'type':'seller'
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
					const result = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addseller', {
						'name' : name,
						'subs_id':subs.value,
						'phone':phone,
						'discount':0,
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
		<div className="seller_reg">
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
      		<label>
      			Select a Subscription Plan
      		<Select 
	      		defaultValue={subs}
	      		options={accounttypes} 
	      		onChange={setSubs}
      		/>
      		</label>
      		<br/>
      		
      		<button type='submit' onClick={handleClick}>Next</button>
		    </form>
		</div>
		);

}
export default SellerRegister;