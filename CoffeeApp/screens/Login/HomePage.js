import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView, Animated, Easing
} from "react-native";

const HomePage = ({ navigation }) => {
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

    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/image/Home/4.png")}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.successText}>Stay Focused</Text>
        <Text style={styles.infoText}>
          Get the cup filled of your choice to stay focused and awake.
          Different types of coffee menu, hot latte cappuccino
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("HomeScreen")} // Corrected the typo here
      >
        <Text style={styles.loginButtonText}>Dive In</Text>
      </TouchableOpacity>
    </Animated.View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE0D1",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 60,
  },
  headerImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  content: {
    paddingHorizontal: 20,
    width: "80%",
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#38220F",
  },
  infoText: {
    fontSize: 18,
    color: "#44444499",
    textAlign: "center",
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#967259",
    borderRadius: 105,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default HomePage;
