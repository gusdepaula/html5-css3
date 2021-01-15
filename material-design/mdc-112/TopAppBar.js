import React from "react";

export default class TopAppBar extends React.Component {
  setStyle = (varName, value) => {
    const updatedStyle = Object.assign({}, this.state.style);
    updatedStyle[varName] = value;
    this.setState({ style: updatedStyle });
  };

  getMergedStyles = () => {
    const { style } = this.props;
    const { style: internalStyle } = this.state;
    return Object.assign({}, internalStyle, style);
  };

  get adapter() {
    const { actionItems } = this.props;

    return {
      hasClass: (className) => this.classes.split(" ").includes(className),
      addClass: (className) =>
        this.setState({ classList: this.state.classList.add(className) }),
      removeClass: (className) => {
        const { classList } = this.state;
        classList.delete(className);
        this.setState({ classList });
      },
      setStyle: this.setStyle,
      getTopAppBarHeight: () => this.topAppBarElement.current.clientHeight,
      registerScrollHandler: (handler) =>
        window.addEventListener("scroll", handler),
      deregisterScrollHandler: (handler) =>
        window.removeEventListener("scroll", handler),
      registerResizeHandler: (handler) =>
        window.addEventListener("resize", handler),
      deregisterResizeHandler: (handler) =>
        window.removeEventListener("resize", handler),
      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () => actionItems && actionItems.length,
    };
  }

  render() {
    const { title, navIcon } = this.props;

    return (
      <header
        className={this.classes}
        style={this.getMergedStyles()}
        ref={this.topAppBarElement}
      >
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            {navIcon ? navIcon : null}
            <span className="mdc-top-app-bar__title">{title}</span>
          </section>
          {this.renderActionItems()}
        </div>
      </header>
    );
  }
  renderActionItems() {
    const { actionItems } = this.props;
    if (!actionItems) {
      return;
    }

    return (
      <section
        className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      >
        {/* need to clone element to set key */}
        {actionItems.map((item, key) => React.cloneElement(item, { key }))}
      </section>
    );
  }
}
