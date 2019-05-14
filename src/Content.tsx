import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
interface State {
  name: string;
}

export default class Content extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: "zcy"
    };
  }

  public render(): Element {
    const { name } = this.state;
    // this;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{name}</Text>
        <Text style={styles.instructions}>To et started,t App.tsx</Text>
      </View>
    );
  }
}
