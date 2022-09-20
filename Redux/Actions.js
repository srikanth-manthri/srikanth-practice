export const addProductToId = (cartId) => 
(dispatch) => {
    console.log(cartId);
    dispatch ({
    type:"ADD_PRODUCT_TOCART",
    payload:{
        id :cartId,
    },
});
};
