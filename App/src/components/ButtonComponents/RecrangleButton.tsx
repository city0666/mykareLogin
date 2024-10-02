import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, PressableProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { COLORS, FONTS, SIZES } from '@app/constants/themes';

type RectangleButtonProps = {
  label: string;
  onPress: () => void;
  txtStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  isDisable?: boolean;
  icon?: boolean;
  component?: ReactNode;
} & PressableProps;

const RectangleButton: React.FC<RectangleButtonProps> = ({
  label,
  onPress,
  txtStyle,
  btnStyle,
  isDisable = false,
  icon = false,
  component,
  ...props
}) => {
  return (
    <Pressable
      style={{ ...styles.buttonContainer, ...btnStyle }}
      disabled={isDisable}
      onPress={onPress}
      {...props}>
      {icon ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {component}
          <Text style={{ ...styles.buttonLabel, ...txtStyle }}>{label}</Text>
        </View>
      ) : (
        <Text style={{ ...styles.buttonLabel, ...txtStyle }}>{label}</Text>
      )}
    </Pressable>
  );
};

export default RectangleButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: COLORS.blue1,

    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.baseX3,
    marginHorizontal: 5,
  },
  buttonLabel: {
    ...FONTS.bold,
    fontSize: 16,
    lineHeight: 17,
    color: COLORS.white,
  },
});
