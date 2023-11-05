//create a function that allows a user to login into the app. 

import React, { useState } from 'react';
import Image from 'next/image';
import { LoginUser } from 'src/app/api/LoginUser';

export default function Login(){
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

   //need to fetch call to loginUser and handles the action after a user clicks on the login button
    const handleLogin = (evt) => {
        evt.preventDefault();
        const user = {
            email: userEmail,
            password: userPassword
        };
        LoginUser(user)
        .then((response) => {
            console.log(response);
            setIsLoggedIn(true);
        })
        .catch((error) => console.log('Login Error is invalid', error));
    }

    //return a form that allows a user to login into the app
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='mx-auto h-10 w-auto'>
                    <Image 
                        src="/assets/Focus-Flow-Logo.png" 
                        alt="Focus Flow logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
                </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input 
                                id="email" 
                                name="email" 
                                type="email"
                                placeholder="Enter email address"
                                value={userEmail}
                                onChange={(evt) => setUserEmail(evt.target.value)}
                                required 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label form="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input 
                                id="password" 
                                name="password" 
                                type="password"
                                placeholder="Enter password"
                                value={userPassword}
                                onChange={(evt) => setUserPassword(evt.target.value)}
                                required 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Add a log in button here  */}
                    <div>
                    <button 
                        type="submit" 
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Log in
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account? Join Focus Flow
                    
                    {/* Need to change link */}
                <a href="/login" className="font-semibold leading-6 text-[#1a1c1e] hover:bg-[#1b74e3] hover:text-white"></a>
                </p>
        </div>
    </div>
    );
}

