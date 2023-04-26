import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Fonts from "../styles/Fonts";
import { FlatList } from "react-native-gesture-handler";
import { users, stories } from "../hooks/Database";
import { LinearGradient } from "expo-linear-gradient";
import PostsFeed from "../hooks/PostsFeed";


export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topLeftSide}>
          <Text style={styles.title}>Instagram</Text>
           <Image
            source={require("../assets/down-arrow.png")}
            style={{
              width: Fonts.medium,
              height: Fonts.medium,
              tintColor: "white",
              left: "12%",
              alignSelf: "center",
            }}
          /> 
        </View>
        <View style={styles.topRightSide}>
          <Image
            source={require("../assets/heart_icon.png")}
            style={{
              width: Fonts.input,
              height: Fonts.input,
              tintColor: "white",
              alignSelf: "flex-end",
              bottom: "2%",
            }}
          />
          <Image
            source={require("../assets/messages_icon.png")}
            style={{
              width: Fonts.input,
              height: Fonts.input,
              tintColor: "white",
              left: "40%",
              alignSelf: "flex-end",
              bottom: "2%",
            }}
          />
        </View>
      </View>
      <View style={styles.storiesContainer}>
        <FlatList
          data={stories}
          horizontal
          //numColumns={3}
          contentContainerStyle={styles.storiesBody}
          renderItem={({ item }) => (
            <View style={styles.storyBody}>
              <View
                style={
                  ([styles.iconBody],
                  item.close_friend === true && item.user.id != 0
                    ? {
                        borderRadius: Fonts.storyRadius,
                        borderColor: "#36c45c",
                        borderWidth: 1.5,
                        padding:1.5,
                      }
                    : {})
                }
              >
                {item.close_friend === false && item.user.id != 0 ? (
                  <LinearGradient
                    start={{ x: 0.3, y: 0.7 }}
                    end={{ x: 1, y: 0.7 }}
                    colors={["#F58529", "#DD2A7B", "#8134AF"]}
                    style={{
                      borderRadius: Fonts.h1,
                      width: Fonts.storyCover - 2,
                      height: Fonts.storyCover - 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.user.photo_url}
                      style={styles.storyIcon}
                      resizeMode={"center"}
                    />
                  </LinearGradient>
                ) : item.user.id === 0 ? (
                  <ImageBackground
                    source={item.user.photo_url}
                    style={styles.profileIcon}
                    resizeMode={"center"}
                    imageStyle={{ borderRadius: Fonts.h1 }}
                  >
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: "70%",
                        left: "70%",
                        width: Fonts.regular,
                        height: Fonts.regular,
                        borderRadius: Fonts.h4,
                        backgroundColor: "black",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                      }}
                      onPress={() => {
                        console.log("Profile Pic Clicked");
                      }}
                    >
                      <Image
                        source={require("../assets/plus_icon.png")}
                        style={{ width: Fonts.medium, height: Fonts.medium }}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                ) : (
                  <Image
                    source={item.user.photo_url}
                    style={styles.storyIcon}
                    resizeMode={"center"}
                  />
                )}
              </View>
              <Text style={{color:"white",fontSize:Fonts.smallTiny, top:"3%"}}>{item.user.id===0?"Your story":item.user.username}</Text>
            </View>
            
          )}
        />
      </View>
      <View style={styles.postsContainer}>
              <PostsFeed />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  topBar: {
    width: "100%",
    height: "7.5%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topLeftSide: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "3.5%",
  },
  topRightSide: {
    width: "15%",
    right: "7.5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  title: {
    fontSize: Fonts.h5,
    color: "white",
    fontFamily: 'Instagram',
  },
  storiesContainer: {
    width: "100%",
    height: "12%",
    backgroundColor: "transparent",
    
  },
  storiesBody: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  storyBody: {
    
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
    margin:12.5,
    borderRadius: Fonts.h1,
    overflow:"visible",
  },
  storyIcon: {
    width: Fonts.story,
    height: Fonts.story,
    borderRadius: Fonts.h1,
    overflow:'visible',
  },
  iconBody: {
    width: Fonts.storyCover ,
    height: Fonts.storyCover,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"red",
  },
  profileIcon: {
    width: Fonts.story,
    height: Fonts.story,
    borderRadius: Fonts.h1,
    overflow: "visible",
  },
  postsContainer:{
    borderTopWidth: 0.5,
    top:"1%",
    borderColor: "#34373e",
    flex:1,
   // backgroundColor:"red",
  },
});
