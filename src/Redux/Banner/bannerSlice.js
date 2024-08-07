import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name:"bannerSlice",
    initialState:{
        banner:[],
        loading:true,
        error: false,
    },
    reducers:{
        setError:(state)=>{
            state.error=true;
            state.loading=false;
            state.banner=[];
        },
        setLoading:(state)=>{
           state.loading=true;
           state.error=false;
           state.banner=[];
        },
        setBanner:(state,action)=>{
            state.loading=false;
            state.error=false;
            state.banner=action.payload;
        }
    }
})
export default bannerSlice;