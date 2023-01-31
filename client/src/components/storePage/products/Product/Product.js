import React from 'react'
import styles from './Product.module.css'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {
  setBasket, selectBasket
} from '../../../../slices/storeSlice';
import {
  useDispatch, useSelector,
} from 'react-redux';
import AddTooltip from '../Tooltips/AddTooltip';
import { LinkContainer } from 'react-router-bootstrap';


const Product = ({ prdct }) => {
  const dispatch = useDispatch()
  const basket = useSelector(selectBasket)

  const checkBasket = (id) => {
    if (basket.length === 0) {
      return false
    }
    const index = basket.findIndex(e => e.id === id)
    if (index !== -1) {
      return true
    }
    return false
  }



  return (
    <Col>
      <Card className={styles.card}>
        <Card.Img variant="top" src={prdct.img} className={styles.img} />
        <Card.Body >
          <LinkContainer to={`/product/${prdct.id}`}>
          <Card.Title className={styles.cardtitle}>{prdct.name}</Card.Title>
          </LinkContainer>
          <Card.Text className={styles.text}>
            {prdct.info}
          </Card.Text>
          <Card.Text>{prdct.price}₽</Card.Text>
          {/* <small className="text-muted" style={{ padding: "0", margin: "0" }}>В наличии: {prdct.number} шт.</small> */}
        </Card.Body>
        <Card.Footer className={styles.footer}>
          {prdct.number !== 0
            ? checkBasket(prdct.id)
              ? <AddTooltip />
              : <>
                <FontAwesomeIcon
                  id={prdct.id}
                  className={styles.icon}
                  icon={faCirclePlus} size="xl"
                  onClick={() => dispatch(setBasket(prdct))} />
                <p>В корзину </p>
              </>
            : <div>Нет в наличии 😟</div>
          }
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Product