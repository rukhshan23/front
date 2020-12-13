import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const ResetPassword = (props) =>
{
    let email = props.history.location.state.search;
    const [history,setHistory]=useState([]);
    const [password,setPassword] = useState('');
    const [repassword,resetPassword] = useState('');

	const resetForm=()=>{
		
        setPassword("");
        resetPassword("");
	}
    const handleClick = (evt) => {
        evt.preventDefault()
        if (password == repassword){
            async  function fetchData() {
                let url="https://glacial-fjord-98034.herokuapp.com/runtime/resetpassword";
                const request = await axios.post(url,{
                    'password' : password,
                    'email' : email
                });
                console.log(request.data)
                if (request.data.success){
                    alert(request.data.message)
                    resetForm()
                    return(
                        props.history.push("/login")
                    );
                }
                else{
                    alert("Password Not Updated")
                    resetForm()
                    return request
                }
            }
            fetchData()
        }
        else{
            alert("Passwords Did Not Match")
            resetForm()

        }

    }
   
	return(
        <>
			<h1> Reset Password </h1> 
            <div className= "EnterPassword">
            <div>
                <label>Enter Password</label>
            </div>
            <form>
                <div>  
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div>  
                    <input
                        type='password'
                        placeholder='Re-Enter Password'
                        value={repassword}
                        onChange={event => resetPassword(event.target.value)}
                    />
                </div>
                </form>
                <div>
                    <button type='submit' onClick={handleClick}>Submit</button>    
                </div>  	
            </div>
        </>
		   
	);
}
export default ResetPassword;