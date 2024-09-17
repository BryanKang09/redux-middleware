import React from 'react'
import { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  // api
  let {id} = useParams();
  let [product,setProduct] = useState(null)
  const getProductDetail = async ()=>{
    let url = `https://my-json-server.typicode.com/BryanKang09/json-server/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setProduct(data);

  }


  useEffect(()=>{
    getProductDetail();
  },[]);

  return (
    <Container>
      <Row>        
        <Col className='productImage'>
          <img  src = {product?.img}></img>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          {/* <div>{product?.de}</div> */}
        
        </Col>
      </Row>

    </Container>
  )
}

export default ProductDetail
