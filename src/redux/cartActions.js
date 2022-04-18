const cartActions = {
  addItemCart: function (item) {
    return {
      type: "ADD_ITEM_CART",
      payload: item,
    };
  },
  updateCartQuantity: function (productId, quantity) {
    return {
      type: "UPDATE_CART_QUANTITY",
      payload: {
        productId,
        quantity: Number(quantity),
      },
    };
  },
  removeUnitCart: function (item) {
    return {
      type: "REMOVE_UNIT_CART",
      payload: item,
    };
  },
  removeItemCart: { type: "REMOVE_ITEM_CART" },
  clearCart: { type: "REMOVE_CART" },
};

export default cartActions;
