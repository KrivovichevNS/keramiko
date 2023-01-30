// import React, { useEffect, useRef } from 'react'
import { Container, Col, Row, ListGroup } from 'react-bootstrap'
import styles from './BasketPage.module.css'
import { useSelector } from 'react-redux'
import {
    selectBasket,
} from '../../slices/storeSlice';
import TriggerExample from './Tooltip';

const BasketPage = () => {
    const basket = useSelector(selectBasket)
    const totalPrice = basket?.reduce((acc, el) => acc += +el.price, 0)
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto">Корзина</Col>
                <Col xs lg="2">
                </Col>
            </Row>
            <Row >
                <Container className={styles.cont}>
                    {basket.length ? <TriggerExample /> : null}
                    {basket.length
                        ? <ListGroup className={styles.list}>
                            {basket?.map((el, i) =>
                                <ListGroup key={i} horizontal='sm' className={styles.li}>
                                    <ListGroup.Item className={styles.li}>{i + 1}.</ListGroup.Item>
                                    <ListGroup.Item className={styles.li}><img src={el.img} alt=''></img></ListGroup.Item>
                                    <ListGroup.Item className={styles.li}>{el.name}</ListGroup.Item>
                                    <ListGroup.Item className={styles.li}>{el.info}</ListGroup.Item>
                                    <ListGroup.Item className={styles.li}>{el.price}₽</ListGroup.Item>
                                    {/* <ListGroup.Item className={styles.li}>{el.number}</ListGroup.Item> */}
                                </ListGroup>
                            )}
                            <ListGroup horizontal='sm' className={styles.total}>
                                <ListGroup.Item className={styles.li}>Total price</ListGroup.Item>
                                <ListGroup.Item className={styles.li}>{totalPrice}₽</ListGroup.Item>
                            </ListGroup>
                        </ListGroup>
                        : <div>В корзине нет товаров</div>}
                </Container>
            </Row>
        </Container>
    )
}

export default BasketPage