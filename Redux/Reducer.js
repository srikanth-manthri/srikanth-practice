const IntialState = {
    addProducts:[],
    // singnUpDetails:[],
    // user:[],
};
const cartReducer = (state = IntialState,action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TOCART":
        const newItem = action.payload;
        const index = state.addProducts.find((prod) => prod.id === newItem.id);
       console.log(index);
       if(index) {
        return{
            ...state,
            addProducts:state.addProducts.map((item) =>
            item.id === newItem.id ? {...newItem,qty: item.qty +1 } : item),
            
        };
       }  
       else  {
        return {
   ...state,
   addProducts: [
    ...state.addProducts,
    {id:action.payload.id, qty: 1}
   ],
        };
       }
    }









};
    
export default cartReducer;