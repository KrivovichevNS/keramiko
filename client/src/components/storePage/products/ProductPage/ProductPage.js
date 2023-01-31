import React, { useEffect } from 'react'
import styles from './ProductPage.module.css'
import { Container, Card, Button } from 'react-bootstrap'
import { loadProduct, selectBasket, selectOneProduct, setBasket } from '../../../../slices/storeSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import AddTooltip from '../Tooltips/AddTooltip'

const ProductPage = () => {
    const dispatch = useDispatch()
    const product = useSelector(selectOneProduct)
    const basket = useSelector(selectBasket)
    const { id } = useParams()
    const navigate = useNavigate()
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
        <Container className={styles.container}>
            <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.info}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={styles.footer}>
                    {product.number !== 0
                        ? checkBasket(product.id)
                            ? <AddTooltip />
                            : <>
                                <FontAwesomeIcon
                                    id={product.id}
                                    className={styles.icon}
                                    icon={faCirclePlus} size="xl"
                                    onClick={() => dispatch(setBasket(product))} />
                                <p>В корзину </p>
                            </>
                        : <div>Нет в наличии 😟</div>
                    }
                </Card.Footer>
                <Button variant="light" onClick={() => navigate(-1)}>Назад</Button>
            </Card>
        </Container>
    )
}

export default ProductPage