import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-blue-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 py-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        The Elite
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    activeClassName="text-blue-100 bg-blue-500"
                    >
                        Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    activeClassName="text-blue-100 bg-blue-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    activeClassName="text-blue-100 bg-blue-500"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://linkedin.com" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
