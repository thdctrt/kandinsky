import React, { Component } from "react";
import Slider from "react-rangeslider";
// import "react-rangeslider/lib/index.css";
import styles from "../Slider/styles.module.sass";

class ColorSlider extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      value: 255,
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
    const borderValue = (value / 510) * 50; // because border-radius: 50%
    // const borderValueFast = ((255 - value) / 510) * 100;
    const valueA = value >= 255 ? 510 - value : 255;
    const valueB = value >= 255 ? 255 : value;
    const percentValue = Math.round((value / 510) * 100);
    // console.log("valueA is " + valueA);
    // console.log(value);

    return (
      <div className={styles.container}>
        <div className={styles.slider}>
          <Slider
            min={0}
            max={510}
            value={value}
            orientation="vertical"
            reverse={true}
            tooltip={false}
            handleLabel={percentValue}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
            className={styles.slider}
          />
        </div>
        <div
          className={styles.value}
          style={{
            background: "rgba(" + valueA + ",0," + valueB + ", 1)",
            borderTopLeftRadius: borderValue + "%",
            borderTopRightRadius: borderValue + "%",
            borderBottomRightRadius:
              borderValue > 25
                ? borderValue + "%"
                : borderValue > 20
                ? borderValue / 2 + "%"
                : borderValue > 15
                ? borderValue / 2 + "%"
                : borderValue > 12
                ? borderValue / 5 + "%"
                : borderValue > 6
                ? borderValue / 10 + "%"
                : 0,
            // borderBottomRightRadius:
            //   borderValue > 50
            //     ? borderValueFast + "%"
            //     : 0,
            borderBottomLeftRadius:
              borderValue > 25
                ? borderValue + "%"
                : borderValue > 20
                ? borderValue / 1.5 + "%"
                : borderValue > 15
                ? borderValue / 2 + "%"
                : borderValue > 12
                ? borderValue / 5 + "%"
                : borderValue > 6
                ? borderValue / 10 + "%"
                : 0,
          }}
        ></div>
      </div>
    );
  }
}

export default ColorSlider;
