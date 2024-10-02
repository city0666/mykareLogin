
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator, InnerNavigator } from './AuthControll';
import { getData, STORAGE_KEY_Token } from '@app/utils/asyncData';
import { useRecoilState } from 'recoil';
import { logintoken } from '@app/recoils/AuthRecoil';
import SignUp from '@app/screen/Auth/SignUp';
import Login from '@app/screen/Auth/Login';

type Props = {};

const AllController = (props: Props) => {

    const [loding, setloding] = useState(true);
    const [token, setToken] = useRecoilState(logintoken);

    useEffect(() => {
        setTimeout(async () => {
            setloding(false);
        }, 500);


    }, []);

    // const Tokenchek = async () => {
    //     const storedUsers = await getData(STORAGE_KEY_Token);
    //     setToken(storedUsers);
    // }
    // const [bulding, setBulding] = useRecoilState(logintoken);

    if (loding) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>loding...</Text>
            </View>
        )


    }

    return (
        <NavigationContainer>
            {!token && <RootNavigator />}
            {token && <InnerNavigator />}
        </NavigationContainer>
    );
};

export default AllController;
