import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
import {Link,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const EnterAnswer = (props) =>
{
    let email = props.history.location.state.search;
    const [history,setHistory]=useState([]);
    const [answer,setAnswer] = useState('');
	const resetForm=()=>{
		
		setAnswer("");
	}
    const handleClick = (evt) => {
        evt.preventDefault()
        async  function fetchData() {
            let url="https://glacial-fjord-98034.herokuapp.com/runtime/secanswer/" + email;
            const request = await axios.get(url);
            console.log(request.data)
            if (request.data.sec_ans == answer && request.data.success){
                let path="/resetPassword";
                props.history.push({pathname : path, state : {search:email}})
            }
            else{
                alert("Answer Does not Match")
                resetForm()
                return request
            }
        }
        fetchData()
    }

	useEffect(() => {
        console.log(email)
		async  function fetchData() {
			let url="https://glacial-fjord-98034.herokuapp.com/runtime/secquestion/" + email;
            const request = await axios.get(url);
			console.log(request)
            if (request.data.success && request.data.results.length !=0){
                setHistory(request.data.results)
				
            }
            else{
                alert("Incorrect Email")
                props.history.push("/secQues")
                return request
            }
		}
		fetchData()
	
    },[])
	const hist=history.map((obj,i)=>(
		<>
			<hr></hr>
			<div> {"Security Question: "+ obj.sec_ques}</div>
			<hr></hr>
		</>
        ));

   
	return(
        <>
			<h1> Enter Answer </h1> 
			<div>{hist}</div>
            <div className= "EnterAnswer">
            <div>
                <label>Enter Answer</label>
            </div>
            <form>
                <div>  
                    <input
                        type='text'
                        placeholder='Answer'
                        value={answer}
                        onChange={event => setAnswer(event.target.value)}
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
export default EnterAnswer;