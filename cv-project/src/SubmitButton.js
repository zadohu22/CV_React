import React, { Component } from 'react';

export default class SubmitButton extends Component {
  render() {
    return (
      <button
        id='submitForm'
        type='submit'
        className='border border-solid border-black py-1 px-2 w-5/6'
      >
        Submit
      </button>
    );
  }
}
