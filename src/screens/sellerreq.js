import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";

function SellerReq()
{
    const [name,setName] = useState('');
	const [seller_id,setId] = useState('');
    const [product_id,setProd]=useState('');

    const resetForm=()=>{
		
		
		
		setProd("");
		setName("");
	}

    const handleClick = (evt) => {
		evt.preventDefault()
		async  function fetchData() {
			const request = await axios.post('https://glacial-fjord-98034.herokuapp.com/runtime/addadvert', {
				'name' : name,
				'product_id':product_id,
				
				'status':1
		})

			console.log(request.data.success);
			
			if(request &&!request.data.success)
			{

				alert("Some or all of the inputs are invalid. Please try again");
				resetForm();

            }
            else if(request && request.data.success)
					{
						
						let msg1=" Your request has been sent to the admin for approval";
						alert(msg1);
					}
			return request
		}
		fetchData()
	}

    return(
        <div className="add_req">
            <form>
            <label>
				Enter Product's Name
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
				Enter Product's ID
				</label>

				<div>
		      	<input
			      	type='text'
			      	placeholder='ID'
			      	value={product_id}
			      	onChange={event => setProd(event.target.value)}
		      	/>
		      	</div>
            <button type='submit' onClick={handleClick}>Send Request</button>
            </form>
        </div>

    );

}
export default SellerReq;