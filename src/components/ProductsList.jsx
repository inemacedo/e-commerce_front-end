import Product from "./Product";

function ProductsList({ list }) {
  return (
    <div className="mx-5">
      <h2 className="fs-5 text-center my-4"> DESTACADOS</h2>
      <div className="row g-5">
        <div className="col-md-4">
          <Product />
        </div>
        <div className="col-md-4">
          <Product />
        </div>
        <div className="col-md-4">
          <Product />
        </div>
      </div>
      <button type="button" class="btn btn-dark rounded-pill py-2 px-5 mt-4">
        Ver Todos
      </button>
    </div>
  );
}

export default ProductsList;
