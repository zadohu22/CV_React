import React, { Component } from 'react'

export default class FormButtons extends Component {
  render() {
    return (
      <div className='flex flex-col gap-4 w-full justify-center items-center'>
        <button id="submitForm" type="submit" className='border border-solid border-black py-1 px-2 w-5/6'>Submit</button>
        <input type="button" value="Edit" className='border border-solid border-black py-1 px-2 w-5/6 cursor-pointer'/>
      </div>
    )
  }
}
