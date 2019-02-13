/* @flow */
/*eslint-disable prefer-const */

import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchData } from "../actions";

import {
  Text,
  View
} from 'react-native';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </View>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  message: PropTypes.string,
  isFetching: PropTypes.bool
};

App.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  message: ""
};

export default connect((state) => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
