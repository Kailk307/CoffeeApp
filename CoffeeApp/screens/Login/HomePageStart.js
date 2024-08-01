
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Animated, Easing } from "react-native";

const HomePageStart = ({ navigation }) => {

    const [fadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        const startAnimationTimeout = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start();
        }, 500);
        return () => clearTimeout(startAnimationTimeout)
    }, []);
    return (
        <Animated.View style={[{ opacity: fadeAnim }]}>
            <View style={styles.container}>
                <Image style={styles.img1} source={require("../../assets/img/Login1/Rectangle1.png")}></Image>
                <Image style={styles.img1} source={require("../../assets/img/Login1/Rectangle2.png")}></Image>
                <Image style={styles.img2} source={require("../../assets/img/Login1/Rectangle3.png")}></Image>
                <Image style={styles.img3} source={require("../../assets/img/Login1/THAP.jpg")}></Image>
                <Text style={styles.txt1}>Well come app!</Text>
            </View>
            {/* <View style={styles.button1}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}>
                    <Button title="get started" />
                </TouchableOpacity>

            </View> */}

            <View
                style={styles.button1}
            >


                <Button title="Get"
                    color="#2F80ED"
                    onPress={() => navigation.navigate("Login")} // Corrected the typo here
                />
            </View>


        </Animated.View>

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
        position: "absolute",
        alignItems: 'center',
        top: 490,
        left: 50,
        fontSize: 30,
        color: "#2F80EDB2"
    },
    button1: {
        position: "absolute",
        top: 720,
        left: 300,
        width: 120,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
})

export default HomePageStart;