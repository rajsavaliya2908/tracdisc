import React from 'react';
import { View } from 'react-native';
import StyleConfig from '../assets/StyleConfig';
import MaintanaceDialog from '../components/custom/reduxcomponent/maintaindialog';
import ForceUpdateDialog from '../components/custom/reduxcomponent/forceupdatedialog';
import Loader from '../components/custom/reduxcomponent/loader';

class MainContainer extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          right: 0,
          left: 0,
          width: StyleConfig.width,
          zIndex: 9999,
        }}>
        <Loader />
        <MaintanaceDialog />
        <ForceUpdateDialog />
      </View>
    );
  }
}

export default MainContainer;
