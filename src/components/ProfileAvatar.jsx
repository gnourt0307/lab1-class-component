import { Component } from "react";

export default class ProfileAvatar extends Component {
  render() {
    const { src, alt } = this.props;

    return <img className="profile-avatar" src={src} alt={alt} />;
  }
}
