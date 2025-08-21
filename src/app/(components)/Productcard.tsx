"use client";
import React from "react";
import styles from "../styles/productcard.module.css";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "../store/CartSlice";
import { AppDispatch } from "../store/store";
import { useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import { Product } from "../store/ProductSlice";


export default function Productcard({ product }: { product:Product}) {
  const dispatch = useDispatch<AppDispatch>();
  const router=useRouter()
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={`/products/${product.id}`}>
         <Image
  className={styles.productImg}
  src={product.image}
  alt={product.title}
  width={300}
  height={300}
/>

        </Link>
      </div>

      <p className={styles.title}>{product.title}</p>
      <span className={styles.category}>{product.category}</span>
      <p className={styles.description}>{product.description}</p>

      <div className={styles.flexInfo}>
        <span className={styles.rating}>⭐ {product.rating?.rate}</span>
        <span className={styles.count}>
          ({product.rating?.count} reviews)
        </span>
      </div>

      <h3 className={styles.price}>₹ {product.price}</h3>

      <button className={styles.button}
      onClick={()=>{
      dispatch(addToCart(product))
      alert(`🛒 "${product.title}" added to cart!`);
   router.push('/cart')
      }}>🛒 Add to Cart</button>
    </div>
  );
}
