import axios from "axios";
import bannerSlice from "./bannerSlice";

const action = bannerSlice.actions;

export default function bannerMiddleware(){
    return async function(dispatch){
       try{
        dispatch(action.setLoading());
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346');
         dispatch(action.setBanner(res.data.results));
       // dispatch(action.setBanner(res.data.results[Math.floor(Math.random() * 20)]));
       }
       catch(error){
           dispatch(action.setError());
       }
    }
}