import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import styles from './styles'
import SafeAreaView from 'react-native-safe-area-view';
import AppImages from '../../../../assets/pngs';
import CS from '../../../../utils/styles';


class MaintanceDialog extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <Modal
        transparent={false}
        animationType={'none'}
        visible={this.props.checkMaintenance}>
        <SafeAreaView
          style={styles.safeAreaContainer}
          forceInset={{ bottom: 'never', top: 'always' }}>
          <StatusBar hidden />
          <Image style={styles.iLoaction} source={AppImages.ic_maintenance} />
          <Text style={[CS.textBlackSemibold, styles.tMaintananceDetail]}>
            We’re working on improving your experience. The app will be
            available soon.
          </Text>
          <TouchableOpacity style={styles.toBack}>
            <Text style={[CS.textWhiteSemibold]}>Exit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  checkMaintenance: state.maintenance ? state.maintenance : false,
});

export default connect(mapStateToProps)(MaintanceDialog);
