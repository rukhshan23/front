import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
	return(
	<>
	<div className="container-fluid nav_bg">
		<div className="row">
			<div className="col-10 mx-auto">
				<div className="NavBar">
					<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							
						<NavLink activeClassName="active_class" to="/register/buyer"> Create a Buyer Account</NavLink>
						
						<NavLink activeClassName="active_class" to="/register/seller"> Create a Seller Account</NavLink>
							
					</ul>
			
				</div>
			</div>
		</div>
	</div>
	
	</>
		);
}
export default NavBar;

<div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/register/buyer">Create a Buyer Account</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register/seller"> Create a Seller Account</NavLink>
        </li>
        
      </ul>
    </div>
  </div>