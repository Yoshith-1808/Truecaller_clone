import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CallerID from './components/CallerID';
import CallLog from './components/CallLog';
import Contacts from './components/Contacts';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={CallerID} />
                    <Route path="/call-log" component={CallLog} />
                    <Route path="/contacts" component={Contacts} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;