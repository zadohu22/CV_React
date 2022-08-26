import React, { Component } from 'react';

class Education extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='flex flex-col gap-2 items-center w-full'>
				<h1 className='text-2xl justify-self-start'>Education</h1>
				<input
					type='text'
					name='school'
					id='school'
					placeholder='School'
					className='rounded-xl p-2 resize'
					value={this.props.val.school}
				/>
				<input
					type='text'
					name='fieldOfStudy'
					id='fieldOfStudy'
					placeholder='Field Of Study'
					className='rounded-xl p-2 resize'
					value={this.props.val.fieldOfStudy}
				/>

				<div className='flex gap-2 mt-2'>
					<div className='flex flex-col items-center'>
						<label htmlFor='dateFrom' className='text-lg'>
							From:
						</label>
						<input
							type='date'
							name='studyDateFrom'
							id='dateFrom'
							className='rounded-xl py-2'
							value={this.props.val.studyDateFrom}
						/>
					</div>

					<div className='flex flex-col items-center'>
						<label htmlFor='to' className='text-lg'>
							To:
						</label>
						<input
							type='date'
							name='studyDateTo'
							id='dateTo'
							className='rounded-xl py-2'
							value={this.props.val.studyDateTo}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;
