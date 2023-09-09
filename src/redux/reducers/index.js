import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
// import AuthReducer from './reducers/AuthReducer';

export default combineReducers({
  CommonReducer: CommonReducer,
  // authReducer: AuthReducer,
});
