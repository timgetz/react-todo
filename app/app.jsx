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
        hashHistory.push('/');
    }
});


store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" >
            <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
            <IndexRoute components={Login} onEnter={redirectIfLoggedIn}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
