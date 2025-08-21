import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">

            {/* Brand Info */}
            <div className="col-md-4 mb-4">
              <h4 className="text-warning">MallMitra</h4>
              <p>
                Your trusted e-commerce partner for daily essentials, gadgets, fashion, and more.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white fs-5">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white fs-5">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white fs-5">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white fs-5">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link href="/products" className="text-white text-decoration-none">Products</Link></li>
                <li><Link href="/about-us" className="text-white text-decoration-none">About Us</Link></li>
                <li><Link href="/contact-us" className="text-white text-decoration-none">Contact</Link></li>
                <li><Link href="/cart" className="text-white text-decoration-none">Cart</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <p>Email: support@mallmitra.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Location: Mumbai, India</p>
            </div>
          </div>

          <hr className="border-top border-light" />
          <p className="text-center mb-0 small">
          <strong>MallMitra</strong>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
