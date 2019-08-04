// URL: /about
import { Route } from 'react-router-dom';

<Route path="/about" component={About} />
<Route path="/:user" component={User} />
<Route component={NoMatch} />
