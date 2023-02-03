import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import styles from './ContactPage.module.css'

const ContactPage = () => {
    return (
        <Container className='gridContainer'>
            <Row sm={1}>
                <Col xs={6} md={4} style={{ size: '100%' }}>
                    <Image
                        className="d-block w-100"
                        src="/img/cont.jpg"
                        alt=""
                    />
                </Col>
                <Col xs={6} md={4} className={styles.silver}>
                    <h1>VK:</h1>
                    <li><a href='https://instagram.com/asya.keramiko?igshid=NDk5N2NlZjQ=' alt=''>@asya.keramiko</a></li>
                    <h1>INSTAGRAM:</h1>
                    <li><a href='https://vk.com/asya.keramiko' alt=''>Acя Кривовичева</a></li>
                    <h1>Адрес студии:</h1>
                    <li>Вавилов лофт, зелёная лестница, 5 этаж, помещение 5409</li>
                </Col>
                <Col xs={6} md={4} xxl={4} style={{ size: '100%' }}>
                    <Image
                        className="d-block w-100"
                        src="/img/cont1.jpg"
                        alt=""
                    />
                </Col>
            </Row>
            {/* Columns are always 50% wide, on mobile and desktop */}
        </Container>
    )
}

export default ContactPage

// Адрес студии: Вавилов лофт, зелёная лестница, 5 этаж, помещение 5409