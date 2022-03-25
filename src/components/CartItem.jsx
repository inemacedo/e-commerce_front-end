
import QuantityInput from "../components/QuantityInput";


function CartItem({ title, imgUrl, price }) {

  const handleUpdateQtty = ()=>{
    console.log("Checkear si hay stock");
  };
  
  return (<><div className="d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src={imgUrl}
          className="img-fluid rounded-3"
          alt="Cotton T-shirt"
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">
          {title}
        </h6>
        <h6 className="text-black mb-0">Beige FSC 100%t</h6>
      </div>
      <div className="col-md-3 col-lg-3 d-flex">
        <QuantityInput handleUpdateQtty={handleUpdateQtty} />
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">USD {price}.00</h6>
      </div>
    </div>
    <hr />
    </>
  );
}

export default CartItem;