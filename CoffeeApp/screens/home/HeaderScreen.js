import React from "react";
import { StyleSheet, Text,View,Image, Button } from "react-native";
import{TouchableOpacity}from "react-native";

const header = () =>{
    return (
       <>
            <View style={styles.container}>
                <View style={{right:140}}>
                    <Image  source = {require("../../assets/img/home/Category.png")}></Image>
                </View>
                <View style={{left:160}}>
                    <Image  source = {require("../../assets/img/home/Ellipse2.png")}></Image>
                </View>
                {/* <View>
                    <Text style={styles.txt1}>
                    Find the best
                    </Text>
                    <Text style={styles.txt1}>
                    Coffee to your taste
                    </Text>
                </View> */}
                
            </View>
            
       </>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
        position:'absolute',
        width:'100%',
        height:'10%',
        top:10
     
    },
   

});
export default header;