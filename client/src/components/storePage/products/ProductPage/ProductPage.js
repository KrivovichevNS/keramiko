import React, { useEffect } from 'react'
import styles from './ProductPage.module.css'
import { Container, Card } from 'react-bootstrap'
import { loadProduct, selectBasket, selectOneProduct, setBasket, clearOneProduct } from '../../../../slices/storeSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import AddTooltip from '../Tooltips/AddTooltip'

const ProductPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(selectOneProduct)
    const basket = useSelector(selectBasket)
    const { id } = useParams()

    useEffect(() => {
        return () => {
            dispatch(clearOneProduct())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(loadProduct(id))
    }, [id, dispatch])

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
        product?.error
            ? <div>{product?.error}</div>
            :
            <Container className={styles.container1}>
                <Card className={styles.card}>
                    <Card.Img variant="top" src={product.img} className={styles.img} />
                    <Card.Body >
                        <Card.Title >{product.name}</Card.Title>
                        <Card.Text >
                            {product.info}
                        </Card.Text>
                        <Card.Text>{product.price}₽</Card.Text>
                    </Card.Body>
                    <Card.Footer className={styles.footer}>
                        {product.number !== 0
                            ? checkBasket(product.id)
                                ? <AddTooltip />
                                : <>
                                    <p onClick={() => dispatch(setBasket(product))} className={styles.inBasket}>В корзину </p>
                                    <p onClick={() => navigate(-1)} className={styles.inBasket}>Назад </p>
                                </>
                            : <div>Нет в наличии 😟</div>
                        }
                    </Card.Footer>
                </Card>
            </Container>
    )
}

export default ProductPage