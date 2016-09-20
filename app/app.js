import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Home from './components/templates/Home/Home';
import Main from './components/templates/Main/Main';
import About from './components/templates/About/About';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Note: This is using a basic react-router setup
        return (
          <Router history={browserHistory}>
            <Route path="/" component={Main}>
              <IndexRoute component={Home} />
              <Route path="/about" component={About}/>
            </Route>
          </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
