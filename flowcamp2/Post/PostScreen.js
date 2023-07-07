import React from "react";
import { Text, View, Button } from "react-native";

const PostScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
      <Button title="Button" onPress={() => alert("click!")} />
    </View>
  );
};

export default PostScreen;