
export function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM_CART":
      return [...cart, action.payload];
    case "REMOVE_ITEM_CART":
      return cart;
    default:
      return cart;
  }
}


export default cartReducer;