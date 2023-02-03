import React from 'react'
import './MainPage.css'
import { Carousel, Row, Col, Container } from 'react-bootstrap'

const MainPage = () => {
    return (
        <Container className='gridContainer'>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row sm={1}>
                <Col xs={12} md={8} className='blue'>
                    <div>
                        Авторская керамика, сделанная своими руками
                    </div>
                    <div className='small'>
                        Каждое изделие  - результат тонкой ручной работы. Такие изделия несут в себе частичку особенной энергии, к которой может приобщиться любой ценитель прекрасного.
                    </div>
                </Col>
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row sm={1}>
                <Col xs={6} md={4} style={{ size: '100%' }}>
                    <Carousel interval={6000} fade indicators={false} controls={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainVaza.jpg"
                                alt=''
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainCup.jpg"
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={6} md={4} className='silver'>
                    <Carousel interval={6000} fade indicators={false} controls={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainCups2.jpg"
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainCups.jpeg"
                                alt=''
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={6} md={4} xxl={4} className='purple'>
                    <Carousel interval={6000} fade indicators={false} controls={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainVaza1.jpg"
                                alt=''
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/mainCup1.jpg"
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            {/* Columns are always 50% wide, on mobile and desktop */}
        </Container>

    )

    // Керамика, вдохновлённая природными фактурами и оттенками. Важная составляющая- это тактильные поверхности, которые создают особые ощущения, когда держишь изделия в руках. Многие цветовые сочетания и фактуры вдохновлены русскими северными пейзажами и состояниями. Каждое изделие  - результат тонкой ручной работы. Такие изделия несут в себе частичку особенной энергии, к которой может приобщиться любой ценитель прекрасного.

}

export default MainPage