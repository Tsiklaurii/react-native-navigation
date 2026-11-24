import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Navigator from "../../navigator";

export default function Index() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <StatusBar />
                <Navigator />
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
