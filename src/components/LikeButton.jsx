import { Component } from "react";

export default class LikeButton extends Component {
  state = {
    like: 0,
  };

  handleLike = () => {
    this.setState((prevState) => ({
      like: prevState.like + 1,
    }));
  };

  render() {
    const { like } = this.state;

    return (
      <div
        className="like-button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Feel free to drop a like</h2>
        <button style={{ fontSize: "20px" }} onClick={this.handleLike}>
          {"\u{1F44D}: " + like}
        </button>
      </div>
    );
  }
}
