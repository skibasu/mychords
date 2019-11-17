import React from "react";
import Auth from "./views/Auth/Auth";
import Home from "./views/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route path="/Home" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
