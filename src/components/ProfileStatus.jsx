import { Component } from "react";

export default class ProfileStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.initialStatus ?? true,
    };
  }

  handleToggleStatus = () => {
    this.setState((prevState) => ({
      status: !prevState.status,
    }));
  };

  render() {
    const { status } = this.state;

    return (
      <p className="profile-status">
        <button
          className="status-button"
          type="button"
          onClick={this.handleToggleStatus}
        >
          Set status
        </button>{" "}
        <span>{status ? "Online \u{1F7E2}" : "Offline \u{1F534}"}</span>
      </p>
    );
  }
}
