import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
 import Toast from "react-native-toast-message";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import Inscription from "./screens/Inscription";
import MainScreen from "./screens/MainScreen";
import Forgetpwd from "./screens/Forgetpwd";



 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



 






const App = () => {
 
  const [fontsLoaded] = useFonts({
     Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
     Poppins : require("./assets/fonts/Poppins-SemiBold.ttf"),
   });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer independent={true} 
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainScreen"

      >
         <Stack.Screen name="MainScreen" component={MainScreen} />
         <Stack.Screen name="Forgetpwd" component={Forgetpwd} />

        <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Inscription" component={Inscription} />
 


        </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 30,
    height: 25,
  },
});

export default App;
