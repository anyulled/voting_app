import React from "react";
import ReactDOM from "react-dom";
import {hashHistory, Route, Router} from "react-router";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import io from "socket.io-client";
import App from "./components/App";
import {setState} from "./action_creators";
import remoteActionMiddleware from "./remote_action_middleware";
import {VotingContainer} from "./components/Voting";
import {ResultsContainer} from "./components/Results";
import reducer from "./reducer";

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on("state", state => store.dispatch(setState(state)));

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStoreWithMiddleware(reducer, enhancer);

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer}/>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById("app")
);