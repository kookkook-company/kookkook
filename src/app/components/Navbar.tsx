'use client'
import React, { useEffect, useState } from 'react'
import { GiChickenLeg } from "react-icons/gi";

const Navbar = () => {
    const [ scrollPosition, setScrollPosition ] = useState<number>(0)
    const onScroll = () =>{        
        const position = window.pageYOffset
        setScrollPosition(position)              
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

  return (
    <div className={(scrollPosition >= 20 ? 'bg-base-100 ' : 'bg-transparent ') + " fixed transition-all duration-700 navbar top-0 z-10"}>
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                <li><a href="/">Home</a></li>
                <li><a href='/aboutus'>About us</a></li>
                <li>
                    <a>Services</a>
                    <ul className="p-2">
                        <li><a href="/category">Category 1</a></li>
                        <li><a href="/category">Category 2</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl"><GiChickenLeg className='text-3xl'/> kookkook company</a>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li><a href='/aboutus'>About us</a></li>
            <li>
                <details>
                <summary>Services</summary>
                <ul className="p-2 w-max">
                    <li><a href="/category">Category 1</a></li>
                    <li><a href="/category">Category 2</a></li>
                </ul>
                </details>
            </li>
            <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>        
    </div>
  )
}

export default Navbar