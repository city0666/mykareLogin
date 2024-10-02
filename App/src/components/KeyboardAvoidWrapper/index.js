import React from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const index = props => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
      {...props}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default index;
