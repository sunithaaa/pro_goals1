import React from 'react';
import EmployeePage from './components/EmployeePage';
import { HashRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import AdminPage from './components/AdminPage';
class App extends  React.Component{
  render(){
  return (
    <div>
      
      <HashRouter>
        
        <Switch>
          <Route exact path={'/'} component={Home}></Route>
          <Route exact path={'/Admin'} component={AdminPage}></Route>
          <Route exact path={'/Employee'} component={EmployeePage}></Route>
        </Switch>
        
      </HashRouter>





   </div>
  );
}
}
export default App;