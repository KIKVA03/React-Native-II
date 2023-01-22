import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import ChangeColorComponent from "../components/changeColorComponent";

const ColorBox = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <View>
            <ChangeColorComponent
                increase={() => setRed(red + 30)}
                decrease={() => setRed(red - 30)}
                color="red"
            />
            <ChangeColorComponent
                increase={() => setGreen(green + 30)}
                decrease={() => setGreen(green - 30)}
                color="green"
            />
            <ChangeColorComponent
                increase={() => setBlue(blue + 30)}
                decrease={() => setBlue(blue - 30)}
                color="blue"
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: ` rgb(${red}, ${green}, ${blue})`,
                }}
            ></View>
        </View>
    );
};

export default ColorBox;
