import React from "react";
import {XTerm} from "xterm-for-react";
import "./Terminal.scss";
import TerminalLogo from "./assets/img/terminal_logo.png"
import MinimizeNormal from "./assets/img/minimize_normal.png"
import MaximizeNormal from "./assets/img/maximize_normal.png"
import CloseNormal from "./assets/img/close_normal.png"

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.terminalRef = React.createRef();
  }

  componentDidMount() {
    this.terminalRef.current.terminal.writeln("Microsoft(R) Windows 95")
    this.terminalRef.current.terminal.writeln("   (C)Copyright Microsoft Corp 1981-1996.")
    this.terminalRef.current.terminal.write("\nC:\\home\\uwu>")
  }

  render() {
    return (
      <div className="Terminal">
        <div className="Terminal__content">
          <div className="Terminal__header">
            <div className="Terminal__header-left">
              <img className="Terminal__icon" src={TerminalLogo} alt=""/>
              <div className="Terminal__title">Terminal</div>
            </div>
            <div className="Terminal__header-right">
              <img src={MinimizeNormal} alt=""/>
              <img src={MaximizeNormal} alt=""/>
              <img src={CloseNormal} alt=""/>
            </div>
          </div>
          <div className="Terminal__separator"/>
          <div className="Terminal__container">
            <XTerm
              ref={this.terminalRef}
              options={{fontSize: 16, fontFamily: "Less Perfect DOS VGA"}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Terminal;
