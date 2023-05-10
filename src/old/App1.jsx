import React from 'react';
import { Image, Col, Container, Form, Row, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import bystrologo from './images/bystrologo.png';
import bystrobike from './images/bystrobike.jpg';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Placeholder from 'react-bootstrap/Placeholder';



// React Bootstrap

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.

function HeaderNav() {

  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bystrologo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="bystrologo"
            />
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Войти в систему</Nav.Link>
            <Nav.Link href="#action1">Зарегистрироваться</Nav.Link>
            <Nav.Link href="#action2">Сообщить о краже</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      

      
    </>
  );

}


function HeaderLogin() {

  return (
    <Container>
      <Row>
        <Col md={1}><img src={bystrologo} height='100' alt="bystrologo" /></Col>
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Col>


      </Row>
    </Container>

  );

}

function Main() {

  return (
    <Container>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bystrologo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="bystrologo"
            />
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Войти в систему</Nav.Link>
            <Nav.Link href="#action1">Зарегистрироваться</Nav.Link>
            <Nav.Link href="#action2">Сообщить о краже</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        <Row>
          <Col md={6} style={{ paddingTop: 50 }}>
            <Image fluid={true}
              src={bystrobike}
              // width="100"
              // height="100"
              // className="d-inline-block align-top"
              alt="bystrobike"
            />
          </Col>
          <Col md={6} style={{ fontSize: 20, lineHeight: 1.5, padding: 50 }}>
            <p className='d-flex' style={{ fontSize: 20, lineHeight: 1.5, textAlign: 'justify' }}>
              Хотите быстро и удобно перемещаться по городу, избегая пробок и постоянных проблем с парковкой автомобиля? Мы предлагаем вам услугу аренды городских велосипедов!
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.5 }}>
              Наш сервис предоставляет широкий выбор велосипедов для любителей городских прогулок, профессиональных велосипедистов или просто любителей активного отдыха. 
              Вы можете арендовать велосипед на несколько часов или на целые дни, чтобы наслаждаться прекрасными видами города и замечательными маршрутами.
            </p>
            <p className='d-flex' style={{ fontSize: 20, lineHeight: 1.5, textAlign: 'justify' }}>
              Мы предлагаем удобный способ заказа велосипедов через мобильное приложение. 
              Вы можете выбрать подходящий велосипед, оплатить аренду и получить подробную информацию о доступных маршрутах и достопримечательностях прямо на вашем смартфоне.
              С нашими велосипедами вы можете быстро добраться до работы, школы, университета или просто провести уикенд с друзьями на свежем воздухе.
            </p>
            <p className='d-flex' style={{ fontSize: 20, lineHeight: 1.5, textAlign: 'justify' }}>
              Аренда велосипеда - это отличный способ сэкономить время и деньги, а также получить массу положительных эмоций и здоровья. 
              Не откладывайте на завтра то, что можно сделать сегодня - скачайте наше мобильное приложение и оформляйте заказы на аренду велосипеда прямо сейчас, 
              чтобы открыть для себя новые возможности городской жизни!
            </p>
          </Col>
        </Row>
        <Navbar fixed="bottom" bg="light" expand="lg"> {/*style={{ height: 110 }}*/}
        <Container className="justify-content-md-end">
          &#xa9; Bystrobike 2023
        </Container>
      </Navbar>
      </Container>
  );

}

function Footer() {

  return (
    <Navbar fixed="bottom" bg="light" expand="lg"> {/*style={{ height: 110 }}*/}
        <Container className="justify-content-md-end">
          &#xa9; Bystrobike 2023
        </Container>
      </Navbar>
  );

}

function App() {

  return (
    <Container>
      {/* <HeaderNav /> */}
      <Main />
      {/* <Footer /> */}
    </Container>
  );

}

export default App

