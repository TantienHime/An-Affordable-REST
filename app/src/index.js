import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './App';
import Search from './components/Search';
import Results from './components/Results';
import Details from './components/Details';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'
import './cover.css';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css'


ReactDOM.render(
  <Router history={browserHistory}> 
      <Route path="/" component={App}> 
        <IndexRoute component={Search} />
        <Route path="results" component={Results} /> 
        <Route path="details/:id" component={Details} />        
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />  
      </Route>
    </Router>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();