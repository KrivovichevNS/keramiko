import { Container, Col, Row, Table, Accordion } from 'react-bootstrap'
import styles from './BasketPage.module.css'
import { useSelector } from 'react-redux'
import {
    selectBasket,
} from '../../slices/storeSlice';
import TriggerExample from './Tooltip';
import TriggerExampleProduct from './TooltipProduct';
import { LinkContainer } from 'react-router-bootstrap';

const BasketPage = () => {
    const basket = useSelector(selectBasket)
    const totalPrice = basket?.reduce((acc, el) => acc += +el.price, 0)
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto"><h1 className={styles.basketTable}>Ваш заказ:</h1></Col>
                <Col xs lg="2">
                </Col>
            </Row>
            <Row >
                <Container className={styles.cont}>
                    {basket.length ? <TriggerExample /> : null}
                    {basket.length
                        ?
                        <Table size='sm'>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th></th>
                                    <th>Товар</th>
                                    {/* <th></th> */}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket?.map((el, i) =>
                                    <LinkContainer to={`/product/${el.id}`}>
                                        <tr key={i} className={styles.table}>
                                            <td>{i + 1}.</td>
                                            <td colSpan={2} className={styles.imgtable}><img className={styles.miniimg} src={el.img} alt=''></img></td>
                                            <td>{el.name}</td>
                                            {/* <td>{el.info}</td> */}
                                            <td>{el.price}₽</td>
                                            <td>
                                                <TriggerExampleProduct id={el.id} />
                                            </td>
                                        </tr>
                                    </LinkContainer>
                                )}
                                <tr className={styles.tableItog}>
                                    <td colSpan={3}>Итоговая сумма:</td>
                                    <td >{totalPrice}₽</td>
                                    <td >Оформить заказ</td>
                                </tr>
                            </tbody>
                        </Table>


                        : <div className={styles.noProducts}>В корзине нет товаров</div>}
                </Container>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    )
}

export default BasketPage