import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import TabScreenTwo from "./screens/TabScreenTwo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="TabOne" component={StackNavigator} />
            <Tab.Screen name="TabTwo" component={TabScreenTwo} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
