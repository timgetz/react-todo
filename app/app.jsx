var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
    console.log('AuthStateChanged', user);
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistroy.push('/');
    }
});


store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp}/>
            <IndexRoute components={Login}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
