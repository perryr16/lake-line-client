import './App.css';
import React, {Component} from 'react';
import Forecast from "./components/Forecast/Forecast";
import Trails from "./components/Trails/Trails";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Navigation/>
          <Switch>
            <Route path='/forecast' component={Forecast}/>
            <Route path='/trails' component={Trails}/>
          </Switch>
          </header>
        </div>
      </BrowserRouter>
    )
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1>Lake Line</h1>
  //         <main>
  //           <Forecast />
  //           <Trails />
  //         </main>
  //         <footer>
  //           Page created by Ross Perry
  //         </footer>
  //       </header>
  //     </div>
  //   );
   }
}

export default App;
