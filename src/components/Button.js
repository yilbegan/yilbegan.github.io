import React from "react"
import "./Button.scss"

class Button extends React.Component {
  render() {
    const {text, icon, children, className, ...restProps} = this.props
    const classNames = ["Button", className]

    return (
      <button className={classNames.join(" ")} {...restProps}>
        {icon && <img src={icon} alt="" style={{paddingRight: text !== undefined ? 4 : 0}}/>}
        <div className="Button__label">{text}</div>
      </button>
    )
  }
}

export default Button
