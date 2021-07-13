import { combineReducers } from 'redux';

import auth from './authReducer';
import userType from './userTypeReducer';
import alert from './alertReducer';
import theme from './themeReducer';
import profile from './profileReducer';
import status from './statusReducer';
import homePosts from './postReducer';
import modal from './modalReducer';
import detailPost from "./detailPostReducer";
import admin from "./adminReducer";
import discover from "./discoverReducer";
import suggestions from "./suggestionsReducer";
import socket from "./socketReducer";
import notify from "./notifyReducer";
import message from "./messageReducer";

export default combineReducers({
  auth,
  alert,
  theme,
  profile,
  status,
  homePosts,
  modal,
  detailPost,
  userType,
  admin,
  discover,
  suggestions,
  socket,
  notify,
  message,
});