import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import appReducer from './reducers';
import App from './components/App/App';

// Get persistentState from localStorage
const persistedState = localStorage.getItem('WNW_reduxState')
  ? JSON.parse(localStorage.getItem('WNW_reduxState'))
  : {}

const store = createStore(
  appReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

// Store Redux state into localStorage
store.subscribe(() => {
  const storeState = store.getState();
  const storeStateToSaveInLocalStorage = {
    videos: storeState.videos,
    videosFilter: storeState.videosFilter,
    settings: storeState.settings
  }
  localStorage.setItem('WNW_reduxState', JSON.stringify(storeStateToSaveInLocalStorage))
})

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <App content={this.props.content} />
      </Provider>
    )
  }
}

function connectWithStore(store, WrappedComponent, ...args) {
  let ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
}

function mapStateToProps(state) {
  return {
    // config: getConfig(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
  }
}

export default AppProvider = connectWithStore(
  store,
  AppProvider,
  mapStateToProps,
  mapDispatchToProps
)
