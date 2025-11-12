import ProductComponent from "../components/ProductComponent";
import ErrorBoundary from "../components/ErrorBoundary";
import useProducts from "../hooks/useProducts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setQuery } from "../store/reducers/productsReducer";
import { Fragment } from "react/jsx-runtime";

const Products = () => {
  const { products, loading } = useProducts();

  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.products.query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            <Fragment key={product.id}>
              <ErrorBoundary>
                <ProductComponent key={product.id} product={product} />
              </ErrorBoundary>
            </Fragment>
          ))}
          {/* <Modal ref={modalRef} title={selectedProduct?.title} /> */}
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Products;
