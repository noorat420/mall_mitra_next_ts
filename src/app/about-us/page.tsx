"use client";
import React from "react";
import styles from "../styles/aboutus.module.css";


export default function About() {
  return (
    <div className={styles.aboutContainer}>
  
      <div className={styles.hero}>
        <h1>About <span>MallMitra</span></h1>
        <p className={styles.tagline}>Empowering Your Everyday Shopping</p>
      </div>

 
      <div className={styles.section}>
        <h2>Our Story</h2>
        <p>
          <strong>MallMitra</strong> was born with a simple idea — make shopping online{" "}
          <span className={styles.highlight}>seamless, affordable, and delightful</span>.  
          From trendy fashion to reliable electronics and home essentials, we curate products
          that add value to your lifestyle.
        </p>
      </div>

 
      <div className={`${styles.section} ${styles.cards}`}>
        <div className={styles.card}>
          <h3>Our Mission</h3>
          <p>
            To simplify online shopping with affordable prices, reliable vendors,
            and smooth delivery experiences.
          </p>
        </div>

        <div className={styles.card}>
         
          <h3>Our Team</h3>
          <p>
            A passionate group of innovators, creators, and dreamers who believe in
            customer-first shopping.
          </p>
        </div>

        <div className={styles.card}>
         
          <h3>Our Promise</h3>
          <p>
            Secure payments, curated products, and customer satisfaction — every step of the way.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.closing}>
          Thank you for trusting <strong>MallMitra</strong> ❤️ <br />
          Together, let’s make every shopping experience better.
        </p>
      </div>
    </div>
  );
}
