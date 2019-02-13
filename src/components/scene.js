/* @flow */
/*eslint-disable prefer-const */

import React, {
  Component
} from 'react';
import App from "../containers/app";

import {
    View,
    Text,
} from 'react-native';

export default class Scene extends Component {
  
  render() {
    return (
      <App/>

      /* <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          title: "Starter App"
        }}
      /> */
    );
  }
}