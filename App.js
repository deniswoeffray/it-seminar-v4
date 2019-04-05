import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import Loading from './components/Loading'
import Login from './components/Login'
import Main from './components/Main'
import SignUp from './components/SignUp'

import {createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator} from "react-navigation";

const SwitchNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        Login: Login,
        Main: Main,
        SignUp: SignUp,
    },
    {
        initialRouteName: 'Loading',
    }
);



const AppContainer = createAppContainer(SwitchNavigator);


 export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(rootReducer)}>
          <AppContainer />
        </Provider>
    );
  }
}

