// URL: /about
import { Route, Switch } from 'react-router-dom';

<Switch>
  <Route path="/about" component={About} />
  <Route path="/:user" component={User} />
  <Route
    path="/"
    component={Home}
  />
  <Route component={NoMatch} />
</Switch>
