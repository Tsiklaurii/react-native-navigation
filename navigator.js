import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerScreenTwo from "./screens/DrawerScreenTwo";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import TabScreenTwo from "./screens/TabScreenTwo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DrawerOne" component={TabNavigator} />
            <Drawer.Screen name="DrawerTwo" component={DrawerScreenTwo} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
