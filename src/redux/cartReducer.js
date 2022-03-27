export function cartReducer(state = [], action) {
  // export function cartReducer(cart = [], action) {
  switch (action.type) {
    // case "ADD_ITEM_CART": {
    //   // Si el id es distinto, agrego el elem nuevo, de lo contrario sumo una unidad
    //   const newCart = [];
    //   let found = false;
    //   for (let i = 0; i < cart.length && !found; i++) {
    //     if (cart[i].id === action.payload.id) {
    //       cart[i].units += 1;
    //       found = true;
    //     }
    //     newCart.push(cart[i]);
    //   }
    //   if (!found) {
    //     action.payload.units = 1;
    //     newCart.push(action.payload);
    //   }
    //   return newCart;
    // }

    case "ADD_ITEM_CART":
      return [
        ...state,
        action.payload, // viene la info dsde el componente
      ];

    case "REMOVE_ITEM_CART":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

export default cartReducer;
