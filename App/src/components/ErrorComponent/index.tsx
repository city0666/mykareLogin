import React from 'react';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import { COLORS, FONTS, SIZES } from '@app/constants';

type IndexProps = {
  message: string,
  errormsg?: StyleProp<ViewStyle>,
};

const Index: React.FC<IndexProps> = ({ message, errormsg }) => {
  return (
    <View style={[{ marginTop: 2 }, errormsg]}>
      <Text style={styles.errorMessageStyle}>{message}</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  errorMessageStyle: {
    ...FONTS.regular,
    color: 'red',
    fontSize: 12,
    // backgroundColor: '#fff',
  },
});
