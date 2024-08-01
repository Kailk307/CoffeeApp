import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground, Button, Animated, Easing } from 'react-native';
const Detail = ({ navigation, route }) => {
    const { trip } = route.params
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
        <Animated.View style={[{ flex: 1, padding: 20, }, { opacity: fadeAnim }]}>

            {/* HEADER */}

            <ImageBackground style={{ flex: 1, marginTop: 20, marginBottom: 50, height: 450, }} source={{ uri: trip.photo }}>
                {/* 2 icon */}
                <View style={{
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        backgroundColor: 'white', borderRadius: 100, width: 30, height: 30, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('home2')} >
                            <Image style={{ width: 20, height: 20, }} source={require("../../assets/img/imgDetail/Arrow---Left-2.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: 'white', borderRadius: 100, width: 30, height: 30, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{ width: 20, height: 20, }} source={require("../../assets/img/imgDetail/Heart.png")}></Image>
                    </View>

                </View>
                {/* phần 2 */}
                <View style={{ position: 'absolute', top: 330, marginBottom: 10, backgroundColor: '#808080', borderRadius: 20, width: '100%' }} >
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={{ flexDirection: 'column', flex: 0.5 }} >
                            <Text style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 500 }}>Espresso</Text>
                            <Text style={{ fontSize: 16, color: '#C0C0C0' }}>with chocolate</Text>
                        </View>
                        <View style={{ flexDirection: 'column', flex: 0.25, alignItems: 'center', justifyContent: 'center', }} >
                            <Image style={{
                                // fontSize: 24, color: '#FFFFFF', fontWeight: 500,

                            }} source={require("../../assets/img/imgDetail/coffee-svgrepo-com1.png")}></Image>
                            <Text style={{ fontSize: 16, color: '#C0C0C0' }}> Caffe</Text>
                        </View>
                        <View style={{ flexDirection: 'column', flex: 0.25, alignItems: 'center', justifyContent: 'center', }} >
                            <Image style={{
                                // fontSize: 24, color: '#FFFFFF', fontWeight: 500,

                            }} source={require("../../assets/img/imgDetail/drop-svgrepo-com.png")}></Image>
                            <Text style={{ fontSize: 16, color: '#C0C0C0' }}> chocolate</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom: 20 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{
                                // fontSize: 24, color: '#FFFFFF', fontWeight: 500,

                            }} source={require("../../assets/img/imgDetail/Star2.png")}></Image>
                            <Text style={{ fontSize: 16, color: '#FFF' }}> 4.8</Text>
                            <Text style={{ fontSize: 10, color: '#C0C0C0' }}> '(6,098)'</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 500 }}>Medium Roasted</Text>

                    </View>

                </View>

            </ImageBackground >
            {/* body */}
            <View style={{ marginTop: 410, }}>
                <Text style={{ color: "#444", fontSize: 16, fontWeight: 700 }}>Description</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel tincidunt et ullamcorper eu, vivamus semper commodo............<Text style={{ color: '#967259' }}>Read More</Text></Text>
            </View>
            {/* BODY 2 */}
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#444444", fontSize: 16, fontWeight: 700, }}>Choice of Chocolate</Text>
                <View style={{ flexDirection: 'row', }} >
                    <View style={{
                        backgroundColor: '#967259', borderRadius: 30, padding: 10, justifyContent: 'center',
                        alignItems: 'center', margin: 10
                    }}>
                        <Text style={{ fontSize: 12 }}>White Chocolate</Text>

                    </View>
                    <View style={{
                        backgroundColor: '#B3B6B7', borderRadius: 30, padding: 10, justifyContent: 'center',
                        alignItems: 'center', margin: 10
                    }}>
                        <Text style={{ fontSize: 12 }}>White Chocolate</Text>

                    </View>
                    <View style={{
                        backgroundColor: '#B3B6B7', borderRadius: 30, padding: 10, justifyContent: 'center',
                        alignItems: 'center', margin: 10
                    }}>
                        <Text style={{ fontSize: 12 }}>White Chocolate</Text>

                    </View>
                </View>
            </View>

            {/* size , quantity */}
            <View style={{ flexDirection: 'row', marginTop: 0 }} >
                <View style={{ flexDirection: 'column', flex: 0.5 }}>
                    <View><Text style={{ fontSize: 15, fontWeight: 700, color: '#444444' }}>Size</Text></View>
                    <View style={{ flexDirection: 'row', }} >
                        <View style={{
                            backgroundColor: '#967259', borderRadius: 50, padding: 10, justifyContent: 'center',
                            alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>S</Text>

                        </View>
                        <View style={{
                            backgroundColor: '#D9D9D9', borderRadius: 50, padding: 10, justifyContent: 'center',
                            alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>M</Text>

                        </View>
                        <View style={{
                            backgroundColor: '#D9D9D9', borderRadius: 50, padding: 10, justifyContent: 'center',
                            alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>L</Text>

                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 0.5 }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15, fontWeight: 700, color: '#444444',
                        }}>Quantity</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center',
                        alignItems: 'center'
                    }} >

                        <View style={{
                            backgroundColor: '#967259', borderRadius: 50, padding: 10, justifyContent: 'center',
                            alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 15 }}>-</Text>

                        </View>
                        <View style={{
                            // backgroundColor: '#D9D9D9', borderRadius: 50, padding: 10, justifyContent: 'center',
                            // alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 15 }}>1</Text>

                        </View>
                        <View style={{
                            backgroundColor: '#967259', borderRadius: 50, padding: 10, justifyContent: 'center',
                            alignItems: 'center', margin: 10
                        }}>
                            <Text style={{ fontSize: 15 }}>+</Text>

                        </View>

                    </View>
                </View>
            </View>
            {/* FOOTER */}
            <View style={{ flexDirection: 'row', marginTop: 1, }}>
                <View style={{ flexDirection: 'column', }}>
                    <Text style={{ color: '#777777', fontSize: 14, fontWeight: 400 }}>
                        Price
                    </Text>
                    <Text style={{ color: '#967259', fontSize: 24, fontWeight: 500 }}>$<Text style={{ color: '#444444', fontSize: 24, fontWeight: 700 }}>5.30</Text></Text>
                </View>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', left: 80, marginVertical: 20, width: 400, }}>
                    <Button
                        // width={500}
                        marginVertical={8}
                        title="Buy Now"
                        color="#967259"

                    />
                </View> */}
                <View style={{
                    backgroundColor: '#967259', borderRadius: 30, padding: 20, justifyContent: 'center',
                    alignItems: 'center', margin: 10, marginLeft: 180, width: 150
                }}>
                    <Text style={{ fontSize: 14 }}>Buy Now</Text>

                </View>
            </View>


        </Animated.View >
    )

}


export default Detail;