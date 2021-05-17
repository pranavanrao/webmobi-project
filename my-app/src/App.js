import './App.css';
import Head from './components/head/head'
import SideRight from './components/sidebar/side-right'
import Nav from './components/navbar/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Live from './pages/live.js';
import Audience from './pages/audience.js';
import Ideas from './pages/ideas.js';
import Analytics from './pages/analytics.js'

function App() {
  return (
    <div className="App">
      <SideRight />
      <Head />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Live} />
          <Route path='/AudienceQnA' exact component={Audience} />
          <Route path='/Ideas' exact component={Ideas} />
          <Route path='/Analytics' exact component={Analytics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
