import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const DateSeller = (props) =>
{
    const stack = useHistory();
    const [date,setDate] = useState('');


	const handleClick = (evt) => {
        evt.preventDefault()
        let path="/viewdatetrends";
        props.history.push({pathname : path, state : {search:date}})
    }
    
	return (
		<div className= "EnterDate">
            <form>
            <div>
                <label>Enter Date (YYYYMMDD)</label>
            </div>
                <div>  
                    <input
                        type='text'
                        placeholder='Date'
                        value={date}
                        onChange={event => setDate(event.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' onClick={handleClick}>Submit</button>    
                </div>  	
            </form>
      </div>
);
}
export default DateSeller;