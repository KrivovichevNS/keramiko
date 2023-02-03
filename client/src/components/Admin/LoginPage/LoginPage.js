import React, { useEffect } from 'react'
import styles from './LoginPage.module.css'
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { adminLogin, selectAuthUser } from '../../../slices/adminSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch()
    const authUser = useSelector(selectAuthUser)
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    console.log(authUser, 'authuser');

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: username.current.value,
            password: password.current.value
        }
        dispatch(adminLogin(userData))
    }

    useEffect(() => {
        if (authUser?.authUser?.username) {
            navigate('/admin/control')
        }
        if (!authUser?.authUser?.username) {
            navigate('/admin/login')
        }
    }, [authUser?.authUser?.username, navigate])

    return (
        <Container className={styles.container}>
            <div>
                <Form method='POST' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control className={styles.input} ref={username} type="text" autoFocus autoComplete='off' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" autoComplete='off' required>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control className={styles.input} ref={password} type="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className={styles.submitButton}>
                        Войти
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default LoginPage