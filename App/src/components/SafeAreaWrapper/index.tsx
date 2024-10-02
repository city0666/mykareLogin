import React, { ReactNode } from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '@app/constants/themes';

type Props = {
  statusbar?: string;
  insetsBottom?: boolean;
  insetsTop?: boolean;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  containerStyle?: Record<string, any>;
  backgroundColor?: string;
  children: ReactNode;
};

const Index: React.FC<Props> = ({
  statusbar = COLORS.secondary,
  insetsBottom = true,
  insetsTop = true,
  barStyle = 'dark-content',
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const CustomStatusBar: React.FC<{
    backgroundColor: string;
    barStyle: 'default' | 'light-content' | 'dark-content';
    statusbar: string;
  }> = ({ backgroundColor, barStyle, statusbar }) => {

    // barStyle
    return (
      <View
        style={{
          paddingTop: insetsTop ? insets.top : 0,
          backgroundColor,
        }}>
        <StatusBar
          animated={true}
          backgroundColor={statusbar}
          barStyle={barStyle}
        />
      </View>
    );
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={statusbar}
        barStyle={barStyle}
        statusbar={statusbar}
      />

      <View
        style={{
          ...styles.container(props.backgroundColor, insets, insetsBottom),
          ...props.containerStyle,
        }}>
        {props.children}
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: (bg = COLORS.white, insets: { bottom: any }, insetsBottom: any) => ({
    flex: 1,
    backgroundColor: bg,
    paddingBottom: insetsBottom ? Platform.OS === 'ios' ? insets.bottom : 0 : 0,

    paddingHorizontal: SIZES.baseX4,
  }),
});
