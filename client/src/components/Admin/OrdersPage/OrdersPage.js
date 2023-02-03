import React, { useEffect } from 'react'
import styles from './OrdersPage.module.css'
import { Accordion, Badge, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders, selectOrders } from '../../../slices/adminSlice'
import { useNavigate } from 'react-router-dom'

const OrdersPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allOrders = useSelector(selectOrders)

    const newOrders = allOrders.filter(order => order.status === 'pending');
    const processedOrders = allOrders.filter(order => order.status === 'process');
    const cancelOrders = allOrders.filter(order => order.status === 'cancel');
    const deliveredOrders = allOrders.filter(order => order.status === 'done');

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="1">
                <Accordion.Header >
                    Новые заказы
                    <Badge bg="primary" className={styles.newOrdersBadge}>{newOrders.length}</Badge>
                </Accordion.Header>
                <Accordion.Body>
                    <Table hover className={styles.tables}>
                        <thead>
                            <tr>

                                <th>№</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newOrders.map(order =>
                                <tr key={order.id} onClick={() => navigate(`/admin/order/${order.id}`)}>
                                    <td>{order.id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerPhone}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Подтвержденные заказы</Accordion.Header>
                <Accordion.Body>
                    <Table hover >
                        <thead>
                            <tr>

                                <th>№</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processedOrders.map(order =>
                                <tr key={order.id} onClick={() => navigate(`/admin/order/${order.id}`)}>
                                    <td>{order.id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerPhone}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Доставленные заказы</Accordion.Header>
                <Accordion.Body>
                    <Table hover >
                        <thead>
                            <tr>

                                <th>№</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deliveredOrders.map(order =>
                                <tr key={order.key} onClick={() => navigate(`/admin/order/${order.id}`)}>
                                    <td>{order.id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerPhone}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Отмененные заказы</Accordion.Header>
                <Accordion.Body>
                    <Table bordered hover >
                        <thead>
                            <tr>

                                <th>№</th>
                                <th>Заказчик</th>
                                <th>Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cancelOrders.map(order =>
                                <tr key={order.key} onClick={() => navigate(`/admin/order/${order.id}`)}>
                                    <td>{order.id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerPhone}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default OrdersPage