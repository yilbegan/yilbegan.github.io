import React from "react";
import "./App.scss";
import Terminal from "./components/Terminal";
import MediaPlayer from "./components/MediaPlayer";
import Button from "./components/Button";
import GitHubIcon from "./assets/img/github.png"
import TerminalIcon from "./assets/img/terminal_logo.png"
import MediaPlayerIcon from "./assets/img/media_player.png"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedWindows: ["terminal"],
      time: this.getTime()
    }
    console.log(this.getTime())
  }

  getTime() {
    const options = {hour: "2-digit", minute: "2-digit"}
    return new Date().toLocaleTimeString("en-US", options)
  }

  componentDidMount() {
    setInterval(() => this.setState({time: this.getTime()}), 1000)
  }

  openWindow(name) {
    if (!this.state.openedWindows.includes(name)) {
      this.setState({openedWindows: [name, ...this.state.openedWindows]})
    }
  }

  closeWindow(name) {
    const openedWindows = this.state.openedWindows.filter(v => v !== name)
    this.setState({openedWindows})
  }

  render() {
    const {openedWindows, time} = this.state

    return (
      <div className="App">
        <div className="App__desktop">
          {openedWindows.includes("terminal") &&
          <Terminal
            closeWindow={() => this.closeWindow("terminal")}
            openWindow={this.openWindow.bind(this)}
          />}
          {openedWindows.includes("media_player") &&
          <MediaPlayer
            closeWindow={() => this.closeWindow("media_player")}
          />}
        </div>
        <div className="App__panel">
          <Button
            style={{fontWeight: "bold", height: 30, paddingLeft: 4, paddingRight: 4, marginLeft: 2, marginRight: 2}}
            text="Github"
            icon={GitHubIcon}
            onClick={() => window.open("https://github.com/yilbegan")}
          />
          <div className="App__panel-separator"/>
          <img src={TerminalIcon} alt="" style={{paddingLeft: 6, paddingRight: 6}} onClick={() => this.openWindow("terminal")}/>
          <img src={MediaPlayerIcon} alt="" style={{paddingLeft: 6, paddingRight: 6}} onClick={() => this.openWindow("media_player")}/>
          <div className="App__panel-separator"/>
          {openedWindows.includes("terminal") && <Button
            className="App__panel-button"
            text="Terminal"
            icon={TerminalIcon}
          />}
          {openedWindows.includes("media_player") && <Button
            className="App__panel-button"
            text="Media Player"
            icon={MediaPlayerIcon}
          />}
          <div className="App__panel-separator" style={{marginLeft: "auto"}}/>
          <div className="App__panel-clock">{time}</div>
        </div>
      </div>
    )
  }
}

export default App;
