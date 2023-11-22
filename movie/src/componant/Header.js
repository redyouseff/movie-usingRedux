import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import "./app.css"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AllMovies } from '../redux/actions/actions';
import { MovieSearch } from '../redux/actions/actions';
const Header=()=>{
  const dispatch =useDispatch();
  
    const doChange=(word)=>{
       search(word)

    }
    const search= (word)=>{
      if(word===""){
        dispatch(AllMovies())
        
       
      }
      else{
        dispatch(MovieSearch(word))

      }
      
  
    }





    return(
        <Row>
        <div className='head' >
          <Container className='my-4 '>
         <Form >
          <div className=''>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Col sm="12" className='text-center'>
          <Form.Control onChange={(e)=>{doChange(e.target.value)}} type="text" placeholder="اسم الفيلم" />
          </Col>
         
         
        
          
        </Form.Group>
       
        </div>
      </Form>
      </Container>
      </div>
       </Row>
    )
}
export default Header;