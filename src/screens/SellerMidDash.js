import React, { useState, useEffect} from 'react';
import './buyerRegister.css';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

function BuyerDash(){
	const history=useHistory();
	
	const {user, setUser}=useContext(UserContext);
	
	
	return(
	<>
	
	<div className="container-fluid nav_bg">
		<div className="row">
			<div className="col-10 mx-auto">
				<div className="NavBar">
					<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							
						<NavLink activeClassName="active_class" to="/sellerdashboard/listproducts"> Your Products</NavLink>
						
						<NavLink activeClassName="active_class" to="/sellerdashboard/postproduct"> Post Product</NavLink>

						<NavLink activeClassName="active_class" to="/sellerdashboard/requestadvertisement"> Post advertisment</NavLink>

						<NavLink activeClassName="active_class" to="/sellerdashboard/discount"> Set Discount</NavLink>

						<NavLink activeClassName="active_class" to="/sellerdashboard/dispatch"> Dispatch Orders</NavLink>
						
							
					</ul>
			
				</div>
			</div>
		</div>
	</div>
	</>


	);
}
export default BuyerDash;