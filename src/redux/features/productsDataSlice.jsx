import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("productdatas", async ()=>{
    const res = await fetch("https://dummyapi.online/api/products")
    const result = res.json();
    return result;
})

export const productsDataSlice = createSlice({
    name:"productdata",
    initialState:{
        isLoading:false,
        products:[],
        error:false
    },
    extraReducers:(builder) =>{
        builder.addCase(getAllData.pending,(state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllData.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.products= action.payload
        });
        builder.addCase(getAllData.rejected,(state, action)=>{
            state.error = true;
        });
    },
    
});

export default productsDataSlice.reducer;