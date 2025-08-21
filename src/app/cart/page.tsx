'use client'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import styles from '../styles/cart.module.css'
import { AppDispatch } from "../store/store";
import { selectCart, clearCart } from '../store/CartSlice'

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(selectCart);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center p-4 rounded shadow-sm">
          Your cart is empty. 🛍️ Add some products!
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((prod) => (
              <div className="col-md-6 col-lg-4 mb-4" key={prod.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 product-card">
                  <Image
                    className={`${styles.productImg} card-img-top p-3`}
                    src={prod.image}
                    alt={prod.title}
                    width={300}
                    height={300}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text text-muted">Price: ₹{prod.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button 
              className="btn btn-danger px-5 py-2 rounded-pill clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              🧹 Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}
