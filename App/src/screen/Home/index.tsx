import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { logintoken } from '@app/recoils/AuthRecoil';
import SafeAreaWrapper from '@app/components/SafeAreaWrapper';
import { getData, STORAGE_KEY_Token } from '@app/utils/asyncData';
import { COLORS, FONTS, SIZES, width } from '@app/constants/themes';
import { styles } from './styles';
import RectangleButton from '@app/components/ButtonComponents/RecrangleButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {}

const Home = (props: Props) => {
    const [token, setToken] = useRecoilState(logintoken);
    const [data, setData] = useState({});
    const [verify, setverify] = useState(false);
    const handlingUser = async () => {
        const storedUsers = await getData(STORAGE_KEY_Token);
        console.log(storedUsers);
        setData(storedUsers);
        setverify(!verify);


    }
    const logOut = () => {
        setToken('');
    }

    const hederBox = () => {
        return (
            <View style={styles.header}>

                <Text style={styles.title}>Welcome </Text>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: '#fff', marginVertical: SIZES.base }}>


                    </View>
                    <Text style={styles.title}>{token} </Text>

                </View>
                <TouchableOpacity style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10
                }}
                    onPress={() => { handlingUser() }}
                >
                    <Text style={[styles.title, { fontSize: 15, color: COLORS.white }]}> User Details </Text>

                </TouchableOpacity>

            </View>
        )
    }


    const userBox = () => {
        const password = data?.password;
        const update = `${password[0]}****${password[4] + password[5]}`
        return (
            <View style={styles.userbox}>

                <TextStyle Header={"Name    "} Value={data?.first_name} />

                <TextStyle Header={"Email    "} Value={data?.email} />
                <TextStyle Header={"Password "} Value={update} />

            </View >
        )
    }

    const TextStyle = ({ Header, Value }) => {
        return (
            <View style={{
                flexDirection: 'row', gap: 5, marginHorizontal: 5,
                marginBottom: 5
            }}>
                <Text style={{ fontSize: 16, color: COLORS.gray5 }}>
                    {Header}
                </Text>
                <Text style={{ fontSize: 16, color: COLORS.gray2 }}>-</Text>
                <Text style={{ fontSize: 16, color: COLORS.grayDark }}>
                    {Value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaWrapper
            backgroundColor={COLORS.blue1}
            statusbar={COLORS.blue1}
            insetsTop={true}
            containerStyle={{ paddingHorizontal: 0 }}
            insetsBottom={false}

        >
            <View style={styles.container}>

                {hederBox()}
                {verify && userBox()}
                {/* <Text onPress={() => {
                    setToken('');
                }}>{token}Home</Text>

                <Text onPress={() => {
                    handlingUser();
                }}>data</Text> */}

                <RectangleButton
                    label="LogOut"
                    onPress={() => { logOut() }}

                    btnStyle={{
                        marginHorizontal: 50,
                        backgroundColor: 'white',
                        borderColor: COLORS.blue1,
                        borderWidth: 1

                    }}
                    txtStyle={{
                        color: COLORS.blue1,
                        ...FONTS.regular
                    }}
                />
            </View>
        </SafeAreaWrapper>
    )
}

export default Home;

