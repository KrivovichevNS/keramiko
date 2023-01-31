import { Container, Col, Row, Table } from 'react-bootstrap'
import styles from './BasketPage.module.css'
import { useSelector } from 'react-redux'
import {
    selectBasket,
} from '../../slices/storeSlice';
import TriggerExample from './Tooltip';
import TriggerExampleProduct from './TooltipProduct';

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
                        <Table hover size='sm'>
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
                                    <tr key={i} className={styles.table}>
                                        <td>{i + 1}.</td>
                                        <td className={styles.imgtable}><img className={styles.miniimg} src={el.img} alt=''></img></td>
                                        <td>{el.name}</td>
                                        {/* <td>{el.info}</td> */}
                                        <td>{el.price}₽</td>
                                        <td>
                                            <TriggerExampleProduct id={el.id} />
                                        </td>
                                    </tr>
                                )}
                                <tr className={styles.table}>
                                    <td colSpan={3}>Итоговая сумма:</td>
                                    <td>{totalPrice}₽</td>
                                </tr>
                            </tbody>
                        </Table>


                        : <div className={styles.noProducts}>В корзине нет товаров</div>}
                </Container>
            </Row>
        </Container>
    )
}

export default BasketPage