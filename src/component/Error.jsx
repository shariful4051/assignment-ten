import React from 'react';
import ErrorPage from '../../src/assets/App-Error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='max-w-[1140px] mx-auto flex flex-col gap-5'>
            <img className='mx-auto' src={ErrorPage} alt="" />
            <Link to='/' className='btn btn-secondary'>Go Back</Link>
        </div>
    );
};

export default Error;