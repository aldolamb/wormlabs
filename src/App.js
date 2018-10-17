import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from "./header";
import { TableView } from "./tableView";
import { NewStrain } from "./newStrain";

export class App extends Component {
    render() {
        return (
            <div className="main">
                <Header/>

                <Router>
                    <Switch>
                        <Route path='/newStrain'    component={NewStrain} />
                        <Route path='/'             component={TableView} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
