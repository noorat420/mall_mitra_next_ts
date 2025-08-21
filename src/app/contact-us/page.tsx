"use client";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("✅ Thank you for reaching out! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className={styles.contactContainer}>
      {/* Hero Header */}
      <div className={styles.hero}>
        <h1>
          Contact <span>MallMitra</span>
        </h1>
        <p>We’d love to hear from you! Let’s stay connected.</p>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Contact Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className={styles.submitBtn}>
            ✉️ Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <p>
            <i className="bi bi-geo-alt-fill"></i> 123 Market Street, New Delhi,
            India
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> +91 98765 43210
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> support@mallmitra.com
          </p>
        </div>
      </div>
    </div>
  );
}
