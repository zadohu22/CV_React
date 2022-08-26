/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className='flex flex-col gap-2 items-center w-full'>
        <h1 className='text-2xl justify-self-start mb-4'>General Info</h1>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          name='firstName'
          className='rounded-xl p-2 resize'
          value={this.props.val.firstName}
        />
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          className='rounded-xl p-2 resize'
          value={this.props.val.lastName}
        />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          className='rounded-xl p-2 resize'
          value={this.props.val.email}
        />
        <input
          type='tel'
          id='phone'
          name='phone'
          placeholder='Phone Number'
          className='rounded-xl p-2 resize'
          value={this.props.val.phone}
        />
      </div>
    );
  }
}

export default GeneralInfo;
