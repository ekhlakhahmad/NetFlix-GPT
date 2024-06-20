import React from 'react'
import './Navbar.css'
import netflixLogo from '../../assets/Netflix-Logo.png'
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaRegBell, FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
		<div className="navbar">
			<div className="navbar-left">
				<img src={netflixLogo} alt="" />
				<ul>
					<li>Home</li>
					<li>Tv Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
					<li>Browse by Language</li>
				</ul>
			</div>
          <div className="navbar-right">
              <CiSearch/>
              <p>children</p>
              <FaRegBell/>
              <div className="navbar-profile">
                  <FaRegUserCircle/>
                  <FaCaretDown/>
              </div>
            </div>
		</div>
	);
}

export default Navbar
