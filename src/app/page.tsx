import React from 'react'
import styles from '../app/styles/home.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
 
  const offers = [
    {
      id: 1,
      title: "50% Off on Electronics",
      description: "Grab best deals on top electronics!",
      image:
        "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg",
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      description: "Trendy styles at affordable prices.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000",
    },
    {
      id: 3,
      title: "Kitchen Essentials",
      description: "Up to 40% off on daily needs.",
      image:
        "https://bergnerhome.in/cdn/shop/articles/Header-Banner-1.png?v=1718542473&width=2048",
    },
  ];

  const categories = [
    { img: "/assets/images/grocery.webp", label: "Grocery" },
    { img: "/assets/images/mobile.png", label: "Mobile" },
    { img: "/assets/images/fashion.png", label: "Fashion" },
    { img: "/assets/images/electronics.png", label: "Electronics" },
    { img: "/assets/images/home furniture.jpg", label: "Home & Furniture" },
    { img: "/assets/images/appliances.jpg", label: "Appliances" },
    { img: "/assets/images/toys.png", label: "Beauty & Toys" },
  ];

  return (
    <>
   
      {/* ===== CATEGORY MENU BAR ===== */}
      <section className={styles.menubar}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.menuItem}>
            <div className={styles.iconWrapper}>
              <Image 
                src={cat.img} 
                alt={cat.label} 
                width={80} 
                height={80} 
              />
            </div>
            <span>{cat.label}</span>
          </div>
        ))}
      </section>

      {/* ===== HERO SECTION ===== */}
      <section className="container-fluid p-0">
        <div className="position-relative text-center text-dark">
          {/* Image container with fixed height */}
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/assets/images/hero/4276679.jpg"
              alt="Hero"
              width={1920}
              height={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(80%)",
              }}
            />
          </div>

          <div className="position-absolute top-50 start-50 translate-middle">
            <p className="lead fw-bold mb-4">Best products at the best price</p>
            <Link
              href="/products"
              className="btn btn-warning btn-lg shadow rounded-pill px-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OFFERS ===== */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">🔥 Exclusive Offers</h2>
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow offer-card">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
