import React from "react"
import {XTerm} from "xterm-for-react"
import Window from "./Window"
import TerminalLogo from "../assets/img/terminal_logo.png"
import moment from "moment"
import * as XtermWebfont from 'xterm-webfont'

const styles = {
  terminal: {
    fontSize: 16,
    fontFamily: "More Perfect DOS VGA",
    letterSpacing: 0,
    cursorStyle: "underline",
    cursorBlink: true,
  }
}

const colors = {
  magenta: "\x1b[95m",
  red: "\x1b[31m",
  reset: "\x1b[39m",
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
<${colors.magenta}SQUISHY  ${colors.reset}> Play with squishy rat.\r
<${colors.magenta}CLS      ${colors.reset}> Clear screen.\r\n`
const whoAmI =
`NAME\r
    Evgeniy.\r
\r
SYNOPSIS\r
    Fullstack developer from Russia.\r
\r
SUPPORTED FORMATS\r
    *.py, *.js, *.html, *.css,\r
    *.ts, *.scss, *.cpp, *.ino\r
`


class FixedXTerm extends XTerm {
  componentDidMount() {
    if (this.terminalRef.current) {
      this.terminal.loadWebfontAndOpen(this.terminalRef.current)
    }
  }
}

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.terminalRef = React.createRef()
    this.state = {input: ""}
  }

  componentDidMount() {
    const terminal = this.terminalRef.current.terminal
    terminal.write(greetings)
    terminal.write(prompt)
  }

  async dirCommand() {
    const terminal = this.terminalRef.current.terminal
    let response = await fetch("https://api.github.com/users/yilbegan/events")
    if (response.ok) {
      let result = []
      let json = await response.json()
      for (let event of json) {
        let date = moment(event.created_at)
        if (date.isoWeek() !== moment().isoWeek()) {
          continue
        }

        let eventName = {
          WatchEvent: "WCH",
          PushEvent: "PSH",
          ForkEvent: "FRK",
          PullRequestEvent: "PR"
        }[event.type];
        if (eventName !== undefined) {
          result.push({
            repo: event.repo.name,
            event: eventName,
            date: date.format("DD-MM-YYYY HH:mm")
          })
        }
      }

      let maxLen = result.reduce((p, c) => Math.max(p, c.repo.length), 0) + 2
      for (let event of result) {
        terminal.write(event.repo.padEnd(maxLen, " "))
        terminal.write(event.event.padEnd(10, " "))
        terminal.write(event.date)
        terminal.write("\r\n")
      }
      terminal.writeln(`    ${result.length} Event(s)`)
    } else {
      terminal.writeln(`${colors.red}Network error: ${response.statusText}${colors.reset}`)
    }
  }

  async processCommand(input) {
    const terminal = this.terminalRef.current.terminal
    switch (input.toUpperCase()) {
      case "HELP":
        terminal.write(helpText)
        break
      case "WHOAMI":
        terminal.write(whoAmI)
        break
      case "DIR":
        await this.dirCommand()
        break
      case "WMPLAYER":
        this.props.openWindow("media_player")
        break
      case "CLS":
        terminal.clear()
        break
      case "SQUISHY":
        window.location.replace("/other/squishy-rat/index.html")
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
        .then(() => this.terminalRef.current.terminal.write(prompt))
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
          <FixedXTerm
            ref={this.terminalRef}
            options={styles.terminal}
            onData={this.onData.bind(this)}
            addons={[new XtermWebfont()]}
          />
        </div>
      </Window>
    )
  }
}

export default Terminal;
