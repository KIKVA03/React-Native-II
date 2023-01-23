import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useState, useReducer } from "react";

const amount = 10;
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
};
const HomeScreen = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;
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
                <Text>{count}</Text>
                <Button
                    title="increas"
                    onPress={() => dispatch({ type: "increment", payload: amount })}
                />
            </View>
            <Button
                title="decreas"
                onPress={() => dispatch({ type: "decrement", payload: amount })}
            />
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
