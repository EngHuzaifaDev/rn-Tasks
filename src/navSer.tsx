// services/navigationService.js
import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
export const navigationRef:any = React.createRef();

function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

function reset(routeName:any) {
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