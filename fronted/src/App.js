import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import GovernancePage from './pages/GovernancePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/marketplace" component={MarketplacePage} />
                <Route path="/governance" component={GovernancePage} />
            </Switch>
        </Router>
    );
}

export default App;
