"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import styles from "../styles/productlist.module.css";
import Productcard from "../(components)/Productcard";
import { fetchProducts, selectProducts } from "../store/ProductSlice";

type Brand = {
  id: number;
  name: string;
};
export default function ProductsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loadingbrand, setLoadingBrands] = useState(true);

  const fetchBrands = async () => {
    try {
      const res = await fetch("/api/brands");
      const data: Brand[] = await res.json();
      console.log("Fetched brands:", data);
      setBrands(data);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoadingBrands(false);
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    const loadData = async () => {
      await fetchBrands();
      dispatch(fetchProducts());
    };
    loadData();
  }, [dispatch]);



  return (
    <>
      <h2 className={styles.heading}>🛍️ Shop Your Favorite Products</h2>
      <div className={styles.productGrid}>
        {products.map((prod) => (
          <Productcard key={prod.id} product={prod} />
        ))}
      </div>
      <div>
        <h2 className={styles.heading}>🔥 Top Brands</h2>
        {loadingbrand ? (
          <p>Loading brands...</p>
        ) : (
          <div className={styles.brandsGrid}>
            {brands.map((brand) => (
              <div key={brand.id} className={styles.brandCard}>
                <p className={styles.brandName}>{brand.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
