import styles from './BasketPage.module.css'
import { Container, Col, Row, Table, Accordion, Form, Button, FloatingLabel } from 'react-bootstrap'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectBasket, createNewOrder, selecetOrderError, clearMessages, selectOrderDone, clearError } from '../../slices/storeSlice';
import TriggerExample from './Tooltip';
import TriggerExampleProduct from './TooltipProduct';
import { useNavigate } from 'react-router-dom';


const BasketPage = () => {
    const basket = useSelector(selectBasket)
    const error = useSelector(selecetOrderError)
    const done = useSelector(selectOrderDone)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const totalPrice = basket?.reduce((acc, el) => acc += +el.price, 0)
    const nameRef = useRef()
    const phoneRef = useRef()
    const commentRef = useRef()
    // console.log(error, done, 'ERERERERERE');
    const orderOk = () => {
        navigate('/success')
        dispatch(clearMessages())
    }

    const errorType = error.split(' ')
    console.log(errorType, 'errorororororo');

    useEffect(() => {
        dispatch(clearError())
    }, [dispatch]) 

    const handleSubmit = (e) => {
        e.preventDefault()
        const orderData = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            comment: commentRef.current.value,
            totalPrice,
            basket,
        }
        dispatch(createNewOrder(orderData))
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="auto"><h1 className={styles.basketTable}>Ваш заказ:</h1></Col>
                <Col xs lg="2">
                </Col>
            </Row>
            <Row>
                <Container className={styles.cont}>
                    {/* {basket.length ? <TriggerExample /> : null} */}
                    {basket.length
                        ?
                        <Table size='sm' className={styles.table}>
                            <thead>
                                <tr>
                                    {/* <th>№</th> */}
                                    <th></th>
                                    <th>Фото</th>
                                    {/* <th></th> */}
                                    <th>Наименование</th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket?.map((el, i) => <tr className={styles.table} key={el.id}>
                                    <td></td>
                                    <td colSpan={2} className={styles.imgtable}><img className={styles.miniimg} src={el.img} alt=''></img></td>
                                    <td onClick={() => navigate(`/product/${el.id}`)}>{el.name}</td>
                                    {/* <td>{el.info}</td> */}
                                    <td>{el.price}₽</td>
                                    <td>
                                        <TriggerExampleProduct id={el.id} />
                                    </td>
                                </tr>
                                )}
                                <tr>
                                    <td className={styles.tableItog} colSpan={3}>Итого:</td>
                                    <td className={styles.tableItog}>{totalPrice}₽</td>
                                    <td className={styles.tableItog}><TriggerExample /></td>
                                </tr>
                            </tbody>
                        </Table>
                        : <div className={styles.noProducts}>В корзине нет товаров</div>}
                </Container>
                {basket.length
                    ? <Accordion className={styles.accordion}>
                        <Accordion.Item eventKey='0' className={styles.accBody} >
                            <Accordion.Header>Нажмите, чтобы оформить заказ</Accordion.Header>
                            <Accordion.Body >
                                <Form method='POST' onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>{errorType[1] === 'имя' ? <div style={{ color: 'red' }}>{error}</div> : 'Имя'}</Form.Label>
                                        <Form.Control className={styles.accInput} autoComplete='off' ref={nameRef} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>{errorType[1] === 'телефон' ? <div style={{ color: 'red' }}>{error}</div> : 'Телефон'}</Form.Label>
                                        <Form.Control className={styles.accInput} autoComplete='off' ref={phoneRef} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Почта" autoComplete='off' ref={emailRef} />
                                        <Form.Text className="text-muted">
                                            Укажите email, если хотите получить подтверждение заказа на почту
                                        </Form.Text> */}
                                    </Form.Group>
                                    <Form.Group className={styles.comment}>
                                        <FloatingLabel controlId="floatingTextarea2" label="Комментарий к заказу">
                                            <Form.Control
                                                className={styles.accInput}
                                                as="textarea"
                                                autoComplete='off'
                                                style={{ height: '100px' }}
                                                ref={commentRef} />
                                        </FloatingLabel>
                                        <Button variant="light" type="submit" className={styles.confirm}>
                                            Оформить заказ
                                        </Button>
                                    </Form.Group>
                                    {done && orderOk()}
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    : null}
            </Row>
        </Container>
    )
}
export default BasketPage