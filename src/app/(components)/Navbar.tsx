'use client'
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";


function Navbar() {


  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg sticky-top`}>
      <div className="container">
        {/* Brand */}
        <Link
          href="/"
          className={`navbar-brand d-flex align-items-center 
          }`}
        >
          <Image
            className={styles.logo}
            src="/assets/images/logo/logo.png"
            width={40}
            height={40}
            alt="Logo"
          />
          <span className={styles.brandName}>MallMitra</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/products"
                className={` nav-link ${styles.link}  
                }`}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact-us"
                className={`nav-link ${styles.link} 
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about-us"
                className={` nav-link ${styles.link}
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/cart"
                className={`nav-link ${styles.cartIcon}  position-relative 
                }`}
              >
                <i className="bi bi-cart3 fs-5"></i>
                <span className={styles.cartBadge}>2</span>
              </Link>
            </li>
          </ul>

          {/* Search box */}
          <form className="d-flex ms-lg-3 mt-2 mt-lg-0" role="search">
            <input
              className={`form-control ${styles.searchInput}`}
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className={`btn ${styles.searchBtn}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
