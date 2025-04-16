import { useEffect, useState } from 'react';  
import { Row, Col } from 'react-bootstrap'; 
import Product from '../components/Products'; 

import axios from 'axios';
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        console.log('Gelen veri:', data); // Burası konsola veri basmalı
        setProducts(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error.message);
      }
    };
    fetchProducts();
  }, []);
  
  

  return (
    <>
      <h1>Latest Products</h1>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
