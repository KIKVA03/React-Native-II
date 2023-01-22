import React from "react";
import { View, ScrollView } from "react-native";
import SingleFriendCard from "../components/singleFriendCard";

const FriendsScreen = () => {
    return (
        <ScrollView>
            <View>
                <SingleFriendCard
                    title="DeadPool "
                    imageSource={require("../../assets/deadpool.png")}
                    description="imortal mutant who can heal himself from one cell"
                />
                <SingleFriendCard
                    title="Wolverine"
                    imageSource={require("../../assets/logan.png")}
                    description="mutant with adamantium skeleton which is unbreakable and instant healing ability "
                />
                <SingleFriendCard
                    title="Ghost Rider"
                    imageSource={require("../../assets/ghostRider.png")}
                    description="KING OF HELL"
                />
            </View>
        </ScrollView>
    );
};

export default FriendsScreen;
