import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name:"bannerSlice",
    initialState:{
        banner:[],
        bannerLoading:true,
        bannerError: false,
    },
    reducers:{
        setError:(state)=>{
            state.bannerError=true;
            state.bannerLoading=false;
            state.banner=[];
        },
        setLoading:(state)=>{
           state.bannerLoading=true;
           state.bannerError=false;
           state.banner=[];
        },
        setBanner:(state,action)=>{
            state.bannerLoading=false;
            state.bannerError=false;
            state.banner=action.payload;
        }
    }
})
export default bannerSlice;