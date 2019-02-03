import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import firebase from "firebase";
import { Icon } from "react-native-elements";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    const { index } = this.props.name;

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCbg_OQnCvePbLtQOiZ6qHX_zu-sPqEaow",
      authDomain: "favorite-list.firebaseapp.com",
      databaseURL: "https://favorite-list.firebaseio.com",
      projectId: "favorite-list",
      storageBucket: "favorite-list.appspot.com",
      messagingSenderId: "752967633274"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase
      .database()
      .ref(`users/${index}/favorite`)
      .on("value", dataSnapShot =>
        this.setState({
          show: dataSnapShot.val()
        })
      );
    //console.log(this.props.name.index);
  }

  showContent(person) {
    const userIndex = person.name.index;
    this.setState({ show: !this.state.show });

    firebase
      .database()
      .ref(`users/${userIndex}`)
      .update({ favorite: this.state.show });
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#eee"
        }}
      >
        <TouchableOpacity
          onPress={() => this.showContent(this.props)}
          style={{ padding: 10, alignItems: "center" }}
        >
          {this.state.show ? (
            <Icon name="heart" type="font-awesome" />
          ) : (
            <Icon name="heart-o" type="font-awesome" />
          )}
        </TouchableOpacity>
        <Text style={styles.item}>{this.props.name.item.key}</Text>
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
