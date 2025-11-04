import { useCallback, useEffect, useRef, useState, useTransition } from "react";
// import Modal from "../components/Modal";
import Product from "../components/Product";
import ErrorBoundary from "../components/ErrorBoundary";

const Products = () => {
  const [products, setProducts] = useState<Array<any>>([]);
  const [query, setQuery] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  // const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // const modalRef = useRef<any>(null);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      if (value.trim() === "") {
        fetchProducts();
      } else {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        );
        setProducts(filteredProducts);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
