import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[],
    cartTotalQnty:0,    
}
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            // state.carts= [...state.carts,action.payload]

            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if(ItemIndex >=0){
                state.carts[ItemIndex].qnty += 1 
            }else{
                const temp ={...action.payload, qnty:1}
                state.carts =[...state.carts, temp]
            }

        },
        decreaseqty:(state,action) =>{
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[ItemIndex_dec].qnty>=1){
                state.carts[ItemIndex_dec].qnty -=1
            }

        },
        removeFromCart:(state,action) =>{
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            state.carts = data
        },
        emptyCart:(state,action) =>{
            state.carts = []  
        }
    }

})

export const {addToCart,decreaseqty,removeFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;