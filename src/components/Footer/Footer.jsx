import React from 'react'
import './Footer.css'
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-icons">
				<BsYoutube />
				<ImInstagram />
				<FaFacebook />
				<BsWhatsapp />
			</div>
			<div>
				<ul>
					<li>Audio Description</li>
					<li>Help Center</li>
					<li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Privacy</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>Jobs</li>
					<li>Terms of Use</li>
					<li>Cookie Preferences</li>
					<li>Contact Us</li>
					<li>Legal Notices</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer
