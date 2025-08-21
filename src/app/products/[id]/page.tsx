import { ProductService } from '../../../services/product-service'
import React from "react";
import Image from 'next/image';
import type { Metadata } from "next";

type ProductPageProps = {
  params: Promise<{ id: string }>; 
};


export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
   const { id } = await params;
  if (id) {
    const product = await ProductService.getProductById(Number(id));
    return {
      title: product.title,
    };
  }
  return {
    title: "Product Detail page",
  };
}

export default async function productDetailPage(
  { params }: ProductPageProps
) {
   const { id } = await params;
  console.log("Product ID:", id);
  const product = await ProductService.getProductById(Number(id));

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 rounded-5 border-0 bg-light">
        <div className="row g-4 align-items-center">
          
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <Image
              src={product.image}
              alt={product.title}
              className="img-fluid rounded-4 border border-secondary p-2"
              style={{ maxHeight: "350px", objectFit: "contain" }}
              width={350}
              height={350}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold text-dark mb-3">{product.title}</h2>
            <p className="text-muted mb-4">{product.description}</p>
            <p className="fw-semibold fs-4 text-success mb-4">
              Price: ₹{product.price}
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-success btn-lg">Buy Now</button>
              <button className="btn btn-outline-primary btn-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
