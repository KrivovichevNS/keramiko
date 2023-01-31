// import React, { useCallback, useEffect } from 'react'
import { Nav, Container, Navbar, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NB.module.css';
import { useSelector } from 'react-redux'
import {
  selectBasket,
} from '../../slices/storeSlice';

const NB = () => {
  const basket = useSelector(selectBasket)

  return (
    <Navbar bg="*" expand="lg" className={styles.nb}>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand to="/" className={styles.nbPh}>
          <img
            src="/img/photo_2023-01-25 16.14.24.jpeg"
            width="70"
            height="110"
            className="d-inline-block align-top"
            alt="" />
        </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/">
        <Navbar.Brand>Keramiko</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarPie}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link className={styles.href} href="#">Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store/all">
              <Nav.Link className={styles.href} href="#features">Магазин</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer> */}
            <Nav.Link className={styles.href} href="#">Мастер классы</Nav.Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer> */}
            <Nav.Link className={styles.href} href="#">Обо мне</Nav.Link>
            {/* </LinkContainer> */}
          </Nav>
          <LinkContainer to="/cart">
            <Nav.Link>
              <FontAwesomeIcon icon={faBasketShopping} size="xl" />
              <Badge bg="primary" pill className={styles.badge}>{basket.length}</Badge>
            </Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NB