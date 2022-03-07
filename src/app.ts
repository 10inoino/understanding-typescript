import { Product } from "./product.model";

const products = [
  { title: "商品1", price: 100 },
  { title: "商品2", price: 200 },
];

// const p1 = new Product("商品1", 100);

const loadedProducts = products.map(prod => {
  return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}