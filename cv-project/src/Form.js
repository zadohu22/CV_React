import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import WorkHistory from './WorkHistory';
import FormButtons from './FormButtons';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { isShowingValues: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isShowingValues: true });
  }

  handleEdit() {
    this.setState({ isShowingValues: false });
    console.log('handle Edit');
  }

  render() {
    const isShowingValues = this.state.isShowingValues;
    console.log(isShowingValues);
    let display;
    if (!isShowingValues) {
      display = (
        <form
          onSubmit={this.handleSubmit}
          action='#'
          className='flex flex-col gap-4 items-center justify-center w-6/12 bg-gray-400 p-6 rounded-xl'
        >
          <GeneralInfo />
          <Education />
          <WorkHistory />
          <div className='flex flex-col gap-4 w-full justify-center items-center'>
            <SubmitButton />
            {/* <EditButton /> */}
          </div>
        </form>
      );
    } else {
      display = (
        <div>
          this works question
          <input
            type='button'
            value='Edit'
            onClick={this.handleEdit}
            className='border border-solid border-black py-1 px-2 w-5/6 cursor-pointer'
          />
        </div>
      );
    }
    return <>{display}</>;
  }
}
