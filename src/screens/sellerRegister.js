import React, { useState, useEffect} from 'react';
// import './styles/style.css'

//import './buyerRegister.css';
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
	const [history,setHistory] = useState([]);
	const accounttypes=[
		{label:"Admin Commission: 20% Number of Products allowed: 50",value:1},
		{label:'Admin Commission: 50% Number of Products allowed: 110',value:2},

	];
	useEffect(() => {
	async  function fetchData3() {
		let url="https://glacial-fjord-98034.herokuapp.com/runtime/bringsubplans";
		const request = await axios.get(url);
		console.log(request.data)
		setHistory(request.data);
		return request
	}
	fetchData3()
	})


	const hist=history.map((obj,i)=>(
		{label:["Admin Commission: "+ obj.comm_percentage + "% ","Number of Products allowed: "+obj.no_prod],value:obj.subs_id}
		));
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
					async function fetchData3(){
					const result = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/deleteaccount', {
						data:{
						"account_id":request.data.account_id
					
					}
					});
					}
					fetchData3()
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
			</label>
				<div>
		      	<input
			      	type='text'
			      	placeholder='Name'
			      	value={name}
			      	onChange={event => setName(event.target.value)}
		      	/>
				</div>
		    
		    
		    <label>
		    	Enter Phone Number
		    </label>
			<div>
		      	<input
			      	type='text'
			      	placeholder='Phone Number'
			      	value={phone}
			      	onChange={event => setPhone(event.target.value)}
      			/>
      		
      		</div>
      		<label>
				Enter a valid email address
			</label>
				<div>
		      	<input
			      	type='text'
			      	placeholder='Email address'
			      	value={email}
			      	onChange={event => setEmail(event.target.value)}
		      	/>
				</div>
		    
		    
		    <label>
		    	Enter Password
			</label>
		    	<div>
		      	<input
			      	type='password'
			      	placeholder='Password'
			      	value={password}
			      	onChange={event => setPassword(event.target.value)}
      			/>
				</div>
      		
      		
      		<label>
		    	Set a security question
			</label>
		    	<div>
		      	<input
			      	type='text'
			      	placeholder='Security question'
			      	value={secques}
			      	onChange={event => setSecques(event.target.value)}
      			/>
				</div>
      		
      		
      		<label>
		    	Set an answer for your question
			</label>
		    <div>
		      	<input
			      	type='text'
			      	placeholder='Answer'
			      	value={secans}
			      	onChange={event => setSecans(event.target.value)}
      			/>
			</div>
      		
      		
      		<label>
      			Select a Subscription Plan
			</label>
      		<Select 
	      		defaultValue={subs}
	      		options={hist} 
	      		onChange={setSubs}
      		/>
      		
      		
      		<button type='submit' onClick={handleClick}>Next</button>
		    </form>
		</div>
		);

}
export default SellerRegister;