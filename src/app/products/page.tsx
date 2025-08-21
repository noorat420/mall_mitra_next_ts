"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import styles from "../styles/productlist.module.css";
import Productcard from "../(components)/Productcard";
import {
  fetchProducts,
  selectProducts,
  selectLoading,
  selectError,
} from "../store/ProductSlice";
import Loading from './loading'; 

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p className={styles.error}>⚠️ {error}</p>;

  return (
    <>
      <h2 className={styles.heading}>🛍️ Shop Your Favorite Products</h2>
      <div className={styles.productGrid}>
        {products.map((prod) => (
          <Productcard key={prod.id} product={prod} />
        ))}
      </div>
    </>
  );
}
