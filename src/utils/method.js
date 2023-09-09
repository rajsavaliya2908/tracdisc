import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import moment from 'moment'
import Routes from '../router/routes';
import DeviceInfo from 'react-native-device-info';


const Method = {
  savePref: (key, value) => {
    AsyncStorage.setItem(key, JSON.stringify(value), (err) => { });
  },
  saveStringPref: (key, value) => {
    AsyncStorage.setItem(key, value, (err) => { });
  },

  removePref: (key) => {
    AsyncStorage.removeItem(key);
  },



  startWithReset: (navigation, screenName, index = 1) => {
    navigation.dispatch(
      CommonActions.reset({
        index: index,
        routes: [{ name: screenName }],
      }),
    );
  },

  logOut: async (navigation) => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: Routes.Splash }],
      }),
    );
    navigation.navigate(Routes.Splash);
  },

  getPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  getStringPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  },
  formatNotificationTime: (time) => moment(time).format('MMMM DD, YYYY | hh:mm a'),
  convertToDOMMYYYYHHSS: (time) => moment(time).format('Do MMMM YYYY      HH:ss A'),
  formatMMDDYYY: (time) => moment(time).format('MM/DD/YYYY'),
  formatDoMMMMYYYY: (time) => moment(time).format('Do MMMM YYYY    HH:mm A'),
  formatHHmmA: (time) => moment(time).format('HH:mm A'),
  randomItemFromArray: (arr) => arr[Math.floor(Math.random() * arr.length)],
  removeNonNumber: (string = "") => string.replace(/[^\d]/g, ""),
  getDeviceIdFromArray: (arr) => {
    var string = ''
    if (arr && arr.length) {
      for (let i = 0; i < arr.length; i++)
        if (i === 1) {
          string += (arr[i] + '-')
        }
        else {
          string += arr[i]
        }
    }
    return `"${string}"`
  },
  hasNotch: () => DeviceInfo.hasNotch()

};

export default Method;
