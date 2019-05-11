/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App.tsx";
import { name as appName } from "./app.json";

console.log(1);
AppRegistry.registerComponent(appName, () => App);
