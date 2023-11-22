import { Button, Col, Container, Form, Row, useAccordionButton } from 'react-bootstrap';
import Header from './componant/Header.js';
import Item from './componant/Item.js';
import "./componant/app.css"
import axios from "axios"
import ItemList from './componant/itemList.js';
import { useEffect, useState } from 'react';
import PaginationComponant from './componant/pagination.js';
import {BrowserRouter,Routes,Route, Router} from"react-router-dom"
import Details from './componant/details.js';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import { AllMovies } from './redux/actions/actions.js';
import { useDispatch ,useSelector} from 'react-redux';


function App() {
 
  const [pageCount,setpageCount]=useState()
  const dispatch =useDispatch();
  // const getData= async()=>{
    
  //   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=54f949a3d833ac2a7c12b74e5562bab5&&language=ar")
  //   setmovie(res.data.results)
  //   setpageCount(res.data.total_pages)
  
  
  // }
 
 useEffect(()=>{
dispatch(AllMovies())

 },[])

 
  
  const getpage= async(page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=54f949a3d833ac2a7c12b74e5562bab5&&language=ar&&page=${page}`)
 
  }
  
 

 return(
  <div>
      <Header></Header>
      <Container className='my-3'>
        <BrowserRouter>
       <Routes>
      <Route path='/' element={  <Zoom> <ItemList></ItemList>    </Zoom> }></Route>
       <Route path='/movie/:id'  element={<Details></Details>}></Route>
       </Routes>
        </BrowserRouter>
     
      </Container>
      <Container >
      <PaginationComponant getpage={getpage} pageCount={pageCount}></PaginationComponant>
      </Container>
      

  </div>

 )
  ;
}

export default App;
