import React, { Component } from 'react';

export default class ShowCV extends Component {
	render() {
		return (
			<>
				<p>First Name: {this.props.val.firstName}</p>
				<p>Last Name: {this.props.val.lastName}</p>
				<p>Email: {this.props.val.email}</p>
				<p>Phone: {this.props.val.phone}</p>
				<p>School: {this.props.val.school}</p>
				<p>Field of study: {this.props.val.fieldOfStudy}</p>
				<p>
					Studied from: {this.props.val.studyDateFrom} to{' '}
					{this.props.val.studyDateTo}
				</p>
				<p>Company: {this.props.val.company}</p>
				<p>Job Position: {this.props.val.position}</p>
				<p>Job Tasks: {this.props.val.tasks}</p>
				<p>
					Employed from: {this.props.val.jobDateFrom} to{' '}
					{this.props.val.jobDateTo}
				</p>
			</>
		);
	}
}
