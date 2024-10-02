import React, { useState, useRef } from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWrapper';
import {
    View,
    Text,
    useColorScheme,
    Pressable, Keyboard,
    Alert

} from 'react-native';
import { COLORS, SIZES, FONTS } from '@app/constants/themes';
import KeyboardAwareScrollView from '@app/components/KeyboardAvoidWrapper';
import TextInputComponent from '@app/components/TextInputComponent/TextInputComponent';
import RectangleButton from '@app/components/ButtonComponents/RecrangleButton';
import useThemeColors from '@app/utils/useThemeColors';
import { styles } from './styles'


import { useFormik } from 'formik';
import * as yup from 'yup';
import LoaderComponent from '@app/components/LoaderComponent/LoaderComponent';

import Navigations from '@app/utils/typeNav';
import { useAppNavigation } from '@app/utils/useAppNavigation';
import { getData, storeData, STORAGE_KEY_B, STORAGE_KEY_Token } from '@app/utils/asyncData';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import { useRecoilState } from 'recoil';
import { logintoken } from '@app/recoils/AuthRecoil';
import ErrorComponent from '@app/components/ErrorComponent';
const Login = () => {
    const colorScheme = useColorScheme();
    const [loading, setloading] = useState(false);
    const navigation = useAppNavigation();
    const [token, setToken] = useRecoilState(logintoken);

    // const [bulding, setBulding] = useRecoilState(buildinglist);


    const status = colorScheme === 'light' ? COLORS.white : COLORS.secondary;
    const border: any = colorScheme === 'light' ? COLORS.gray2 : COLORS.white;
    const inputsty = colorScheme === 'light' ? COLORS.black : COLORS.white;
    const emailRef = useRef<TextInputProps>(null);
    const passRef = useRef<TextInputProps>(null);



    const validationSchema = yup.object({
        email: yup
            .string()
            .email('The email is invalid.')
            .required('The email field is required.'),
        password: yup
            .string()
            .required('The password field is required.')
            .min(5, 'Password too short'),

    });

    const formik = useFormik({
        initialValues: {

            email: '',

            password: '',

        },
        validationSchema,
        onSubmit: values => {
            Keyboard.dismiss();

            console.log('test', values)
            fetchData(values);
        },
    });




    const fetchData = async (data: any) => {
        setloading(true);
        try {


            const storedUsers = await getData(STORAGE_KEY_B);
            let users = [];
            if (storedUsers) {
                users = storedUsers;
                if (!Array.isArray(users)) {
                    users = []; // Fallback to empty array if stored data is invalid
                }
            }
            console.log('sfw', users);


            const user = users.find(user => user.email === data.email && user.password === data.password);
            if (user) {
                // Alert.alert('Login Successfully');
                console.log('datat', user);
                setTimeout(() => {
                    //  users.push(data);
                    const tokenva: any = user.first_name;
                    // storeData(STORAGE_KEY_B, users);
                    storeData(STORAGE_KEY_Token, user);
                    setToken(tokenva);

                    setloading(false);
                }, 500)
            } else {
                Alert.alert('Error', 'Invalid credentials');
                setloading(false);

            }



        }
        catch (error) {
            setloading(false);
            console.error('Error during registration:', error);

        }
        // storeData(STORAGE_KEY_B, data);


    }

    const renderLoginView = () => {
        // function gotoRegScreen(): void {
        //   throw new Error('Function not implemented.');
        // }

        return (
            <View style={styles.signUpContainer}>
                <View style={styles.bottomWrap}>
                    <Text style={styles.header}>Sign in</Text>
                </View>
                <TextInputComponent
                    name="Email"
                    placeholder="Email"
                    // leftIcon={<MailIcon />}
                    inputStyle={{ color: inputsty, height: 50 }}
                    placeHolderColor={border}
                    containersty={{
                        backgroundColor: status,

                        borderColor: formik.errors.email ? COLORS.red : border,
                    }}
                    // leftIcon={
                    //     <Atthdate height={18} width={18} fill={'#A1A5B7'} />

                    // }
                    inputRef={emailRef}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    keyboardType="email-address"
                    // onSubmitEditing={() => {}}
                    onSubmitEditing={() => passRef.current.focus()}
                    returnKeyType={'next'}
                    errorMessage={
                        formik.errors.email &&
                        formik.touched.email && (
                            <ErrorComponent message={formik.errors.email} />
                        )
                    }
                />
                <TextInputComponent
                    name="Password"
                    placeholder="Password"
                    // leftIcon={<LockIcon />}
                    leftIcon={
                        <View style={styles.iconbg}>
                            {/* <Lock1 height={18} width={18} fill={'#A1A5B7'} /> */}
                        </View>
                    }
                    inputRef={passRef}
                    placeHolderColor={border}
                    inputStyle={{ color: inputsty, height: 50 }}
                    containersty={{
                        backgroundColor: status,
                        // borderColor: border
                        borderColor: formik.errors.password ? COLORS.red : border,
                    }}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    onSubmitEditing={() => formik.handleSubmit}
                    // keyboardType="phone-pad"
                    // keyboardType="number-pad"
                    returnKeyType={'go'}
                    secureTextEntry={true}
                    errorMessage={
                        formik.errors.password &&
                        formik.touched.password && (
                            <ErrorComponent message={formik.errors.password} />
                        )
                    }
                />
                <RectangleButton
                    label="Sign In"
                    // onPress={() => showToast()}
                    onPress={formik.handleSubmit}
                    //  buttonStyle={{borderRadius: 6, height: 50, marginHorizontal: 0}}
                    // textStyle={{}}
                    component={<LoaderComponent />}
                    icon={loading}
                    disabled={loading}
                />
                <View style={styles.forgotWrap}>
                    <Pressable
                        onPress={() =>
                            navigation.navigate(Navigations.authbording, {
                                screen: Navigations.offers,
                            })
                        }>
                        <Text style={styles.forgotText}>  </Text>
                    </Pressable>
                </View>
                <View style={styles.bottomWrap}>
                    <Text style={[styles.fingerPrintText, { color: border }]}>
                        Don’t have an Account?
                    </Text>
                    <Pressable
                        onPress={() =>
                            navigation.navigate(Navigations.authbording, {
                                screen: Navigations.signup,
                            })
                        }>
                        <Text style={styles.signup}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaWrapper
            backgroundColor={'#fff'}
            statusbar={'#fff'}
            insetsTop={true}
            containerStyle={{ paddingHorizontal: 0 }}
            insetsBottom={false}

        >
            <MainLayoutWrapper backArrow={false}>
                <KeyboardAwareScrollView>
                    {renderLoginView()}
                </KeyboardAwareScrollView>
            </MainLayoutWrapper>
        </SafeAreaWrapper>


    )
};


export default Login;
