import React from 'react'
import styles from './Product.module.css'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {
  setBasket,
} from '../../../../slices/storeSlice';
import {
  useDispatch,
} from 'react-redux';


const Product = ({ prdct }) => {
  const dispatch = useDispatch()

  return (
    <Col>
      <Card className={styles.card}>
        <Card.Img variant="top" src={prdct.img} className={styles.img} />
        <Card.Body >
          <Card.Title>{prdct.name}</Card.Title>
          <Card.Text className={styles.text}>
            {prdct.info}
          </Card.Text>
          <Card.Text>{prdct.price}₽</Card.Text>
        </Card.Body>
        <Card.Footer className={styles.footer}>
          <FontAwesomeIcon
            id={prdct.id}
            className={styles.icon}
            icon={faCirclePlus} size="xl"
            onClick={() =>  dispatch(setBasket(prdct))}
          />
          В корзину
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Product