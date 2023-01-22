import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListsDemo = () => {
    const friendsData = [
        { name: "ika", age: 23 },
        { name: "nika", age: 24 },
        { name: "kikva", age: 23 },
        { name: "lika", age: 23 },
        { name: "balu", age: 23 },
    ];
    return (
        <View>
            <FlatList
                data={friendsData}
                renderItem={(element) => (
                    <Text
                        style={styles.text}
                    >{`${element.item.name} age ${element.item.age}`}</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginVertical: 10,
    },
});

export default ListsDemo;
