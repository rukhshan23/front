import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const TrendSpecificSeller = (props) =>
{
    const stack = useHistory();
    const [id,setId] = useState('');


	const handleClick = (evt) => {
        evt.preventDefault()
        let path="/viewsingletrend";
        props.history.push({pathname : path, state : {search:id}})
    }
    
	return (
		<div className= "EnterID">
            <form>
            <div>
                <label>Enter Seller ID</label>
            </div>
                <div>  
                    <input
                        type='text'
                        placeholder='Seller ID'
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' onClick={handleClick}>Submit</button>    
                </div>  	
            </form>
      </div>
);
}
export default TrendSpecificSeller;