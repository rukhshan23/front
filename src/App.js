import logo from './logo.svg';
import './App.css';
import Login from './screens/login';
import Register from './screens/newregister';
import BuyerRegister from './screens/buyerRegister';
import BuyerHistory from './screens/BuyerHistory';
import BuyerDashboard from './screens/BuyerDashboard';
import SellerRegister from './screens/sellerRegister';
import {Route,Switch,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import SellerDashboard from './screens/SellerDash';
import SellerMidDash from './screens/SellerMidDash';
import AdminDash from './screens/admindash';
import ApproveProd from './screens/approveprod';
import TrendSeller from './screens/trendseller';

import TrendDash from './screens/trenddash';
import DateSeller from './screens/trenddateseller';
import ViewDateTrend from './screens/viewdatetrends'
import TrendSpecificSeller from './screens/trendspecificseller';
import ViewSingleTrend from './screens/viewsingletrend';
import SubsPlan from './screens/subsplan';
import ApproveAdvert from './screens/approveadvert';
import SellerReq from './screens/sellerreq';
import BuyerAdvert from './screens/buyeradvert';
//import Listing from './screens/listproducts';
import SecQues from './screens/SecQues';
import EnterAnswer from './screens/enterAnswer';
import ResetPassword from './screens/ResetPassword';

import Discount from './screens/Discount';
import Dispatch from './screens/Dispatch';
import Review from './screens/Review';

import NavBar from './NavBar2';
import BuyerNav from './screens/BuyerNav';
import {UserContext} from './screens/UserContext';
import React, { useState,useMemo,useEffect} from 'react';
import Search from './screens/Search';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Sidebar from './screens/Sidebar';
import Category from './screens/Category';
function App() {

 const [user, setUser]=useState(-1);
 const providerValue= useMemo(  () => ({user,setUser}) , [user,setUser]);
  return (
  <>
  <UserContext.Provider value={providerValue}>
	{user==-1 ? <NavBar/> : <BuyerNav/>}
	<Sidebar/>
      <Switch>
	 
    	<Route exact path ='/'component={BuyerAdvert}/>
		<Route exact path ='/login'component={Login}/>
    	<Route exact path='/register' component={Register} />
    	<Route path='/register/buyer' component={BuyerRegister} />
    	<Route path='/register/seller' component={SellerRegister} />
		<Route exact path='/buyerdashboard' component={BuyerDashboard} />
		<Route exact path='/buyerdashboard/history' component={BuyerHistory} />
		<Route exact path='/sellermiddashboard' component={SellerMidDash} />
		<Route exact path='/sellerdashboard/postproduct' component={SellerDashboard} />
		<Route exact path='/search/:name' component={Search} />
		<Route exact path='/buyerdashboard/cart' component={Cart} />
		<Route exact path='/buyerdashboard/checkout' component={Checkout} />
		<Route path='/admindash' component={AdminDash} />
		<Route path='/approveprod' component={ApproveProd} />
		<Route path='/trendseller' component={TrendSeller} />
		<Route path='/trenddash' component={TrendDash} />
		<Route path='/trenddateseller' component={DateSeller} />
		<Route path='/subsplan' component={SubsPlan} />
		<Route path='/approveadvert' component={ApproveAdvert} />
		<Route path='/viewdatetrends' component={ViewDateTrend} />
		<Route path='/trendspecificseller' component={TrendSpecificSeller} />
		<Route path='/viewsingletrend' component={ViewSingleTrend} />
		<Route path='/subsplan' component={SubsPlan} />
		<Route path='/approveadvert' component={ApproveAdvert} />
		<Route exact path='/sellerdashboard/requestadvertisement' component={SellerReq} />
		<Route exact path='/adverts' component={BuyerAdvert} />
		<Route exact path='/sellerdashboard/discount' component={Discount} />
		<Route exact path='/sellerdashboard/dispatch' component={Dispatch} />
		<Route exact path='/buyerdashboard/review' component={Review} />
		<Route exact path='/category/:name' component={Category} />
		<Route path='/secQues' component={SecQues} />
		<Route path='/enterAnswer' component={EnterAnswer} />
		<Route path='/resetPassword' component={ResetPassword} />
		
	  
     </Switch>
	  </UserContext.Provider>
    
	</>
  );
}

export default App;
//<Route exact path='/sellerdashboard/listproducts' component={Listing} />