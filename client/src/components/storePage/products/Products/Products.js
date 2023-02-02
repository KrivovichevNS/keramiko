import React from 'react'
import { Row, Container } from 'react-bootstrap'
import styles from './Products.module.css'
import CategoriesPage from '../../categoriesPage/CategoriesPage';
import Product from '../Product/Product';

// Категории нужны: чашки, тарелки, вазы, прочее

const Products = ({ categories, products }) => {
  return (
    <Container fluid>
      <CategoriesPage categories={categories} />
      <div className={styles.products}>
        <Row xs={1} md={2} lg={3} xl={5} className="g-4">
          {products?.products?.map((prdct, i) => <Product key={i} prdct={prdct} />)}
        </Row>
      </div>
    </Container>
  )

}

export default Products