import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={300}
        className='Loader'
      />
    );
  }
}