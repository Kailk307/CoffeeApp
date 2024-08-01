
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home/HomeScreen'
import HomePage from './screens/Login/HomePage'
import Detail from './screens/home/Detail'
import Cart from "./screens/home/Cart";
import HomePageStart from './screens/Login/HomePageStart';
import Register from './screens/Login/Register';
import Login from './screens/Login/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabHomeScreen from './TabHomeScreen';
const Stack = createStackNavigator();
export default function App() {
  return (



    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePageStart">
        <Stack.Screen
          name="HomePageStart"
          component={HomePageStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home1"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="re"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home2"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home3"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <TabHomeScreen />



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
