import logo from './logo.svg';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';//react-router-dom@5

import './App.css';

function App() {
  return (
    <BrowserRouter>
    {/* react-router-dom@5 */}
 <Menu/>
 <Switch>
 <Route exact path="/" component={Docs}/>  
 {/* exact pour respecter exactement le slash  *uniquement  */}
 <Route path="/tutorials" component={Tutorials}/>     
 <Route  path="/community" component={Community}/>     
 {/* strict pour respecter les dux slash  */}
 <Route  component={ErrorPage}/>     
 </Switch>

    
     </BrowserRouter> 
  );
}

export default App;
