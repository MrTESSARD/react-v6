import logo from './logo.svg';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import React from "react"
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';//react-router-dom@5

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       underConst:{
        Docs:false,
        Tutorials:true,
        Community: false
       }
    }
  }
  render(){
  return (
    <BrowserRouter>
    {/* react-router-dom@5 */}
 <Menu/>
 <Switch>
 <Route exact path="/" component={Docs}/>  
 {/* exact pour respecter exactement le slash  *uniquement  */}
 <Route path="/tutorials" component={Tutorials}/>     
 {/* <Route path="/tutorials" render={()=>(
  this.state.underConst.Tutorials ? (<Redirect to="/"/>): (<Tutorials/>)
 )}/>      */}
 <Route strict path="/community" component={Community}/>     
 <Route  path="/users/:profileId" component={Profile}/>     
 {/* strict pour respecter les dux slash  */}
 <Route  component={ErrorPage}/>     
 </Switch>

    
     </BrowserRouter> 
  );
}
}

export default App;
