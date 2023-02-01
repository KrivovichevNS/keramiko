import { useEffect } from 'react';
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
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Заказ успешно создан! 🎉</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Мы свяжемся с Вами в течении часа для уточнения деталей заказа 📲</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => navigate('/')}>На главную</Button>
                    <Button variant="primary" onClick={() => navigate('/store/all')}>В магазин</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default StaticExample;