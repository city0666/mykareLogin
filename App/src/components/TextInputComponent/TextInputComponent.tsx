import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TextInputProps,
} from 'react-native';
import { COLORS, FONTS, SIZES, } from '@app/constants/themes';
import { styles } from './styles';
// import ExpandIcon from '@app/assets/icons/general/expandDownArrow.svg';
import useThemeColors from '@app/utils/useThemeColors';

type TextInputComponentProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDropIcon?: boolean;
  placeHolderColor?: string;
  containersty?: Object;
  upperLabel?: string;
  upperLabelStyle?: object;
  inputStyle?: object;
  errorMessage: any;
  // inputRef?: React.RefObject<TextInput>;
} & TextInputProps;

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  leftIcon = false,
  rightIcon = false,
  isDropIcon = false,
  errorMessage,
  placeHolderColor = COLORS.white,
  upperLabel,
  // inputRef,
  containersty,
  ...props
}) => {
  // const colors = useThemeColors();

  return (
    <View>
      {upperLabel && (
        <Text style={{ ...styles.upperLabelStyle, ...props.upperLabelStyle }}>
          {upperLabel}
        </Text>
      )}
      <View style={{ marginBottom: SIZES.baseX5 }}>
        <View
          style={{
            ...styles.container,
            ...containersty,
            // backgroundColor: colors.background,
          }}>
          {leftIcon && leftIcon}
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={placeHolderColor}
            style={[styles.inputStyle, props.inputStyle]}
            {...props}
            selectionColor="black"
            autoCapitalize="none"
            ref={props.inputRef}
          />
          {isDropIcon && !rightIcon && (
            <Pressable onPress={() => console.log('pressed')}>
              {/* <ExpandIcon /> */}
              <Text>ss</Text>
            </Pressable>
          )}
        </View>
        {errorMessage && errorMessage}
      </View>
    </View>
  );
};

export default TextInputComponent;
