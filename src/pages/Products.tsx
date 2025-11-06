import { useState } from "react";
import Product from "../components/Product";
import ErrorBoundary from "../components/ErrorBoundary";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();

  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <ErrorBoundary>
      <div className="p-4">
        <h1>Products Page</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-full mb-4 rounded"
          value={query}
          onChange={handleInputChange}
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
          {products.map((product) => (
            <div key={product.id}>
              <ErrorBoundary>
                <Product key={product.id} {...product} />
              </ErrorBoundary>
            </div>
          ))}
          {/* <Modal ref={modalRef} title={selectedProduct?.title} /> */}
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Products;
