import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div> 
             <div className="navbar bg-base-100 container mx-auto p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={''}>Home</Link></li>
                            <li><Link href={''}>Menu</Link></li>
                            <li><Link href={''}>About</Link></li>
                            <li><Link href={''}>Contact</Link></li>
                            {/* <li><Link className='bg-orange-600 text-white px-6 py-2 rounded-full' href={''}>Login</Link></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-orange-600 font-semibold text-2xl">FOODY MOODY</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-gray-600">
                        <li><Link href={''}>Home</Link></li>
                        <li><Link href={''}>Menu</Link></li>
                        <li><Link href={''}>About</Link></li>
                        <li><Link href={''}>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <button className='bg-orange-600 text-white px-6 py-2 rounded-full'>Login</button>
                </div>

            </div>
        </div>
    );
};

export default Header;