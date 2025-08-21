
import { serviceBase } from "./service-base";
// all api calls are put under this service class
export class ProductService extends serviceBase {

    // fetch products
  static getProducts = async () => {
    const response = await fetch(`${this.API_URL}/products`, {
    next: { revalidate: 60 },
    });
    const data = await response.json();
    return data;
  };
// fetch single product by id
  static getProductById = async (id:number)=>{
    const productresponse = await fetch(`${this.API_URL}/products/${id}`, {
    next: { revalidate: 60 },
  })
     const product = await productresponse.json()
    return product;
  }
}
