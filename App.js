import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Cast,Characters,Episodes,Info,Questions ,Inventory} from "./src/screens"
import Icon from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Zocial from "react-native-vector-icons/Zocial"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const StackNav=createStackNavigator()
const BottomTab=createBottomTabNavigator()
const MyStack=()=>{
  return(
    <StackNav.Navigator>
      <StackNav.Screen name="Tabs" component={MyTab}  options={{headerShown:false}}/>
    </StackNav.Navigator>
  )
}

const MyTab=()=>{
  return(
    <BottomTab.Navigator screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="Info" component={Info}
        options={{tabBarIcon:({focused})=>focused?<Icon name="info" color={"green"} size={25}/>:<Icon name="info" color={"gray"} size={25}/>}}
      />
      <BottomTab.Screen name="Characters" component={Characters}
         options={{tabBarIcon:({focused})=>focused?<FontAwesome name="user-secret" color={"green"} size={25}/>:<FontAwesome name="user-secret" color={"gray"} size={25}/>}}
      />
      <BottomTab.Screen name="Cast" component={Cast}
        options={{tabBarIcon:({focused})=>focused?<Zocial name="plancast" color={"green"} size={25}/>:<Zocial name="plancast" color={"gray"} size={25}/>}}
      />
      <BottomTab.Screen name="Inventory" component={Inventory}
        options={{tabBarIcon:({focused})=>focused?<MaterialIcons name="inventory" color={"green"} size={25}/>:<MaterialIcons name="inventory" color={"gray"} size={25}/>}}
      />
      <BottomTab.Screen name="Questions" component={Questions}
        options={{tabBarIcon:({focused})=>focused?<Icon name="question" color={"green"} size={25}/>:<Icon name="question" color={"gray"} size={25}/>}}
      />
    </BottomTab.Navigator>
  )
}
export default function App() {
  return (
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
  );
}
