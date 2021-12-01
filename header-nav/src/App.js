import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import Layout from './components/Layout';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageCTA from './pages/PageCTA';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/page-one'>
            <PageOne />
          </Route>
          <Route path='/page-two'>
            <PageTwo />
          </Route>
          <Route path='/page-three'>
            <PageThree />
          </Route>
          <Route path='/page-cta'>
            <PageCTA />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
