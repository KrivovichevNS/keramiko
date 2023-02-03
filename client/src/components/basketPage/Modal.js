import { useEffect } from 'react';
import styles from './Modal.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearBasket } from '../../slices/storeSlice'
function StaticExample() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(clearBasket())
    }, [dispatch])

    return (
        <div
            className="modal"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog className={styles.modal}>
                <Modal.Header>
                    <Modal.Title>Заказ успешно создан! 🎉</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Мы свяжемся с Вами в течении часа для уточнения деталей заказа 📲</p>
                </Modal.Body>

                <Modal.Footer className={styles.footer}>
                    <Button className={styles.buttons} variant="light" onClick={() => navigate('/')}>На главную</Button>
                    <Button className={styles.buttons} variant="light" onClick={() => navigate('/store/all')}>В магазин</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default StaticExample;