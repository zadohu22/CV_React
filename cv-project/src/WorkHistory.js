import React, { Component } from 'react';

export default class WorkHistory extends Component {
	render() {
		return (
			<div className='flex flex-col gap-2 items-center w-full'>
				<h1 className='text-2xl justify-self-start mb-4'>Work History</h1>
				<input
					type='text'
					id='company'
					placeholder='Company'
					className='rounded-xl p-2 resize'
					name='company'
					value={this.props.val.company}
				/>
				<input
					type='text'
					id='position'
					placeholder='Position Title'
					className='rounded-xl p-2 resize'
					name='position'
					value={this.props.val.position}
				/>
				<textarea
					className='rounded-xl p-2 resize-none'
					name='tasks'
					value={this.props.val.tasks}
				/>

				<div className='flex gap-2 mt-2'>
					<div className='flex flex-col items-center'>
						<label htmlFor='dateFrom' className='text-lg'>
							From:
						</label>
						<input
							type='date'
							name='jobDateFrom'
							id='dateFrom'
							className='rounded-xl py-2'
							value={this.props.val.jobDateFrom}
						/>
					</div>

					<div className='flex flex-col items-center'>
						<label htmlFor='to' className='text-lg'>
							To:
						</label>
						<input
							type='date'
							name='jobDateTo'
							id='dateTo'
							className='rounded-xl py-2'
							value={this.props.val.jobDateTo}
						/>
					</div>
				</div>
			</div>
		);
	}
}
