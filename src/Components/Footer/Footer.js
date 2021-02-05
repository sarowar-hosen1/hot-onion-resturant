import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-12">
                        <div>
                            <img style={{width:'200px', display:'block', margin:'auto'}} src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className='text-center mt-4'>
                            <ul className="list-unstyled">
                                <li>About Online food</li>
                                <li>Read our blog</li>
                                <li>Sign up to delivery</li>
                                <li>Add your Resturant</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className='text-center mt-4'>
                            <ul className="list-unstyled">
                                <li>Get Help</li>
                                <li>Read FAQ</li>
                                <li>View all site</li>
                                <li>Resturant near me</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;