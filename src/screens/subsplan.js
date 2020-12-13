import React, { useState, useEffect} from 'react';
//import './login.css';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './style.css'

function SubsPlan ()
{
	
	const history = useHistory();
	const [prods,setProds] = useState('');
	const [precentage,setPrecentage] = useState('');
	const resetForm=()=>{
		
		setProds("");
		setPrecentage("");
	}
	const handleClick = (evt) => {
		evt.preventDefault()
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addsubscription', {
				'no_prod' : prods,
				'comm_percentage': precentage
        })
        console.log(request.data)
			if(request &&!request.data.success)
			{

				alert("Some or all of the inputs are invalid. Please try again");
				resetForm();

			}
			else if (request &&request.data.success)
			{
				alert("Subscription Plan added Successfully");
				resetForm();
				return(
                    history.push("/subsplan")
				);
			}
			return request
		}
		fetchData()
    }

	return (
		<div className= "subsPlan">
		<form>
			<div>
				<label>Enter Number of Products</label>
			</div>
            <div>	
				<input
					type='text'
					placeholder='Products'
					value={prods}
					onChange={event => setProds(event.target.value)}
				/>
			</div>
			<div>
			<label>
				Enter Commission Percentage
			</label>
			</div>
            <div>
            <input
                type='text'
                placeholder='Commission Percentage'
                value={precentage}
                onChange={event => setPrecentage(event.target.value)}
            />
            </div>
			<div>
				<button type='submit' onClick={handleClick}>Add Plan</button>
			</div>
      	
      	</form>
      </div>
);
} 
export default SubsPlan;
