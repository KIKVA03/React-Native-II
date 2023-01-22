import React, { useState } from "react";
import { View, Button, Text, FlatList } from "react-native";

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return ` rgb(${red}, ${green}, ${blue})`;
    };
    return (
        <View>
            <Text>COLORS</Text>

            <View>
                <Button
                    title="change color"
                    onPress={() => {
                        setColors([...colors, randomColor()]);
                    }}
                />
            </View>
            <FlatList
                data={colors}
                renderItem={({ item }) => (
                    <View style={{ height: 100, width: 100, backgroundColor: `${item}` }}></View>
                )}
            />
        </View>
    );
};

export default ColorsScreen;
