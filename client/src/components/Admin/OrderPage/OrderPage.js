import React, { useEffect } from 'react'
import styles from './OrderPage.module.css'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrder, selectOrder } from '../../../slices/adminSlice'

const OrderPage = () => {
  const order = useSelector(selectOrder)
  const dispatch = useDispatch()
  const { id } = useParams()
  // const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getOrder(id))
  }, [dispatch, id])

  return (
    <><Table className={styles.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>Заказчик</th>
          <th>Телефон</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={() => { }} className={styles.order}>
          <td>{order?.id}</td>
          <td>{order?.customerName}</td>
          <td>{order?.customerPhone}</td>
          <td>{order?.comment}</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default OrderPage