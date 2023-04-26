import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fonts from "../styles/Fonts";
import { Image } from "react-native";
import AccountPage from "../pages/AccountPage";
export const Tab = createBottomTabNavigator();
export default function UserStack(){
    return(

        <NavigationContainer>
           <Tab.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarStyle: {backgroundColor:"black",height:"5.5%", borderTopWidth:0.75, borderTopColor:"#34373e"},
                    tabBarItemStyle: {backgroundColor:"black"},
                }}
               
                initialRouteName = "Profile"
                
           >
           <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarActiveTintColor:"white",
                tabBarLabelStyle:{
                    fontSize: 0,
                },
                tabBarIcon: ({focused}) =>
                (
                    <Image 
                        fadeDuration={0}
                        style={{width:Fonts.input,height:Fonts.input, tintColor: focused?"white":"white", tintColor:"white"}}
                        source={require("../assets/home_icon.png")}
                    />
                ),
            }} />
            <Tab.Screen name="Search" component={HomePage} options={{
                tabBarActiveTintColor:"white",
                tabBarLabelStyle:{
                    fontSize: 0,
                },
                tabBarIcon: ({focused}) =>
                (
                    <Image 
                        fadeDuration={0}
                        style={{width:Fonts.input,height:Fonts.input, tintColor: focused?"white":"white"}}
                        source={require("../assets/search_icon.png")}
                    />
                ),
            }} />
            <Tab.Screen name="Add" component={HomePage} options={{
                tabBarActiveTintColor:"white",
                tabBarLabelStyle:{
                    fontSize: 0,
                },
                tabBarIcon: ({focused}) =>
                (
                    <Image 
                        fadeDuration={0}
                        style={{width:Fonts.input,height:Fonts.input, tintColor: focused?"white":"white"}}
                        source={require("../assets/add_icon.png")}
                    />
                ),
            }} />
            <Tab.Screen name="Reels" component={HomePage} options={{
                tabBarActiveTintColor:"white",
                tabBarLabelStyle:{
                    fontSize: 0,
                },
                tabBarIcon: ({focused}) =>
                (
                    <Image 
                        fadeDuration={0}
                        style={{width:Fonts.input,height:Fonts.input, tintColor: focused?"white":"white"}}
                        source={require("../assets/reels_icon.png")}
                    />
                ),
            }} />
            <Tab.Screen name="Profile" component={AccountPage} options={{
                tabBarActiveTintColor:"white",
                tabBarLabelStyle:{
                    fontSize: 0,
                },
                tabBarIcon: ({focused}) =>
                (
                    <Image 
                        fadeDuration={0}
                        style={{width:Fonts.h4,height:Fonts.h4,borderRadius:20,borderColor:"white", borderWidth:2.5}}
                        source={require("../assets/profile_pic.jpg")}
                    />
                ),
            }} />
           </Tab.Navigator>
            
        </NavigationContainer>

    );
}