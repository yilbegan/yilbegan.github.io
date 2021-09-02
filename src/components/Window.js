import React from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";

import "./Window.scss";

class Window extends React.Component {
  render() {
    const {title, logo, children, position, onClose, onMinimize, onMaximize} = this.props

    return (
      <Draggable defaultPosition={position} handle=".Window__header" bounds="parent">
        <div className="Window">
          <div className="Window__content">
            <div className="Window__header">
              <div className="Window__header-left">
                <img className="Window__icon" src={logo} alt=""/>
                <div className="Window__title">{title}</div>
              </div>
              <div className="Window__header-right">
                <button className="Window__header-minimize" onClick={onMinimize}/>
                <button className="Window__header-maximize" onClick={onMaximize}/>
                <button className="Window__header-close" onClick={onClose}/>
              </div>
            </div>
            <div className="Window__separator"/>
            <div className="Window__container">
              {children}
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

Window.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.object,
  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func
}

export default Window;
