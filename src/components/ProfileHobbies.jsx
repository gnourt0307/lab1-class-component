import { Component } from "react";

export default class ProfileHobbies extends Component {
  render() {
    const { hobbies = [] } = this.props;

    return (
      <div className="profile-hobbies">
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
