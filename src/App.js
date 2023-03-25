
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Charts } from './charts';
import { Component } from './component';
import { DashBoard } from './dashboard';
import { BaseApp } from './list/base';
import { SideBar } from './list/sidebar';
import { Pages } from './pages';
import { Tables } from './tables';
import { Utilities } from './utilities';


function App() {


  return (
    <div className="App">
      
      <Switch>
      
      <Route exact path='/'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <DashBoard />
      </div>
      </Route>

      <Route exact path='/dashboard'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <DashBoard />
      </div>
      </Route>

      <Route path='/component'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <Component />
      </div>
      </Route>

      <Route path='/utilities'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <Utilities />
      </div>
      </Route>

      <Route path='/pages'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <Pages />
      </div>
      </Route>

      <Route path='/tables'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <Tables />
      </div>
      </Route>

      <Route path='/charts'>
      <BaseApp />
      <div className='sidebarandcontent'>
      <SideBar />
      <Charts />
      </div>
      </Route>

     

      
      </Switch>
    </div>
  );
}

export default App;
