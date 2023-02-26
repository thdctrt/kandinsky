import React, { Component } from "react";
import Slider from "react-rangeslider";
// import "react-rangeslider/lib/index.css";
import styles from "../Slider/styles.module.sass";
import styled from "styled-components";

class Triquare extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      valueTri: 150,
    };
  }

  handleChangeStart = () => {
    // console.log("Change event started");
  };

  handleChange = (valueTri: any) => {
    this.setState({
      valueTri: valueTri,
    });
  };

  handleChangeComplete = () => {
    // console.log("Change event completed");
  };

  render() {
    const { valueTri } = this.state;
    let percentValueTri = Math.round(100 - (valueTri / 300) * 100);
    // console.log(valueTri);
    const valueA = (valueTri * 255) / 300;

    const SvgContainer = styled.svg<{ valueB: number }>`
      fill: ${(props) => "rgba(255," + props.valueB + ", 0, 1)" || "125"};
    `;

    return (
      <div className={styles.component}>
        <div className={styles.figLabel}>fig. 1 — squircle</div>
        <div className={styles.container}>
          <div className={styles.slider}>
            <Slider
              min={0}
              max={300}
              value={valueTri}
              orientation="vertical"
              reverse={false}
              tooltip={false}
              handleLabel={percentValueTri.toString()}
              onChangeStart={this.handleChangeStart}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
              className={styles.slider}
            />
          </div>
          <SvgContainer
            width="300"
            height="300"
            viewBox="0 0 300 300"
            valueB={valueA}
            // this approach works too, but causes svg flickering
            // style={{
            //   fill: "rgba(255," + valueA + "0, 1)",
            // }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                "M150 0" +
                "L0 " +
                valueTri +
                " L" +
                valueTri * 0.2 +
                " 300" +
                "H" +
                (300 - valueTri * 0.2) +
                "L300 " +
                valueTri +
                "L150 0" +
                "Z"
              }
            />
          </SvgContainer>
        </div>
      </div>
    );
  }
}

export default Triquare;
