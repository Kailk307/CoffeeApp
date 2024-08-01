import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const Footer = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate("home1")}>
          <Image
            style={{ right: 120 }}
            source={require("../../assets/img/home/Home.png")}
          ></Image>
        </TouchableOpacity>

        {/* <Text style={styles.img3}>Home</Text> */}
        <Image
          style={{ right: 60 }}
          source={require("../../assets/img/home/Heart.png")}
        ></Image>
        {/* <Text style={styles.img4}>Search</Text> */}

        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image
            style={{ right: 2 }}
            source={require("../../assets/img/home/Bag.png")}
          ></Image>
        </TouchableOpacity>

        {/* <Text style={styles.img5}>Liked</Text> */}
        <Image
          style={{ left: 60 }}
          source={require("../../assets/img/home/icons8-notification-24.png")}
        ></Image>
        {/* <Text style={styles.img6}>Profiled</Text> */}
        <Image
          style={{ left: 110 }}
          source={require("../../assets/img/home/Profile.png")}
        ></Image>
        {/* <Text style={styles.img6}>Profiled</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: "10%",
    bottom: 0, // Đặt bottom thành 0 để đưa footer xuống cuối trang
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    left: 1,
  },
});

export default Footer;
