import ProductComponent from "./ProductComponent";

function ProductsList({ list }) {
  return (
    <div className="mx-5">
      <div className="container">
        <h2 className="fs-5 text-center mt-5 mb-4 fw-bold"> DESTACADOS</h2>
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
            class="btn btn-dark rounded-pill py-2 px-5 my-5"
          >
            Ver Todos
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
