import React from 'react'
import '../header/headerFooter.css'

const Footer = () => {
  return (
    <footer className='footer-landing'>
        <div className='navbar-changes mx-auto'>
            <div className='footer-info d-flex justify-content-between'>
                <div className='footer-logo'>
                    <a href={'./'}><img src='' alt='Footer Logo' /></a>
                </div>
                <div className='footer-details row'>
                    <ul className='col-5 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Terms & Conditions</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Account</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Privacy</a></li>
                        <li><a href={"/"} className='text-decoration-none text-dark'>Customer service</a></li>
                    </ul>
                    <ul className='col-4 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Guidelines</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Blog</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>YouTube</a></li>
                        <li><a href={"/"} className='text-decoration-none text-dark'>Subscribe</a></li>
                    </ul>
                    <ul className='col-3 list-unstyled ulchange'>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Guidelines</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>Blog</a></li>
                        <li className='mb-3'><a href={"/"} className='text-decoration-none text-dark'>YouTube</a></li>
                        <li><a href={"/"} className='text-decoration-none text-dark'>Subscribe</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-4">
                <p className="">
                &copy; {new Date().getFullYear()} i-Validate. All right reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
