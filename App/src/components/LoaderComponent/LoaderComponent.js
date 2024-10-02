import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const LoaderComponent = ({color = '#fff'}) => {
  return (
    <View style={{marginRight: 5}}>
      <ActivityIndicator size="small" color={color} />
    </View>
  );
};

export default LoaderComponent;

const styles = StyleSheet.create({});
