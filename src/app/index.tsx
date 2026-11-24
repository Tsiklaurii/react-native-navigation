import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Navigator from "../../navigator";

export default function Index() {
  return (
    <NavigationContainer>
        <StatusBar />
        <Navigator/>
    </NavigationContainer>

  );
}
