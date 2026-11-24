import { Button, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import st from "../styles";

const ScreenOne = () => {
    const { navigate } = useNavigation();

    const moveToScreenTwo = () => {
        navigate("ScreenTwo");
    };

    return (
        <View style={st.screens}>
            <Text>ScreenOne</Text>
            <Button title="move to screen two" onPress={moveToScreenTwo} />
        </View>
    );
};

export default ScreenOne;

const styles = StyleSheet.create({});
