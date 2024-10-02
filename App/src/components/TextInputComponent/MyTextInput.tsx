import React, { useRef } from 'react';
import { View, Text, TextInput, Image, Pressable, TextInputComponent } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '@app/constants';
import { styles } from './styles';
import ExpandIcon from '@app/assets/icons/general/expandDownArrow.svg';

type Props = {
    placeHolderColor: String;
    upperLabel: String;
    insideLabel: String;
    leftIcon: boolean,
    rightIcon: Boolean;
    isDropIcon: Boolean;
    placeholder: String;
    outerContainer: React.CSSProperties,
    upperLabelStyle: React.CSSProperties,
    container: React.CSSProperties,
    inputStyle: React.CSSProperties,
    onTextChange: (String) => {},
    validError: string,
    value: any,
    isEditable: Boolean,
    errorStyle: React.CSSProperties,
    maxLength: number,
    keyboardtype: string,
    secureTextEntry: boolean

}


const MyTextInput = (props: Props) => {
    const { inputRef } = props;
    // console.log('formik error ==>',props.validError, props.value);
    return (
        <View style={{ ...styles.outerContainer, ...props.outerContainer }}>
            {props.upperLabel && (
                <Text
                    style={{
                        ...styles.upperLabelStyle,
                        ...props.upperLabelStyle,
                    }}>
                    {props.upperLabel}
                </Text>
            )}

            <View
                style={{
                    ...styles.container,
                    ...props.container,
                }}>
                {props.leftIcon && props.leftIcon}
                <View style={{ flex: 1 }}>
                    {/* {upperLabel && <Text style={styles.upperLabelStyle}>{upperLabel}</Text>} */}
                    {/* {leftIcon && leftIcon} */}

                    {props.insideLabel && (
                        <Text
                            style={{
                                ...styles.insideLabelStyle,
                                ...props.upperLabelStyle,
                            }}>
                            {props.insideLabel}
                        </Text>
                    )}
                    <TextInput
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        placeholder={props.placeholder}
                        placeholderTextColor={props.placeHolderColor}
                        style={{ ...styles.inputStyle, paddingHorizontal: 5, ...props.inputStyle }}
                        {...props}
                        selectionColor={COLORS.blue1}
                        ref={inputRef}
                        onChangeText={text => props.onTextChange(text)}
                        // defaultValue={props.value}
                        value={props.value}
                        editable={props.isEditable && true}
                        maxLength={props.maxLength}
                        keyboardType={props.keyboardtype}
                        secureTextEntry={props.secureTextEntry}
                    />

                </View>

                {props.rightIcon && props.rightIcon}
                {props.isDropIcon && !rightIcon && (
                    <Pressable onPress={() => console.log('pressed')}>
                        <ExpandIcon />
                    </Pressable>
                )}
            </View>
            {props.validError != '' &&
                <Text style={{
                    color: COLORS.red,
                    marginBottom: 10,
                    marginLeft: 10,
                    ...props.errorStyle
                }}>
                    {props.validError}

                </Text>}
        </View>
    );
};

export default MyTextInput;
