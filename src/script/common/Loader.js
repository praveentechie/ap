import { Component } from "react";
import './loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className='spinner'>
        <span className='ball'></span>
        <p>LOADING</p>
      </div>
    );
  }
}

export default Loader;