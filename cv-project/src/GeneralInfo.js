/* eslint-disable no-useless-constructor */
import React, { Component } from "react";


class GeneralInfo extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="flex flex-col gap-2 items-center w-full">
        <h1 className="text-2xl justify-self-start mb-4">General Info</h1>
        <input type="text" id="firstName" placeholder="First Name" className="rounded-xl p-2 resize" />
        <input type="text" id="lastName" placeholder="Last Name" className="rounded-xl p-2 resize" />
        <input type="email" id="email" placeholder="Email" className="rounded-xl p-2 resize" />
        <input type="tel" id="phone"placeholder="Phone Number" className="rounded-xl p-2 resize" />
      </div>
    )
  }
}

export default GeneralInfo;
