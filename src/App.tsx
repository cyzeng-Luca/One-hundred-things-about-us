import React from "react";
import { BaseComponent } from "@utils/constructMethods";
// import { BaseComponent } from "./shared/utils/constructMethods";
import Content from "./Content";

export default class App extends BaseComponent {
  public render(): Element {
    return <Content />;
  }
}
