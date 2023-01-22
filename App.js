import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListsDemo from "./src/screens/listsDemo";
import FriendsScreen from "./src/screens/friendsScreen";
import ColorsScreen from "./src/screens/colors";
import ColorBox from "./src/screens/colorBox";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        List: ListsDemo,
        Friends: FriendsScreen,
        Colors: ColorsScreen,
        ColorBox: ColorBox,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
