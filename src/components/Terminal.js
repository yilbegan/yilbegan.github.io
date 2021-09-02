import React from "react";
import {XTerm} from "xterm-for-react";
import Window from "./Window";
import TerminalLogo from "../assets/img/terminal_logo.png"

const styles = {
  terminal: {
    fontSize: 16,
    fontFamily: "More Perfect DOS VGA, Less Perfect DOS VGA",
    letterSpacing: 0,
    cursorStyle: "underline",
    cursorBlink: true
  }
}

const colors = {
  magenta: "\x1b[95m",
  reset: "\x1b[39m"
}

const greetings = "Microsoft(R) Windows 95\r\n"
  + "   (C)Copyright Microsoft Corp 1981-1996.\r\n"
const prompt = "\r\nY:\\>"
const helpText =
`A short list of the most often used commands:\r
<${colors.magenta}HELP     ${colors.reset}> Show this message.\r
<${colors.magenta}WHOAMI   ${colors.reset}> Show information about me.\r
<${colors.magenta}DIR      ${colors.reset}> Show my recent activity.\r
<${colors.magenta}WMPLAYER ${colors.reset}> Open music player.\r
<${colors.magenta}CLS      ${colors.reset}> Clear screen.\r\n`

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.terminalRef = React.createRef();
    this.state = {input: ""}
  }

  componentDidMount() {
    const terminal = this.terminalRef.current.terminal
    terminal.write(greetings)
    terminal.write(prompt)
  }

  processCommand(input) {
    const terminal = this.terminalRef.current.terminal
    switch (input.toUpperCase()) {
      case "HELP":
        terminal.write(helpText)
        break
      case "WHOAMI":
        // TODO
        break
      case "DIR":
        // TODO
        break
      case "WMPLAYER":
        this.props.openWindow("media_player")
        break
      case "CLS":
        terminal.clear()
        break
      default:
        terminal.write(`Illegal command: ${input}.\r\n`)
    }
    this.setState({input: ""})
  }

  onData(data) {
    const code = data.charCodeAt(0)
    const terminal = this.terminalRef.current.terminal
    let input = this.state.input
    if (code === 13 && this.state.input.length > 0) {
      terminal.write("\r\n")
      this.processCommand(input)
      this.terminalRef.current.terminal.write(prompt)
    } else if (32 < code < 127) {
      input += data
      terminal.write(data)
      this.setState({input})
    }
  }

  render() {
    const {closeWindow} = this.props

    return (
      <Window title="Terminal" logo={TerminalLogo} onClose={closeWindow}>
        <div style={{padding: 2, backgroundColor: "black"}}>
          <XTerm
            ref={this.terminalRef}
            options={styles.terminal}
            onData={this.onData.bind(this)}
          />
        </div>
      </Window>
    )
  }
}

export default Terminal;
