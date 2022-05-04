import React from 'react';
import './SocialLogin.css';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <button className='w-100 social-button p-2 fw-bold'><FcGoogle className='me-2' />Google signIn</button>
            </div>
            <div className='d-flex align-items-center'>
                <div className='or-style'></div>
                <p className='mt-2 m-2'>OR</p>
                <div className='or-style'></div>
            </div>

        </div>
    );
};

export default SocialLogin;