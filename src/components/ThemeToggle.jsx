import { Component } from "react";

export default class ThemeToggle extends Component {
  render() {
    const { darkMode, onToggle } = this.props;

    return (
      <button className="theme-toggle" type="button" onClick={onToggle}>
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
    );
  }
}
