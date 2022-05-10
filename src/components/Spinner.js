import React, { Component } from 'react';
import loading from "./loading.gif"
export default class Spinner extends Component {
  render() {
    return <div className='flex justify-center'>
        <img className='w-8 my-2 sm:w-10' src={loading} alt="loading" />
    </div>;
  }
}
