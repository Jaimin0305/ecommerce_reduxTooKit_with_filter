import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    
        filterproducts:[],
        filterdatas:[]

}

const filterSlice = createSlice({
    
    name:"filterslice",
    initialState,
    reducers:{
        filterbyall:(state,action) =>{
            state.filterproducts = action.payload
            console.log(state.filterproducts) 
        },
        filterbycategory:(state,action) =>{
            const element =  state.filterproducts.filter((item) => item.productCategory === action.payload);
            console.log(state.filterproducts)
            state.filterdatas = element
        }
    }
})
export const {filterbyall,filterbycategory} = filterSlice.actions;

export default filterSlice.reducer;