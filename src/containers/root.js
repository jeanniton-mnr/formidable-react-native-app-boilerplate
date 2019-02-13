/* @flow */

import React, {
  Component
} from 'react';
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import Scene from "../components/scene";
import {
  View,
  Text
} from 'react-native';

const store = configureStore();


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Scene/>
      </Provider>
    );
  }
}

export default Root;
