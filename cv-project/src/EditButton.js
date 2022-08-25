import React, { Component } from 'react';

export default class EditButton extends Component {
  render() {
    return (
      <input
        type='button'
        value='Edit'
        onClick = {this.handleEdit}
        className='border border-solid border-black py-1 px-2 w-5/6 cursor-pointer'
      />
    );
  }
}
