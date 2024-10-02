import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = ({parentStyle, styles}) => {
  return (
    <View
      style={[
        {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        parentStyle ? parentStyle : null,
      ]}>
      <View
        style={[
          {
            width: 80,
            height: 80,
            backgroundColor: 'rgba(255,255,255,1)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            overflow: 'hidden',
          },
          styles ? styles : null,
        ]}>
        <ActivityIndicator size="large" color={'grey'} />
      </View>
    </View>
  );
};

export default Loader;
