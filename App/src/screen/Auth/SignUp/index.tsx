import React, { useState } from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWrapper';
import {
    View,
    Text,
    useColorScheme,
    Pressable, Keyboard,
    Alert

} from 'react-native';
import { COLORS, SIZES } from '@app/constants/themes';
import KeyboardAwareScrollView from '@app/components/KeyboardAvoidWrapper';
import TextInputComponent from '@app/components/TextInputComponent/TextInputComponent';
import RectangleButton from '@app/components/ButtonComponents/RecrangleButton';
import { styles } from './styles';


import { useFormik } from 'formik';
import * as yup from 'yup';
import LoaderComponent from '@app/components/LoaderComponent/LoaderComponent';
import ErrorComponent from '@app/components/ErrorComponent';

import Navigations from '@app/utils/typeNav';
import { useAppNavigation } from '@app/utils/useAppNavigation';
import { getData, storeData, STORAGE_KEY_B, STORAGE_KEY_Token } from '@app/utils/asyncData';


import useThemeColors from '@app/utils/useThemeColors';
import { useRecoilState } from 'recoil';
import { logintoken } from '@app/recoils/AuthRecoil';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
const SignUp = () => {
    const colorScheme = useColorScheme();
    const [loading, setloading] = useState(false);
    const navigation = useAppNavigation();
    const colors = useThemeColors();

    const border = colorScheme === 'light' ? COLORS.gray5 : COLORS.white;
    const status = colorScheme === 'light' ? COLORS.white : COLORS.secondary;
    const inputsty = colorScheme === 'light' ? COLORS.black : COLORS.white;
    const [token, setToken] = useRecoilState(logintoken);




    const validationSchema = yup.object({
        first_name: yup
            .string()
            .required('Please enter your first name.')
            .matches(
                /^[a-z A-Z]+$/,
                'First name may only contain letters and spaces',
            ),
        email: yup
            .string()
            .email('The email is invalid.')
            .required('The email field is required.'),
        password: yup
            .string()
            .required('The password field is required.')
            .min(5, 'Password too short'),
        password_confirmation: yup
            .string()
            .oneOf([yup.ref('password')], 'The password does not match.')
            .min(5, 'Password too short')
            .required('The password field is required.'),

    });

    const formik = useFormik({
        initialValues: {


            first_name: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        validationSchema,
        onSubmit: values => {
            Keyboard.dismiss();

            // console.log('test', values)
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



            if (users.some(user => user.email === data.email)) {
                setloading(false);
                Alert.alert('Error', 'User already exists!');
                return;
            }
            setTimeout(() => {
                users.push(data);
                const tokenva: any = data.first_name;

                storeData(STORAGE_KEY_B, users);
                storeData(STORAGE_KEY_Token, data);
                setToken(tokenva);

                setloading(false);
            }, 500)


        }
        catch (error) {
            setloading(false);
            console.error('Error during registration:', error);

        }
        // storeData(STORAGE_KEY_B, data);


    }


    const renderLoginView = () => {
        return (
            <View style={styles.signUpContainer}>
                <View style={[styles.footer, { marginVertical: SIZES.base }]}>
                    <Text style={styles.header}>Sign up</Text>
                </View>
                <TextInputComponent
                    name="FullName"
                    placeholder="Full Name"
                    inputStyle={{ color: inputsty, height: 50 }}
                    placeHolderColor={border}
                    container={{ backgroundColor: status, borderColor: COLORS.blue1 }}

                    value={formik.values.first_name}
                    onChangeText={formik.handleChange('first_name')}
                    onBlur={formik.handleBlur('first_name')}
                    // onSubmitEditing={() => {}}
                    errorMessage={
                        formik.errors.first_name &&
                        formik.touched.first_name && (
                            <ErrorComponent message={formik.errors.first_name} />
                        )
                    }
                />
                <TextInputComponent
                    name="Email"
                    placeholder="Email"
                    inputStyle={{ color: inputsty, height: 50 }}
                    placeHolderColor={border}
                    container={{
                        backgroundColor: status,

                        borderColor: border,
                    }}


                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    keyboardType="email-address"
                    // onSubmitEditing={() => {}}
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
                    inputStyle={{ color: inputsty, height: 50 }}
                    placeHolderColor={border}
                    container={{ backgroundColor: status, borderColor: border }}

                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    secureTextEntry={true}

                    //keyboardType=""
                    // onSubmitEditing={() => {}}
                    errorMessage={
                        formik.errors.password &&
                        formik.touched.password && (
                            <ErrorComponent message={formik.errors.password} />
                        )
                    }



                />
                <TextInputComponent
                    name="ConfirmPassword"
                    placeholder="Confirm Password"
                    inputStyle={{ color: inputsty, height: 50 }}
                    placeHolderColor={border}
                    container={{ backgroundColor: status, borderColor: border }}

                    value={formik.values.password_confirmation}
                    onChangeText={formik.handleChange('password_confirmation')}
                    onBlur={formik.handleBlur('password_confirmation')}
                    secureTextEntry={true}

                    //keyboardType=""
                    // onSubmitEditing={() => {}}
                    errorMessage={
                        formik.errors.password_confirmation &&
                        formik.touched.password_confirmation && (
                            <ErrorComponent message={formik.errors.password_confirmation} />
                        )
                    }

                />

                <RectangleButton
                    label="SIGNUP"
                    onPress={formik.handleSubmit}
                    component={<LoaderComponent />}
                    icon={loading}
                    disabled={loading}
                    //  buttonStyle={{borderRadius: 6, height: 50, marginHorizontal: 0}}
                    textStyle={{}}
                />
                <View style={styles.footer}>
                    <Text style={[styles.fingerPrintText, { color: border }]}>
                        Do you have an Account?
                    </Text>
                    <Pressable
                        // onPress={() => Alert.alert('Hello')}
                        onPress={() => navigation.navigate(Navigations.login)}>
                        <Text style={[styles.fingerPrintText, { color: COLORS.primary }]}>
                            Sign in
                        </Text>
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


export default SignUp;
