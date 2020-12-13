import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import* as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Sidedata from './Sidedata';
import './Sidebar.css'

function Sidebar(){
	const [sidebar,setSidebar]=useState(false);
	const showSidebar=()=>setSidebar(!sidebar)

	return(
		<>
		<div className='sidebar'>
			<Link to="#" className="menu-bars">
				<FaIcons.FaBars onClick={showSidebar}/>
				Categories
			</Link>
		</div>
		<nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
			<ul className="nav-menu-items">
				<li className ="navbar-toggle">
					<Link to="#"className="menu-bars">
						<AiIcons.AiOutlineClose />
						
					</Link>
				</li>
				{Sidedata.map((item,index)=>{
					return(
						<li key={index} className={item.cName}>
							<Link to={item.path}>
							{item.icon}
							<span> {item.title}</span>
							</Link>

						</li>
					)
				})}
			</ul>
		</nav>
		</>
	);
}

export default Sidebar;