import React, { useEffect } from 'react'
import styles from './OrderPage.module.css'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getOrder, selectOrder } from '../../../slices/adminSlice'
import OrderChanger from '../OrderChanger/OrderChanger'

const OrderPage = () => {
  const order = useSelector(selectOrder)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getOrder(id))
  }, [dispatch, id])
  const totalPrice = order?.products?.reduce((acc, el) => acc += +el.price, 0)


  return (
    <>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Заказчик</th>
            <th>Телефон</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody className={styles.bor}>
          <tr onClick={() => { }} className={styles.order}>
            <td>{order?.id}</td>
            <td>{order?.customerName}</td>
            <td>{order?.customerPhone}</td>
            <td>{order?.comment}</td>
          </tr>
        </tbody>
      </Table>
      <Table >
        <tbody>
          {order?.products?.map((el, i) => <tr className={styles.table} key={el.id}>
            <td colSpan={2} className={styles.imgtable}><img className={styles.miniimg} src={el.img} alt=''></img></td>
            <td onClick={() => navigate(`/product/${el.id}`)}>{el.name}</td>
            {/* <td>{el.info}</td> */}
            <td>{el.price}₽</td>
            <td>
            </td>
          </tr>
          )}
          <tr>
            <td className={styles.tableItog} colSpan={2}>К оплате:</td>
            <td className={styles.tableItog}>{totalPrice}₽</td>
          </tr>
        </tbody>
      </Table>
      <div className={styles.endButtons}>
        <Button variant="light" onClick={() => navigate(-1)}>Назад</Button>
        <div className={styles.in}>
          <div style={{ padding: '7px', paddingRight: '10px'}}>Изменить статус заказа</div>
          <OrderChanger order={order} />
        </div>
      </div>
    </>
  )
}

export default OrderPage