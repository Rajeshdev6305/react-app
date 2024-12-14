import React, { PureComponent } from "react";
export default class Display extends PureComponent {
  render(props) {
    console.log("display-rendering");
    return <div>{this.props.value}</div>;
  }
}
