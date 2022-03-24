import ProductComponent from "./ProductComponent";

function ProductsList({ products }) {
  return (
    <div className="mx-5">
      <div className="container">
        <div className="row g-5">
          {products.map((elem) => (
            <div className="col-md-4" key={elem.id}>
              <ProductComponent data={elem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
