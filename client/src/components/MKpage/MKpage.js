import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import styles from './MKpage.module.css'

const MKpage = () => {
    return (
        <Container className='gridContainer'>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row sm={1}>
                <Col xs={12} md={8} className='blue'>
                    <div>
                        Гончарные мастер-классы & обучение лепке и декору
                    </div>
                    <div className='small'>
                        Для начинающих и тех, кто хочет попробовать что-то новое. <br /> Занятия по гончарному делу, ручной лепке  и декору керамики
                    </div>
                </Col>
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row sm={1} >
                <Col xs={6} md={4} className={styles.purple}>
                    <h1>Мастер классы</h1>
                    <li >Гончарное дело</li>
                    <li >Ручная лепка</li>
                    <li >Для пар</li>
                    <li >Семейные</li>
                </Col>
                <Col xs={6} md={4} xxl={4} >
                    <Image
                        className="d-block w-100"
                        src="/img/mk2.jpeg"
                        alt=""
                    />
                </Col>
                <Col xs={6} md={4} xxl={4} >
                    <Image
                        className="d-block w-100"
                        src="/img/mk3.jpg"
                        alt=""
                    />
                </Col>
            </Row>
            {/* Columns are always 50% wide, on mobile and desktop */}
        </Container>
    )
}

export default MKpage