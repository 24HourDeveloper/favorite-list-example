import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import List from "./components/List";

export default class FlatListBasics extends Component {
  renderList(item) {
    return <List name={item} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin", body: "This is my post from Devin" },
            { key: "Jackson", body: "This is my post from Jackson" },
            { key: "James", body: "This is my post from James" },
            { key: "Joel", body: "This is my post from Joel" },
            { key: "John", body: "This is my post from John" },
            { key: "Jillian", body: "This is my post from Jillian" },
            { key: "Jimmy", body: "This is my post from Jimmy" },
            { key: "Julie", body: "This is my post from Julie" }
          ]}
          renderItem={this.renderList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
