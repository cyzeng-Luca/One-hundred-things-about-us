import { Component } from "react";
import { YellowBox } from "react-native";
import { shallowEqualImmutable } from "react-immutable-render-mixin";

export const setupWarning = (): void => {
  YellowBox.ignoreWarnings(["source.uri should not be an empty string"]);
};

export class BaseComponent extends Component {
  public constructor(props: {}) {
    super(props);
    this.state = {
      systemLoading: true,
    };
  }

  public shouldComponentUpdate(nextProps: {}, nextState: {}): boolean {
    return (
      !shallowEqualImmutable(this.props, nextProps) ||
      !shallowEqualImmutable(this.state, nextState)
    );
  }
}
