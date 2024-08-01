
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput, Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native";



const Login = ({ navigation }) => {

    const [floatAnim] = useState(new Animated.Value(0));
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnim, {
                    toValue: 20, // Float up
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(floatAnim, {
                    toValue: -20, // Float down
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                })
            ])
        ).start();
    }, [animationStarted])


    return (
        <>
            <Animated.View style={[styles.container, { transform: [{ translateY: floatAnim }] }]}>
                <Image style={styles.img1} source={require("../../assets/img/Login1/Rectangle1.png")}></Image>
                <Image style={styles.img1} source={require("../../assets/img/Login1/Rectangle2.png")}></Image>
                <Image style={styles.img2} source={require("../../assets/img/Login1/Rectangle3.png")}></Image>
                <Text style={styles.txt1}>Đăng Nhập</Text>
                <View style={styles.bck}>


                    <Text style={styles.email1}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email hoặc tên tài khoản"
                        keyboardType=""
                    />
                    <Text style={styles.email1}>Pasword</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        keyboardType=""
                    />
                    <Text style={styles.qmk}>Bạn quên mật khẩu?</Text>
                </View>
                <View style={{
                    flexDirection: 'row', top: 100,
                    left: -70,
                }}>
                    <Image style={styles.icon} source={require("../../assets/img/Login1/gg.jpg")}></Image>
                    <Image style={styles.icon1} source={require("../../assets/img/Login1/fb.jpg")}></Image>
                    <Image style={styles.icon2} source={require("../../assets/img/Login1/tao.jpg")}></Image>
                </View>

                <View>
                    <Text style={{
                        color: 'red',
                        top: 230,
                        right: 120,

                    }}
                        onPress={() => navigation.navigate('re')}>
                        Bạn chưa có tài khoản?
                    </Text>
                </View>
            </Animated.View>



            <View
                style={styles.button1}
            >
                <Button title="Đăng Nhập"
                    color="#2F80ED"
                    onPress={() => navigation.navigate("HomePage")} // Corrected the typo here
                />
            </View>


        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 435
    },
    img2: {
        position: "absolute",
        top: 648,
        left: 0,
        width: 435,
    },
    img3: {
        position: "absolute",
        top: 400,
        left: 50,

    },
    txt1: {

        top: 100,
        left: -95,
        fontSize: 45,
        fontWeight: 'bold',
        color: "#2F80ED"
    },
    button1: {
        position: "absolute",
        top: 720,
        left: 300,
        width: 120,

    },
    email1: {
        top: 80,
        right: 9,
        color: "#2F80ED"
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        top: 80,
        right: 19,
        borderRadius: 10
    },
    bck: {
        top: 40,
        left: 20
    },
    qmk: {
        top: 80,
        left: 180,
        color: "#2F80ED"
    },
    // icon: {
    //     top: 220,
    //     right: 130
    // },
    // icon1: {
    //     top: 195,
    //     right: 70
    // },
    // icon2: {
    //     top: 165,
    //     right: 20
    // },
    ho: {
        position: 'absolute',
        top: 400,

    },
    rgt: {

        color: "red",
        fontWeight: 'bold',





    }


});
export default Login;
