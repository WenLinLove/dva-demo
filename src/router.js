import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Expire from './components/expire';
import Notyetdue from './components/notyetdue';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/expire" exact component={Expire} />
        <Route path="/noexpire" exact component={Notyetdue} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
