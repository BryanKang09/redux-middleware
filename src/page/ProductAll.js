import React, {useEffect, useState} from 'react'
import ProductCard from '../component/ProductCard'
import { Container , Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

  const [productList,setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts= async ()=>{
    let keyword = query.get("q") || "";
    let url=`https://my-json-server.typicode.com/BryanKang09/json-server/products?q=${keyword}`;

    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);

  }

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row >
          {productList.map((menu)=>
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          )}

        </Row>
      </Container>
      <h1> all products</h1>
      
    </div>
  )
}

export default ProductAll
