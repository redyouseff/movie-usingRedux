import { Row } from "react-bootstrap";
import ITem from "./Item.js";
import Flip from 'react-reveal/Flip';
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllMovies } from "../redux/actions/actions.js";

const ItemList=()=>{
    const [movie,setmovie]=useState([])
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(AllMovies());
        
    
      },[])
      const dataR=useSelector(state=>state.movies)
  const pageR=useSelector(state=>state.pageCount)
  useEffect(()=>{
    setmovie(dataR)

  },dataR)

    return(
        <Row> 
                  {
                    movie.length>=1 ? (movie.map((Item)=>{
                       
                        return(
                            
                           <ITem key={movie.id} data={Item.poster_path} id={Item.id} ></ITem>
                        
                        )
                    })):null
                  }
                 
                  
        </Row>
          
     
    )
}
export default ItemList;