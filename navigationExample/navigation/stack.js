import { createStackNavigator, createAppContainer } from "react-navigation"
import ReactNativeTutorials from "../ReactNativeTutorials";
import Howdoyoulikethetutorial from "../Howdoyoulikethetutorial";

const RootStack = createStackNavigator({
    LikeNow : ReactNativeTutorials,
    LikeLater: Howdoyoulikethetutorial
},
{ 
    initialRouteName: "LikeLater"
}
)

const StackNav = createAppContainer(RootStack)

export default StackNav;