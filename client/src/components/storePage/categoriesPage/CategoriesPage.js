import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './CategoriesPage.module.css'
import { LinkContainer } from 'react-router-bootstrap';





const CategoriesPage = ({ categories }) => {
    return (
        <Row className="justify-content-md-center">
            <LinkContainer to="/store/all">
                <Col xs lg="2" className={styles.cat}>all</Col>
            </LinkContainer>
            {categories?.categories?.map((ctgr, i) =>
                <LinkContainer key={i} to={`/store/${ctgr.name}`}>
                    <Col className={styles.cat} xs lg="2">{ctgr.name}</Col>
                </LinkContainer>
            )}
        </Row>
    )
}

export default CategoriesPage