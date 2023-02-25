import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import styles from "../Slider/styles.module.sass";

class ColorSlider extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      value: 10,
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = (value: any) => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <Slider
          min={0}
          max={255}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div style={{ background: "rgba(" + value + ", 45, 45, 0.6)" }}>
          test
        </div>
        <div className="value">{value}</div>
      </div>
    );
  }
}

export default ColorSlider;
