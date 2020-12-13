import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const SecQues = (props) =>
{
    const stack = useHistory();
    const [email,setEmail] = useState('');


	const handleClick = (evt) => {
        evt.preventDefault()
        let path="/enterAnswer";
        props.history.push({pathname : path, state : {search:email}})
    }
    
	return (
		<div className= "EnterEmail">
            <form>
            <div>
                <label>Enter Email To Reset Password</label>
            </div>
                <div>  
                    <input
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' onClick={handleClick}>Submit</button>    
                </div>  	
            </form>
      </div>
);
}
export default SecQues;