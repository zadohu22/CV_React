import React from 'react';
import ReactDOM from 'react-dom/client';
// import Structure from './Structure';
// import GeneralInfo from './GeneralInfo';
// import Education from './Education';
// import WorkHistory from './WorkHistory';
// import Wrapper from './Wrapper';
// import FormWrapper from './FormWrapper';
import Form from './Form';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<div
			id='container'
			className='flex w-full h-full justify-center items-center bg-blue-200'
		>
			<Form />
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
