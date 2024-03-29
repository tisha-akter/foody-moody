"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

     async function handleFromSubmit(ev){
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
       const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password, confirmPassword, terms}),
            headers: {'Content-Type': 'application/json'},
        });

        console.log("resss", response);

        if (response.ok) {
            setUserCreated(true);
          }
          else {
            setError(true);
          }
          setCreatingUser(false);
    }

    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                    Foody Moody
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>

                        {userCreated && (
                    <div className="my-4 text-center">
                        User created.<br />
                        Now you can{' '}
                    <Link className="underline" href={'/login'}>Login &raquo;</Link>
                   </div>
                   )}
                   {error && (
                    <div className="my-4 text-center">
                     An error has occurred.<br />
                      Please try again later
                    </div>
                     )}

                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={(ev) => handleFromSubmit(ev)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" value={email}
                                onChange={ev => setEmail(ev.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password}
                                onChange={ev => setPassword(ev.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" value={confirmPassword}
                                onChange={ev => setConfirmPassword(ev.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" value={terms}
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800"  />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-orange-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                            <div className="w-full text-center my-4">
                                <p className="mb-5 text-gray-500">or create with google</p>
                                <div className="">
                                    <button className="btn btn-circle text-xl mx-2">
                                        <FaGoogle className="text-red-600"></FaGoogle>
                                    </button>
                                </div>
                            </div>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="login" className="font-medium text-orange-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Register;