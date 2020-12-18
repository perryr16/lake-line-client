import './App.css';
import React, {Component} from 'react';
import SnowMain from "./components/Snow/SnowMain";
import NewsMain from "./components/News/NewsMain";
import Forecast from "./components/Forecast/Forecast";
import Trails from "./components/Trails/Trails";
import TrailByID from "./components/Trails/TrailByID";
import AddTrails from "./components/AddTrails/AddTrails";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navigation/>
            <Switch>
              <Route path='/forecast' component={Forecast}/>
              <Route path='/trails' component={Trails}/>
              <Route path='/addTrails' component={AddTrails}/>
              <Route path='/' component={Home}/>
              <Route path='/trailById/:id' component={TrailByID}/>
              <Route path='/news' component={NewsMain}/>
              <Route path='/snow' component={SnowMain}/>
              <Route component={Error} />
            </Switch>
        </div>
      </BrowserRouter>
    )
   }
}

export default App;
