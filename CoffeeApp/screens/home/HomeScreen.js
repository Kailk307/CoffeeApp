import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Animated, Easing, FlatList,Header } from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from 'axios';
import { TouchableOpacity } from "react-native";
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://192.168.1.106:8080/api/products"
        );
        setData(result.data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const startAnimationTimeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 500);

    return () => clearTimeout(startAnimationTimeout);
  }, []);

  // Render each item in the FlatList
  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('detail', { trip: item })}>
      <View style={styles.productItem}>
        <Image style={styles.productImage} source={{ uri: item.photo }} />
        <View style={styles.ratingContainer}>
          <Image style={styles.starIcon} source={require("../../assets/img/home/Star1.png")} />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <View style={styles.productInfo}>
          <Text>{item.title}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            $<Text style={styles.priceValue}>{item.price}</Text>
          </Text>
        </View>
        <View style={styles.addCartButton}>
          <Image style={styles.addButtonIcon} source={require("../../assets/img/home/cong.png")} />
        </View>
      </View>
    </TouchableOpacity>
  );


  return (
    <>
     <View style={{flex:1}}>
       <HeaderScreen></HeaderScreen>
     </View>
       
     

      <View style={{ marginTop: 80 }}>
        <Text style={styles.txt1}>Find the best</Text>
        <Text style={styles.txt1}>Coffee to your taste</Text>
        <View style={{ flexDirection: "row", width: 380, left: 30 }}>
          <View
            style={{
              flex: 0.8,
              flexDirection: "row",
              width: "70%",
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 30,
              alignItems: "center",
              borderColor: "#EEEEEE",
              borderWidth: 1,
            }}
          >
            <Feather
              name="search"
              size={15}
              color="black"
              style={{ marginLeft: 1, marginRight: 4 }}
            />
            <TextInput
              style={{ fontSize: 15, color: "black" }}
              placeholder="Find your caffe"
            />
          </View>
          <View
            style={{
              flex: 0.2,
              height: 45,
              backgroundColor: "#967259",
              marginLeft: 15,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/img/home/Filter.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.txt2}>
          <Text style={{ top: 10, left: 10 }}>Espresso</Text>
          <Text style={{ left: 112, bottom: 9 }}>Latte</Text>
          <Text style={{ bottom: 27, left: 190 }}>Cappuccino</Text>
          <Text style={{ bottom: 45, left: 300 }}>Cafetière</Text>
        </View>
        {/* Your other components */}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        numColumns={2} // Display two items per row
        columnWrapperStyle={styles.row}
      />
      <View style={{ marginBottom: 70 }}>
        <View style={{ left: 34 }}>
          <Text style={{ color: "#444444", fontSize: 25, fontWeight: "bold" }}>
            Special for you
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#967259",
            borderRadius: 30,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            width: 385,
            height: 180,
            shadowOpacity: 300,
            left: 15,
          }}
        >
          <Image
            style={{
              width: 155,
              height: 155,
              bottom: 15,
              position: "absolute",
              left: 10,
            }}
            source={require("../../assets/img/home/Rectangle20.png")}
          ></Image>
          <View style={{ left: 70, bottom: 10 }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              Specially mixed and
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              brewed whivh you
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>must try!</Text>
          </View>
        </View>
      </View>
      {/* Your other components */}
      <FooterScreen navigation={navigation}></FooterScreen>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // top: 50
  },
Header:{
  flex:1,
},
  txt1: {
    // top: -5,
    // left: 30,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  txt2: {
    // top: 10,
    // left: 30,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },

  productItem: {
    backgroundColor: "#EEEEEE",
    borderRadius: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 180,
    height: 235,
    shadowOpacity: 300,
    flex: 1,
  },
  productImage: {
    width: 165,
    height: 140,
    bottom: 87,
    position: "absolute",
  },
  ratingContainer: {
    backgroundColor: "#967259",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 55,
    height: 30,
    left: 54,
    bottom: 32,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    flex: 1,
  },
  starIcon: {
    width: 7,
    height: 9,
    bottom: 2,
    right: 5,
  },
  ratingText: {
    bottom: 3,
    fontSize: 9,
  },
  productInfo: {
    top: 70,
    right: 45,
  },
  descriptionText: {
    fontSize: 10,
  },
  priceContainer: {
    top: 90,
    right: 50,
  },
  priceText: {
    color: "#967259",
    fontSize: 15,
    fontWeight: "500",
  },
  priceValue: {
    color: "#444444",
    fontSize: 17,
    fontWeight: "700",
  },
  addCartButton: {
    backgroundColor: "#967259",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 60,
    height: 50,
    left: 60,
    top: 40,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  addButtonIcon: {
    width: 40,
    height: 30,
    bottom: 2,
    right: 2,
  },
  row: {
    justifyContent: "space-between",
  },
});
export default HomeScreen;


// phaafn duoi cungs

