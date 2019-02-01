import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import firebase from "firebase";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    const { key } = this.props.name.item;
    console.log(firebase.database);
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCbg_OQnCvePbLtQOiZ6qHX_zu-sPqEaow",
      authDomain: "favorite-list.firebaseapp.com",
      databaseURL: "https://favorite-list.firebaseio.com",
      projectId: "favorite-list",
      storageBucket: "favorite-list.appspot.com",
      messagingSenderId: "752967633274"
    };
    //firebase.initializeApp(config);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    // firebase
    //   .database()
    //   .ref("users/")
    //   .push({
    //     name: key,
    //     favorite: null
    //   })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }

  showContent(person) {
    console.log(person.name.index);
    this.setState({ show: !this.state.show });

    firebase
      .database()
      .ref("users")
      .update({ favorite: this.state.show });
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.item}>{this.props.name.item.key}</Text>
        <TouchableOpacity onPress={() => this.showContent(this.props)}>
          {this.state.show ? (
            <Text style={styles.item}>X</Text>
          ) : (
            <Text style={styles.item}>O</Text>
          )}
        </TouchableOpacity>
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
  },
  item2: {
    paddingLeft: 10,
    fontSize: 16,
    height: 34
  }
});
