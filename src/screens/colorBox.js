import React, { useState, useReducer } from "react";
import { View, Button, Text } from "react-native";
import ChangeColorComponent from "../components/changeColorComponent";

const changeAmount = 25;

const reducer = (state, action) => {
    switch (action.type) {
        case "red":
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };

        case "green":
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };

        case "blue":
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const ColorBox = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const { red, green, blue } = state;

    return (
        <View>
            <ChangeColorComponent
                increase={() => dispatch({ type: "red", payload: changeAmount })}
                decrease={() => dispatch({ type: "red", payload: -1 * changeAmount })}
                color="red"
            />
            <ChangeColorComponent
                increase={() => dispatch({ type: "green", payload: changeAmount })}
                decrease={() => dispatch({ type: "green", payload: -1 * changeAmount })}
                color="green"
            />
            <ChangeColorComponent
                increase={() => dispatch({ type: "blue", payload: changeAmount })}
                decrease={() => dispatch({ type: "blue", payload: -1 * changeAmount })}
                color="blue"
            />
            <View
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: ` rgb(${red}, ${green}, ${blue})`,
                }}
            ></View>
        </View>
    );
};

export default ColorBox;
