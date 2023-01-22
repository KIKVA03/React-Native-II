import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";
const HomeScreen = ({ navigation }) => {
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOME SCREEN</Text>
            <View style={styles.buttton}>
                <Button title="Go TO LIST" onPress={() => navigation.push("List")} />
            </View>
            <View style={styles.buttton}>
                <Button title="Go TO Friends" onPress={() => navigation.push("Friends")} />
            </View>
            <View style={styles.buttton}>
                <Button title="Go TO Colors" onPress={() => navigation.push("Colors")} />
            </View>
            <View style={styles.buttton}>
                <Button title="Go TO ColoreBox" onPress={() => navigation.push("ColorBox")} />
            </View>
            {/* COUNTER */}
            <View style={styles.buttton}>
                <Text>{counter}</Text>
                <Button title="increas" onPress={() => setCounter((prev) => ++prev)} />
            </View>
            <Button title="decreas" onPress={() => setCounter((prev) => --prev)} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 10,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttton: {
        marginBottom: 10,
    },
});

export default HomeScreen;
