import React from 'react';
import footer from '../../assets/images/appointment.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className="footer p-10 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/about' className="link link-hover">Branding</a>
                    <a href='/about' className="link link-hover">Design</a>
                    <a href='/about' className="link link-hover">Marketing</a>
                    <a href='/about' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/about' className="link link-hover">About us</a>
                    <a href='/about' className="link link-hover">Contact</a>
                    <a href='/about' className="link link-hover">Jobs</a>
                    <a href='/about' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/about' className="link link-hover">Terms of use</a>
                    <a href='/about' className="link link-hover">Privacy policy</a>
                    <a href='/about' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p><small>Copyright © 2022 - All right reserved </small></p>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;