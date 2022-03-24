import ProductComponent from "./ProductComponent";
import "../styles/ProductList.css";

function ProductsList({ list }) {
  return (
    <div className="mx-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-4">
            <ProductComponent />
          </div>
          <div className="col-md-4">
            <ProductComponent />
          </div>
          <div className="col-md-4">
            <ProductComponent />
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-dark rounded-pill py-2 px-5 mt-4 fw-bold button-home"
          >
            Ver Todos
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
