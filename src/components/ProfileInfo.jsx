import { Component } from "react";

export default class ProfileInfo extends Component {
  render() {
    const { fullName, major, id, className } = this.props;

    return (
      <>
        <header>
          <h1>{fullName}</h1>
          <p className="profile-role">{major}</p>
        </header>

        <p className="profile-summary">
          ID: <strong>{id}</strong> Class <strong>{className}</strong>.
        </p>
      </>
    );
  }
}
