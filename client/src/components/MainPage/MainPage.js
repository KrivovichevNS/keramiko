import React from 'react'
import './MainPage.css'
import { Carousel, Row, Col, Container } from 'react-bootstrap'

const MainPage = () => {
    return (
        <Container className='gridContainer'>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8} className='blue'>
                    Авторская керамика, сделанная своими руками
                </Col>
                <Col xs={6} md={4} className='silver'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Col>
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={6} md={4} style={{ size: '100%' }}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/photo_2023-01-27 11.35.56.jpeg"
                                alt=''
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/photo_2023-01-27 11.36.09.jpeg"
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={6} md={4} className='gold'>
                    Керамика, вдохновлённая природными фактурами и оттенками. Важная составляющая- это тактильные поверхности, которые создают особые ощущения, когда держишь изделия в руках. Многие цветовые сочетания и фактуры вдохновлены русскими северными пейзажами и состояниями. Каждое изделие  - результат тонкой ручной работы. Такие изделия несут в себе частичку особенной энергии, к которой может приобщиться любой ценитель прекрасного.
                </Col>
                <Col xs={6} md={4} className='purple'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/photo_2023-01-25 16.14.30.jpeg"
                                alt=''
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/photo_2023-01-25 16.14.34.jpeg"
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>                </Col>
            </Row>
            {/* Columns are always 50% wide, on mobile and desktop */}
        </Container>

    )
}

export default MainPage