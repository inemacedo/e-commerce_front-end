import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    <div className="mx-5">
      <div className="container">
        <div className="row g-5">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
