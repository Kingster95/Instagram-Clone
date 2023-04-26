import { View, StyleSheet, Text, Image } from "react-native";
import { posts } from "./Database";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Fonts from "../styles/Fonts";
export default function PostsFeed() {
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const timeElapsed = now.getTime() - date.getTime();
    const secondsElapsed = Math.round(timeElapsed / 1000);

    if (secondsElapsed < 60) {
      return `${secondsElapsed} second${secondsElapsed === 1 ? "" : "s"} ago`;
    } else if (secondsElapsed < 3600) {
      const minutes = Math.floor(secondsElapsed / 60);
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else if (secondsElapsed < 86400) {
      const hours = Math.floor(secondsElapsed / 3600);
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else {
      const days = Math.floor(secondsElapsed / 86400);
      return `${days} day${days === 1 ? "" : "s"} ago`;
    }
  }
  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={posts}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.postBody}>
            <View style={styles.postHeader}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={item.user.photo_url}
                  style={{
                    width: Fonts.h4,
                    height: Fonts.h4,
                    borderRadius: Fonts.h1,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    left: "15%",
                    fontWeight: 500,
                    fontSize: Fonts.smallTiny,
                  }}
                >
                  {item.user.username}
                </Text>
              </View>
              <Image
                source={require("../assets/dots.png")}
                style={{
                  width: Fonts.medium,
                  height: Fonts.medium,
                  tintColor: "white",
                }}
              />
            </View>
            <Image
              source={item.post_photo}
              style={{
                width: "100%",
                height: "75%",
              }}
            />
            <View style={styles.postFooter}>
              <View style={styles.postInteractions}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "25%",
                  }}
                >
                  <Image
                    source={require("../assets/heart_icon.png")}
                    style={{
                      width: Fonts.input,
                      height: Fonts.input,
                      tintColor: "white",
                    }}
                  />
                  <Image
                    source={require("../assets/comment.png")}
                    style={{
                      width: Fonts.input,
                      height: Fonts.input,
                      tintColor: "white",
                    }}
                  />
                  <Image
                    source={require("../assets/messages_icon.png")}
                    style={{
                      width: Fonts.input,
                      height: Fonts.input,
                      tintColor: "white",
                    }}
                  />
                </View>

                <Image
                  source={require("../assets/bookmark.png")}
                  style={{
                    width: Fonts.input,
                    height: Fonts.input,
                    tintColor: "white",
                  }}
                />
              </View>
              <View style={styles.postInfo}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: Fonts.descriptions,
                  }}
                >
                  {item.likes} likes
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: 500,
                      fontSize: Fonts.descriptions,
                    }}
                  >
                    {item.user.username}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: 400,
                      fontSize: Fonts.descriptions,
                      left: "25%",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => console.log("comments pressed")}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontWeight: 400,
                      fontSize: Fonts.descriptions,
                    }}
                  >
                    View all {item.comments.length} comments{" "}
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: 500,
                      fontSize: Fonts.descriptions,
                    }}
                  >
                    {item.comments[0].user.username}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: 400,
                      fontSize: Fonts.descriptions,
                      left: "25%",
                    }}
                  >
                    {item.comments[0].text}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: 300,
                    fontSize: Fonts.descriptions,
                    top: "5%",
                  }}
                >
                  {timeAgo(item.date.toString())}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex:1,
  },
  listContainer: {
    flexGrow: 1,
  },
  postBody: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "95%",
  },
  postHeader: {
    width: "95%",
    backgroundColor: "transparent",
    height: "8%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postFooter: {
    width: "100%",
    height: "15.5%",
    top:"0.5%",
    backgroundColor: "transparent",
  },
  postInteractions: {
    width: "96%",
    height: "40%",
    backgroundColor: "transparent",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postInfo: {
    backgroundColor: "transparent",
    width: "96%",
    height: "60%",
    alignSelf: "center",
  },
});
