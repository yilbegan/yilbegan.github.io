import React from "react"
import "./Button.scss"

class Button extends React.Component {
  render() {
    const {text, icon, children, ...restProps} = this.props

    return (
      <button className="Button" {...restProps}>
        {icon && <img src={icon} alt="" style={{paddingRight: text !== undefined ? 4 : 0}}/>}
        {text}
      </button>
    )
  }
}

export default Button
