import React from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";

import MinimizeNormal from "../assets/img/minimize_normal.png"
import MaximizeNormal from "../assets/img/maximize_normal.png"
import CloseNormal from "../assets/img/close_normal.png"

import "./Window.scss";

class Window extends React.Component {
  render() {
    const {title, logo, children, position} = this.props

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
                <img src={MinimizeNormal} alt=""/>
                <img src={MaximizeNormal} alt=""/>
                <img src={CloseNormal} alt=""/>
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
  position: PropTypes.object
}

export default Window;
