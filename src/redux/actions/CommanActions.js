import {
  SHOW_LOADER,
  FORCEUPDATE_SET,
  MAINTENANCE_SET,
} from '../types';

export const updateMaintenance = (value) => {
  return async (dispatch) => {
    dispatch({
      type: MAINTENANCE_SET,
      payload: value,
    });
  };
};

export const updateLoader = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SHOW_LOADER,
      payload: value,
    });
  };
};

export const updateForceUpdateFlag = (value) => {
  return async (dispatch) => {
    dispatch({
      type: FORCEUPDATE_SET,
      payload: value,
    });
  };
};

