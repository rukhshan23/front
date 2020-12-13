import React, { useState, useEffect} from 'react';
import {useHistory,NavLink} from 'react-router-dom';
import './login.css';
import axios from 'axios';
import {useContext} from 'react';
import {UserContext} from './UserContext'
function Login ()
{
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
	const {user, setUser}=useContext(UserContext);
	const history=useHistory();
	useEffect(() => {
		async  function fetchData() {
			const request = await axios.get('https://glacial-fjord-98034.herokuapp.com/runtime/news')
			console.log(request.data)
			return request
		}
		fetchData()
	},[])
	const resetForm=()=>{
		
		setUsername("");
		setPassword("");
	}
	const handleClick = (evt) => {
		evt.preventDefault()
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/login', {
				'username' : username,
				'password':password
		})
			if(request &&!request.data.success)
			{

				alert("Some or all of the inputs are invalid. Please try again");
				resetForm();

			}
			else if (request &&request.data.success)
			{
				
				console.log(request.data);
				setUser(request.data);
				if(request.data.type=="seller")
				{
				let msg= "Welcome "+request.data.username+"!";
				alert(msg)
				return history.push('/sellermiddashboard');
				}
				else if(request.data.type=="buyer")
				{
				let msg= "Welcome "+request.data.username+"!";
				alert(msg)
				return history.push('/buyerdashboard');
				}
				else if(request.data.type=="admin")
				{
				return history.push('/admindash');
				}
			}
			return request
		}
		fetchData()
	}

	return (
		<div className= "loginForm">
		<form>
		<label>
		Enter Email
		</label>
		<br/>
		<div>
      	<input
	      	type='text'
	      	placeholder='Email'
	      	value={username}
	      	onChange={event => setUsername(event.target.value)}
      	/>
      	</div>
      	<br/>
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
      	
      	<button type='submit' onClick={handleClick}>Submit</button>
		<div>		
			<NavLink activeClassName="active_class" to="/secQues">
					<h2>Forgot Password</h2>
			</NavLink>
		</div>

      	
      	</form>
      </div>

		);
} 
export default Login;
