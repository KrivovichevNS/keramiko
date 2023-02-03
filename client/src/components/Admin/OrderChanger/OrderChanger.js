import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeOrderStatus, selectColor } from '../../../slices/adminSlice';


const OrderChanger = ({ order }) => {
       const dispatch = useDispatch()
    const getRuStatus = (st) => {
        if (st === 'pending') {
            return 'новый'
        }
        if (st === 'process') {
            return 'подтвержден'
        }
        if (st === 'cancel') {
            return 'отменен'
        }
        if (st === 'done') {
            return 'доставлен'
        }

    }
    const handlerChanger = (e) => {
        e.preventDefault()
        dispatch(changeOrderStatus({ id: order.id, status: e.target.id }))
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant='light' id="dropdown-basic">
                {getRuStatus(order.status)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <form method='PUT'>
                    <Dropdown.Item onClick={(e) => handlerChanger(e)} type='submit' id='pending'>новый</Dropdown.Item>
                </form>
                <form method='PUT'>
                    <Dropdown.Item onClick={(e) => handlerChanger(e)} type='submit' id='process'>подтвержден</Dropdown.Item>
                </form>
                <form method='PUT'>
                    <Dropdown.Item onClick={(e) => handlerChanger(e)} type='submit' id='cancel'>отменен</Dropdown.Item>
                </form>
                <form method='PUT'
                >
                    <Dropdown.Item onClick={(e) => handlerChanger(e)} type='submit' id='done'>доставлен</Dropdown.Item>
                </form>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default OrderChanger