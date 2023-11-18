import React from 'react'
import '../Footer/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <span>Medicines</span>
                    <span>SkinCare</span>
                    <span>Personal Care</span>

                </div>
                <div className='item'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='item'>
                    <h1>About Us</h1>
                    <span>
                        At Mediquick, we understand the importance of easy access to essential healthcare products and personal care items. Our mission is to provide a convenient and reliable e-commerce platform that empowers individuals to take control of their health and well-being.
                    </span>
                </div>
                <div className='item'>
                    <h1>Contact</h1>
                    <span>
                        Order Assistance
                        For any questions related to your orders, shipping, or returns, our Order Assistance team is here to help. You can contact them through:


                        Email: If you need personalized assistance regarding your order, send us an email at orders@mediquick.com. Please include your order number for faster assistance.
                    </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>MEDIQUICK.com</span>
                    <span className='copyright'>
                        © Copyright 2025. All Right Reserved
                    </span>
                </div>
                <div className='right'>
                    <img src='/img/payment.png' alt='unable to load' />
                </div>
            </div>
        </div>
    )
};

export default Footer;
