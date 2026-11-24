import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Chats from "./screens/Chats";
import Updates from "./screens/Updates";
import Communities from "./screens/Communities";
import Calls from "./screens/Calls";

const Tab = createBottomTabNavigator();

const icons = {
    Chats: ["chat-outline", "chat"],
    Updates: ["circle-slice-8", "circle-slice-8"],
    Communities: ["account-group-outline", "account-group"],
    Calls: ["phone-outline", "phone"],
};

export default function Navigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#163b2d",
            tabBarInactiveTintColor: "#4b5751",
            tabBarLabelPosition: "below-icon",
            tabBarLabelStyle: styles.label,
            tabBarStyle: styles.tabBar,
            tabBarIcon: ({ focused }) => (
                <View style={[styles.icon, focused && styles.selectedIcon]}>
                    <MaterialCommunityIcons
                        name={icons[route.name][focused ? 1 : 0]}
                        size={24}
                        color={focused ? "#163b2d" : "#4b5751"}
                    />
                </View>
            ),
        })}>
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Updates" component={Updates} />
            <Tab.Screen name="Communities" component={Communities} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: { backgroundColor: "#fff", borderTopColor: "#e8ece9", paddingTop: 6 },
    label: { fontSize: 12, fontWeight: "600" },
    icon: { width: 64, height: 32, alignItems: "center", justifyContent: "center", borderRadius: 16 },
    selectedIcon: { backgroundColor: "#d3f4df" },
});
