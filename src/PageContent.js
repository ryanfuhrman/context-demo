import React, { Component } from "react";

export class PageContent extends Component {
  render() {
    const styles = {
      background: "white",
      height: "100vh",
      width: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
