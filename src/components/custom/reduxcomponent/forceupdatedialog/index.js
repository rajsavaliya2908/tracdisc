import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Modal,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  Linking,
} from 'react-native';
import StyleConfig from '../../../../assets/StyleConfig';
import CS from '../../../../utils/styles';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles'
import AppImages from '../../../../assets/pngs';

class ForceUpdateDialog extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <Modal
        transparent={false}
        animationType={'fade'}
        visible={this.props.checkUpdate}>
        <SafeAreaView
          forceInset={{ bottom: 'never', top: 'always' }}
          style={styles.safeAreaContainer}>
          <StatusBar barStyle="dark-content" />
          <Image style={styles.iLoaction} source={AppImages.ic_update} />
          <Text style={[CS.textBlackSemibold, styles.tUpdateDetail]}>
            Please update the app in order to use the latest features.
          </Text>
          <TouchableOpacity
            style={styles.toBack}
            onPress={() => {
              StyleConfig.isIphone
                ? Linking.openURL(
                  'itms-apps://itunes.apple.com/us/app/mosaic-family/id1491733814?ls=1',
                )
                : Linking.openURL('market://details?id=com.mosaic.family');
            }}>
            <Text style={[CS.textWhiteSemibold]}>Update</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  checkUpdate: state.forceupdate ? state.forceupdate : false,
});

export default connect(mapStateToProps)(ForceUpdateDialog);
