import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <>
            <img src={logo} alt='logo' />
        </>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{

    },[isLoggedIn])
    return (
        <>
            <div className='flex bg-black w-full h-20 text-white p-4 justify-between'>
                <Title />
                <div className='flex items-center'>
                    <ul className='flex'>
                        
                        <Link to='/'><li className='p-4 cursor-pointer'>Home</li></Link>
                        <Link to='/about'><li className='p-4 cursor-pointer'>About</li></Link>
                        <Link to='/contact'><li className='p-4 cursor-pointer'>Contact</li></Link>
                        
                        <li className='p-4 cursor-pointer'>Cart</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    {isLoggedIn ? (
                        <button className='mx-4 my-auto' onClick={() => setIsLoggedIn(false)}>
                            Logout
                        </button>
                    ) : (
                        <button className='mx-4 my-auto' onClick={() => setIsLoggedIn(true)}>
                            Login
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
