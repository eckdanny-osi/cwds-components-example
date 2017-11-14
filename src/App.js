import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KitchenSink from './PageKitchenSink';
import Home from './PageHome';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={KitchenSink} />
      {/* <Route path="/kitchen-sink" render={() => <h2>sink</h2>} /> */}
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

export default App;