import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { user_posts, users } from "../hooks/Database";
import Fonts from "../styles/Fonts";
import { ScrollView } from "react-native-gesture-handler";
import {useState} from "react";
export default function AccountPage() {

  const [pressedCategory,setPressedCategory] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>{users[0].username}</Text>
          <Image
            source={require("../assets/down-arrow.png")}
            style={{
              tintColor: "white",
              width: Fonts.small,
              height: Fonts.small,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              backgroundColor: "#c63d49",
              width: Fonts.tiny,
              height: Fonts.tiny,
              borderRadius: 25,
            }}
          />
        </View>
        <View style={styles.headerRight}>
          <Image
            source={require("../assets/add_icon.png")}
            style={{
              tintColor: "white",
              width: Fonts.input,
              height: Fonts.input,
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../assets/menu_icon.png")}
            style={{
              tintColor: "white",
              width: Fonts.input,
              height: Fonts.input,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.profileScrollContainer}
        style={styles.profileContainer}
      >
        <View style={styles.topDetails}>
          <View style={styles.topDetailsHeader}>
            <Image
              source={require("../assets/users/Ortan.jpg")}
              style={{
                width: Fonts.storyCover,
                height: Fonts.storyCover,
                alignSelf: "center",
                borderRadius: 100,
              }}
            />
            <View
              style={{
                //backgroundColor:"purple",
                height: "100%",
                width: "21%",
                alignItems: "center",
                justifyContent: "center",
                left: "17.5%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: Fonts.regular,
                }}
              >
                {users[0].posts}
              </Text>
              <Text style={{ color: "white", fontSize: Fonts.small }}>
                Posts
              </Text>
            </View>
            <View
              style={{
                //backgroundColor:"purple",
                height: "100%",
                width: "21%",
                alignItems: "center",
                justifyContent: "center",
                left: "17.5%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: Fonts.regular,
                }}
              >
                {users[0].followers}
              </Text>
              <Text style={{ color: "white", fontSize: Fonts.small }}>
                Followers
              </Text>
            </View>
            <View
              style={{
                //backgroundColor:"purple",
                height: "100%",
                width: "21%",
                alignItems: "center",
                justifyContent: "center",
                left: "17.5%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: Fonts.regular,
                }}
              >
                {users[0].following}
              </Text>
              <Text style={{ color: "white", fontSize: Fonts.small }}>
                Following
              </Text>
            </View>
          </View>
          <View style={styles.topDescription}>
            <Text
              style={{ color: "white", fontWeight: 500, fontSize: Fonts.small }}
            >
              {users[0].name}
            </Text>
            <Text
              style={{ color: "white", fontWeight: 400, fontSize: Fonts.small }}
            >
              {users[0].description}
            </Text>
            <Text
              style={{
                color: "#B9E9FC",
                fontWeight: 400,
                fontSize: Fonts.small,
              }}
            >
              {users[0].link}
            </Text>
          </View>
          <View style={styles.detailsButtons}>
            <TouchableOpacity style={styles.topButton}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: Fonts.small,
                }}
              >
                Edit profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topButton}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: Fonts.small,
                }}
              >
                Share profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topButton, { width: "10%" }]}>
              <Image
                source={require("../assets/add_friend_icon.png")}
                style={{
                  tintColor: "white",
                  width: Fonts.small,
                  height: Fonts.small,
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.storiesContainer}>
          <Text
            style={{ color: "white", fontWeight: 600, fontSize: Fonts.small }}
          >
            Story highlights
          </Text>
          <Image
            source={require("../assets/down-arrow.png")}
            style={{
              tintColor: "white",
              width: Fonts.small,
              height: Fonts.small,
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.categoriesPicker}>
          <View style={[styles.category,{borderWidth: 1}]}>

          <Image
            source={require("../assets/grid_icon.png")}
            style={{
              tintColor: "white",
              width: Fonts.input,
              height: Fonts.input,
              alignSelf: "center",

            }}
          />
          </View>
          <View style={styles.category}>
          <Image
            source={require("../assets/reels_icon.png")}
            style={{
              tintColor: "#9a9a9a",
              width: Fonts.input,
              height: Fonts.input,
              alignSelf: "center",

            }}
          />
          </View>
          <View style={styles.category}>
          <Image
            source={require("../assets/tag_icon.png")}
            style={{
              tintColor: "#9a9a9a",
              width: Fonts.input,
              height: Fonts.input,
              alignSelf: "center",
              
            }}
          />
          </View>
        </View>
        <View style={styles.postsParentContainer}>
           {[...Array(3)].map((_,rowIdx) =>
            <View key={rowIdx} style={{flex:1,flexDirection:"row"}}>
                {[...Array(3)].map((_,colIdx) =>
                    {
                        const itemIdx = rowIdx*3+colIdx;
                        const item = user_posts[itemIdx];
                        return (
                            <View key={item.id} style={{flex:1,borderWidth:2,borderColor:"black"}}>
                                <Image 
                                source={item.post_photo}
                                style={{flex:1,aspectRatio:1}}
                                />
                                </View>
                        )
                    }
                )}
            </View>
           )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    flex: 1,
  },
  header: {
    width: "95%",
    height: "6.5%",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontSize: Fonts.input,
    fontWeight: 500,
    textTransform: "lowercase",
  },
  headerLeft: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerRight: {
    width: "18.5%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexDirection: "row",
    right: "1%",
  },
  profileContainer: {
    flex: 1,
    // backgroundColor:"red",
  },
  profileScrollContainer: {
    flex: 1,
    //backgroundColor:"green",
  },
  topDetails: {
    width: "98%",
    //backgroundColor: "green",
    height: "30%",

    alignItems: "center",
    alignSelf: "center",
  },
  topDetailsHeader: {
    width: "100%",
    height: "32%",
    //backgroundColor:"green",
    top: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  topDescription: {
    //backgroundColor:"red",
    width: "50%",
    height: "42%",
    top: "10%",
    left: "3%",
    alignSelf: "flex-start",
  },
  detailsButtons: {
    width: "100%",
    height: "14%",
    //backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  topButton: {
    width: "42%",
    height: "95%",
    backgroundColor: "#262626",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  storiesContainer: {
    width: "95%",
    height: "3.5%",
    //backgroundColor:"red",
    alignSelf: "center",
    bottom: "4.5%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoriesPicker: {
    width: "100%",
    height: "6%",
    //backgroundColor: "red",
    flexDirection: "row",
    bottom:"1.25%",
  },
  category: {
    flex:1,
    //backgroundColor:"green",
    height:"100%",
    borderBottomColor:"white",
    alignItems:"center",
    justifyContent:"center",
  },
  postsParentContainer:{
    flex:1,
    bottom:"0.5%",
  }
});
