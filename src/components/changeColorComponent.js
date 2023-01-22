import React from "react";
import { View, Button, Text } from "react-native";

const ChangeColorComponent = ({ color, increase, decrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <View style={{ marginVertical: 10 }}>
                <Button title={`increase${color}`} onPress={() => increase()} />
            </View>
            <View>
                <Button title={`decrease${color}`} onPress={() => decrease()} />
            </View>
        </View>
    );
};

export default ChangeColorComponent;
