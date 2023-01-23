import React, { useState, useReducer } from "react";
import { View, Button, Text } from "react-native";
import ChangeColorComponent from "../components/changeColorComponent";

const changeAmount = 25;

const reducer = (state, action) => {
    switch (action.type) {
        case "red":
            return { ...state, red: state.red + action.amount };

        case "green":
            return { ...state, green: state.green + action.amount };

        case "blue":
            return { ...state, blue: state.blue + action.amount };
    }
};

const ColorBox = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const { red, green, blue } = state;

    return (
        <View>
            <ChangeColorComponent
                increase={() => dispatch({ type: "red", amount: changeAmount })}
                decrease={() => dispatch({ type: "red", amount: -1 * changeAmount })}
                color="red"
            />
            <ChangeColorComponent
                increase={() => dispatch({ type: "green", amount: changeAmount })}
                decrease={() => dispatch({ type: "green", amount: -1 * changeAmount })}
                color="green"
            />
            <ChangeColorComponent
                increase={() => dispatch({ type: "blue", amount: changeAmount })}
                decrease={() => dispatch({ type: "blue", amount: -1 * changeAmount })}
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
