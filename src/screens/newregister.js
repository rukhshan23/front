import React, { useState, useEffect} from 'react';
import './register.css';
import axios from 'axios';
import Select from 'react-select';
import {NavLink,Redirect,Route,Switch} from 'react-router-dom';
import buyerRegister from './buyerRegister';
import sellerRegister from './sellerRegister';
import RegNav from './RegNav';

function Register(){
	return(
		<div className="register">
		<RegNav/>
		
		</div>


		);

}
export default Register;
/*
		<div className="register">
			<Switch>
				<Route path ="/register/buyer" component={buyerRegister}/>
    			<Route path="/register/seller" component={sellerRegister} />
			</Switch>
		</div>
		*/