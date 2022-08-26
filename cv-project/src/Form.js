import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import WorkHistory from './WorkHistory';
import FormButtons from './FormButtons';
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';
import ShowCV from './ShowCV';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.state = {
			isShowingValues: false,
			value: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			school: '',
			fieldOfStudy: '',
			studyDateFrom: '',
			studyDateTo: '',
			company: '',
			position: '',
			tasks: 'Job Tasks / Responsibilities',
			jobDateFrom: '',
			jobDateTo: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ isShowingValues: true, [e.target.name]: e.target.value });
	}

	handleEdit(e) {
		this.setState({ isShowingValues: false, [e.target.name]: e.target.value });
		console.log('handle Edit');
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(e.target.name);
	}

	render() {
		console.log(this.state.firstName);
		const isShowingValues = this.state.isShowingValues;
		console.log(isShowingValues);
		let display;
		if (!isShowingValues) {
			display = (
				<form
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					action='#'
					className='flex flex-col gap-4 items-center justify-center w-6/12 bg-gray-400 p-6 rounded-xl'
				>
					<GeneralInfo val={this.state} />
					<Education val={this.state} />
					<WorkHistory val={this.state} />
					<div className='flex flex-col gap-4 w-full justify-center items-center'>
						<SubmitButton />
						{/* <EditButton /> */}
					</div>
				</form>
			);
		} else {
			display = (
				<div>
					<ShowCV val={this.state} />
					<input
						type='button'
						onClick={this.handleEdit}
						value='Edit'
						className='border border-solid border-black py-1 px-2 w-5/6 cursor-pointer'
					/>
				</div>
			);
		}
		return <>{display}</>;
	}
}
