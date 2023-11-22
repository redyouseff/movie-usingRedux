import { ACTION } from "../types/types.js"
import axios from "axios"
import { MovieApi } from "../types/types.js"
export  const AllMovies= ()=>{

    return async (dispatch) => {
        const res = await axios.get(MovieApi)
     
        dispatch( {type:ACTION,data:res.data.results,pageCount:res.data.total_pages})
    }
   
}


export const MovieSearch = (word)=>{
    return async (dispatch)=>{
         
     const arr= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=54f949a3d833ac2a7c12b74e5562bab5&language=ar`)
     dispatch({type:ACTION,data:arr.data.results,pageCount:arr.data.total_pages})  
    
}

}



 export  const getpage = (page)=>{
    return async (dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=54f949a3d833ac2a7c12b74e5562bab5&&language=ar&&page=${page}`)
            dispatch({type:ACTION,data:res.data.results,pageCount:res.data.total_pages})

    }

  }

