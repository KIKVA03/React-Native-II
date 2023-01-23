import React from "react";
import { View, Text, Image } from "react-native";

const SingleFriendCard = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image style={{ width: 200, height: 300 }} source={props.imageSource} />
            <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontSize: 25 }}>{props.title}</Text>
                <Text style={{ fontSize: 15, maxWidth: 175, marginVertical: 10 }}>
                    {props.description}
                </Text>
            </View>
        </View>
    );
};

export default SingleFriendCard;
