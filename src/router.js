import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Expire from './components/expire';
import Notyetdue from './components/notyetdue';
import Demo from './components/demo';



function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/expire" component={Expire} />
        <Route path="/noexpire" component={Notyetdue} />
        <Route path="/demo" component={Demo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
