// services/navigationService.js
import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function reset(routeName) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    })
  );
}

export default {
  navigate,
  reset,
  navigationRef,
};