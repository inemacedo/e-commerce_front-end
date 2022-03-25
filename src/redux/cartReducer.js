
export function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_ITEM_CART":{
      // Si el id es distinto, agrego el elem nuevo, de lo contrario sumo una unidad
      // for (const item of cart) {
      //   if(item.id === action.payload.id){
      //     // Sumo una unidad
      //     item.units += 1;
      //   }
      //   else{
      //     // Agrego el item nuevo
      //   }
      // }
      return [...cart, ...action.payload];
      
    }
    case "REMOVE_ITEM_CART":
      return cart;
    default:
      return cart;
  }
}


export default cartReducer;