import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import color from '../../../../utils/color';
import styles from './styles'

class Loader extends Component {
  render() {
    if (!this.props.loader) return null;
    return (
      <View style={[styles.vContainer, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
        <StatusBar backgroundColor={'rgba(0,0,0,0.3)'} />
        <ActivityIndicator color={color.primarycolor} size="large" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: state.CommonReducer.isLoading,
});

export default connect(mapStateToProps)(Loader);


