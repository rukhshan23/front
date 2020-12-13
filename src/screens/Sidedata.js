
import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import* as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {Link} from 'react-router-dom';
'beverages', 'crockery','electronics', 'snacks', 'sports', 'garments', 'grocery', 'cosmetics'
export const SidebarData=[
	{
		title:'Electronics',
		path:'/category/electronics',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Sports',
		path:'/category/sports',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Garments',
		path:'/category/garments',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Grocery',
		path:'/category/grocery',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Beverages',
		path:'/category/beverages',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Crockery',
		path:'/category/crockery',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Snacks',
		path:'/category/snacks',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
	{
		title:'Cosmetics',
		path:'/category/Cosmetics',
		icon: <AiIcons.AiFillHome />,
		cName:'nav-text'
	},
]

export default SidebarData;