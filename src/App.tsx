import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./products.js";

function App() {
  return (
    <>
      {PRODUCTS.map((product: any) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  );
}

export default App;
