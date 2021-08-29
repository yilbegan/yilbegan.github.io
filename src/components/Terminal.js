import React from "react";
import {XTerm} from "xterm-for-react";
import Window from "./Window";
import TerminalLogo from "../assets/img/terminal_logo.png"

const styles = {
  terminal: {
    fontSize: 16,
    fontFamily: "More Perfect DOS VGA, Less Perfect DOS VGA",
    letterSpacing: 0
  }
}

const greetings = "Microsoft(R) Windows 95\r\n"
  + "   (C)Copyright Microsoft Corp 1981-1996.\r\n"

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.terminalRef = React.createRef();
  }

  componentDidMount() {
    this.terminalRef.current.terminal.write(greetings)
    this.terminalRef.current.terminal.write("\nC:\\home\\uwu>")
  }

  render() {
    return (
      <Window title="Terminal" logo={TerminalLogo}>
        <div style={{padding: 2, backgroundColor: "black"}}>
          <XTerm
            ref={this.terminalRef}
            options={styles.terminal}
          />
        </div>
      </Window>
    )
  }
}

export default Terminal;
