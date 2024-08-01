import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Animated, Easing } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import FooterScreen from './FooterScreen';
const Cart = ({ navigation }) => {
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
        <Animated.View style={[{ flex: 1, top: 10, }, { opacity: fadeAnim }]}>
            {/* header */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('home3')} >
                    <Image style={{ width: 30, height: 30, top: 15 }} source={require("../../assets/img/ImgCart/Arrow-Left.png")}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 500, top: 15 }}>Cart</Text>
                <Image style={{ width: 30, height: 30, top: 15 }} source={require("../../assets/img/ImgCart/Delete.png")}></Image>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 500, left: 19, top: 15 }}>Items (20)</Text>
            </View>
            {/* BODY */}
            <View style={{
                flexDirection: 'column',
                margin: 20,
            }}>
                {/* item 1 */}
                <View style={{ flexDirection: 'row', backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.8, shadowRadius: 6, elevation: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'gray', margin: 10 }} source={require("../../assets/img/ImgCart/Checkmark.png")}></Image>
                        <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={require("../../assets/img/ImgCart/Placeimagehere.png")}></Image>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>Cappucinno with</Text>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>chocolate</Text>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: '#000000' }}>US $10.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }} >
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#F37E33' }}>Delivery fee US $3</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart/Minusqty.png")}></Image>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: '#2F3548', marginLeft: 10 }}>1</Text>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart//Plusqty.png")}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                {/* item 2 */}
                <View style={{ flexDirection: 'row', backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.8, shadowRadius: 6, elevation: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'gray', margin: 10 }} source={require("../../assets/img/ImgCart/Checkmark.png")}></Image>
                        <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={require("../../assets/img/ImgCart/Placeimagehere.png")}></Image>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>Cappucinno with</Text>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>chocolate</Text>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: '#000000' }}>US $10.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }} >
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#F37E33' }}>Delivery fee US $3</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart/Minusqty.png")}></Image>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: '#2F3548', marginLeft: 10 }}>1</Text>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart/Plusqty.png")}></Image>
                            </View>
                        </View>
                    </View>
                </View>

                {/* item 3 */}
                <View style={{ flexDirection: 'row', backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.8, shadowRadius: 6, elevation: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'gray', margin: 10 }} source={require("../../assets/img/ImgCart/Checkmark.png")}></Image>
                        <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={require("../../assets/img/ImgCart/Placeimagehere.png")}></Image>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>Cappucinno with</Text>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: '#000' }}>chocolate</Text>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: '#000000' }}>US $10.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }} >
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#F37E33' }}>Delivery fee US $3</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart/Minusqty.png")}></Image>
                                <Text style={{ fontSize: 14, fontWeight: 600, color: '#2F3548', marginLeft: 10 }}>1</Text>
                                <Image style={{ width: 18, height: 18, marginLeft: 10 }} source={require("../../assets/img/ImgCart/Plusqty.png")}></Image>
                            </View>
                        </View>
                    </View>
                </View>




            </View>
            <FooterScreen></FooterScreen>

        </Animated.View >

    )

}


export default Cart;