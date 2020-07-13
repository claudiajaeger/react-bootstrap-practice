import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Work} from './Work';
import {Resume} from './Resume';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {Navigation} from './components/Navigation';
import {Jumbotron} from './components/Jumbotron';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Router>
        <Navigation />
        <Jumbotron />
          <Layout>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/about" component={About}/>
                <Route path="/resume" component={Resume}/>
                <Route component={NoMatch}/>
              </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
