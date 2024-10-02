import React, { ReactNode } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { COLORS, SIZES } from '@app/constants';
type MainLayoutWrapperProps = {
  backArrow?: boolean;
  containerStyle?: object;
  children: ReactNode;
};

const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({
  ...props
}) => {

  const colorScheme = useColorScheme();
  const background = colorScheme === 'light' ? COLORS.white : COLORS.secondary;

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View
        style={[
          {
            ...styles.headerWrap,
            ...props.containerStyle,
            backgroundColor: background,
          },
        ]}>

        <View style={styles.topBorderStyle} />
      </View>
      {props.children}
    </View>
  );
};

export default MainLayoutWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrap: {
    height: SIZES.height / 6,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 20,
    backgroundColor: 'gray'
  },
  infoIconWrap: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  topBorderStyle: {
    backgroundColor: 'red',
  },
});
