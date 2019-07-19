import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import { Text, ListItem } from "react-native-elements";

import * as defaultStyle from "./shared/style";

import picture172 from "./assets/images/172.png";

import picture188 from "./assets/images/188.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
const list = [
  {
    name: "172",
    time: "2019-05-21",
    avatarUrl: picture172
  },
  {
    name: "188",
    time: "2019-05-22",
    avatarUrl: picture188
  }
];
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
    // this;
    return (
      <SafeAreaView style={styles.container}>
        <Text h4 style={{ textAlign: "center", marginBottom: 20 }}>
          ourThings
        </Text>

        <View>
          {list.map(
            (item, index): Element => (
              <ListItem
                key={index}
                leftAvatar={{ source: item.avatarUrl }}
                title={item.name}
                // checkmark
                titleStyle={{
                  fontSize: 14,
                  color: "#333",
                  marginBottom: 4
                }}
                subtitle={item.time}
                subtitleStyle={{
                  fontSize: 14,
                  color: "#333"
                }}
                // checkBox
                chevron
                bottomDivider
                // Component={<View />}
                // disabled
                // disabledStyle={{
                //   backgroundColor: "red"
                // }}
                // pad={16}
              />
            )
          )}
        </View>
        <View style={[{ flex: 1 }, defaultStyle.container]}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
