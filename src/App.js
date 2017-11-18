import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KitchenSink from './PageKitchenSink';
import Home from './PageHome';
import PageNav from './PageNav';

const Page404 = () => (
  <h2>404, yo!</h2>
);

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={KitchenSink} />
      {/* <Route path="/kitchen-sink" render={() => <h2>sink</h2>} /> */}
      <Route path="/home" component={Home} />
      <Route path="/nav" component={PageNav} />
    </div>
  </Router>
);

export default App;
