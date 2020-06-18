import React from 'react';
import {HashRouter, Redirect, Switch, Route} from "react-router-dom";
import Layouts from 'src/layouts';

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Switch>
            <Route path={"/"} component={Layouts}/>
            <Redirect from={"/*"} to={"/"}/>
          </Switch>
        </div>
    </HashRouter>
  );
}

export default App;
