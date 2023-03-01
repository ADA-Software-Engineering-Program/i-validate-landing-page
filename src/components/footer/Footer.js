import React from 'react'
import '../header/headerFooter.css'
import Logo from '../../images/white logo 2.png'

const Footer = () => {
  return (
    <footer className='footer-landing'>
        <div className='navbar-changes mx-auto'>
            <div className='footer-info '>
            <div className='footer-details row'>
                <div className='footer-logo col-md-5 col-sm-6 ulchange'>
                    <a href={'./'}><img src={Logo} alt='Footer Logo' className='headerLogo' /></a>
                </div>
                
                    <ul className='col-md-3 col-sm-6 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Terms & Conditions</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Account</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Privacy</a></li>
                        <li><a href={"/"} className='text-decoration-none text-white'>Customer service</a></li>
                    </ul>
                    <ul className='col-md-2 col-sm-6 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Guidelines</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Blog</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>YouTube</a></li>
                        <li><a href={"/"} className='text-decoration-none text-white'>Subscribe</a></li>
                    </ul>
                    <ul className='col-md-2 col-sm-6 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Guidelines</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>Blog</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-white'>YouTube</a></li>
                        <li><a href={"/"} className='text-decoration-none text-white'>Subscribe</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-white">
                &copy; {new Date().getFullYear()} i-Validate. All right reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
