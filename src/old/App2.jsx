import React from 'react';
import { useState } from 'react';
import { InputGroup, Modal, Image, Col, Container, Form, Row, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

function HeaderStart() {

  return (
    <Navbar fixed="top" bg="secondary" expand="lg">
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
          className="me-auto my-2 my-lg-0 text-white"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className="text-white" href="#action1">Войти в систему</Nav.Link>
          <Nav.Link className="text-white" href="#action2">Зарегистрироваться</Nav.Link>
          <Nav.Link className="text-white" href="#action3">Сообщить о краже</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

}


function HeaderIsLog() {

  return (
    <Navbar fixed="top" bg="secondary" expand="lg">
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
          <Nav.Link className="text-white" href="#action1">Enoch</Nav.Link>
          <Nav.Link className="text-white" href="#action1">Arden</Nav.Link>
          <Nav.Link className="text-white" href="#action4">Выход</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
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

function MainStart() {

  return (
    <Container>
      <Row>
        <Col md={5} style={{ paddingTop: 165 }}>
          <Image fluid={true}
            src={bystrobike}
            // width=auto
            // height="100%"
            // className="d-inline-block align-top"
            alt="bystrobike"
          />
        </Col>
        <Col md={7} style={{ fontSize: 20, lineHeight: 1.5, paddingTop: 160 }}>
          <p className='d-flex' style={{ fontSize: 20, lineHeight: 1.5, textAlign: 'justify' }}>
            Хотите быстро и удобно перемещаться по городу, избегая пробок и постоянных проблем с парковкой автомобиля? Мы предлагаем вам услугу аренды городских велосипедов!
          </p>
          <p className='d-flex' style={{ fontSize: 20, lineHeight: 1.5, textAlign: 'justify' }}>
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
    </Container>
  );

}

function MainIsLog() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (


    <>
      <Navbar bg="light" expand="lg" style={{ paddingTop: 165 }}>
        <Container>
          <Nav className="me-auto my-2 my-lg-0 flex-column">
            <Nav.Link onClick={handleShow} href="#action1">Сообщить о краже</Nav.Link>
            <Nav.Link href="#action2">Список сообщений о краже</Nav.Link>
            <Nav.Link href="#action3">Регистрация сотрудника</Nav.Link>
            <Nav.Link href="#action4">Список сотрудников</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Заявление о краже велосипеда</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="licenseNumber">
              <Form.Label>Номер лицензии</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Номер лицензии"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">Обязательный параметр</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ownerFullName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
    </Form>



        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
        </Modal.Footer>
      </Modal>
    </>


  );

}

function Footer() {

  return (
    <Navbar fixed="bottom" bg="secondary" expand="lg" >
      <Container className="justify-content-md-end text-white" >
        &#xa9; Bystrobike 2023
      </Container>
    </Navbar>
  );

}


function App() {
  const [userIsLogged, setUserIsLogged] = useState(true);

  return (
    <>
      {
        !userIsLogged ?
          <>
            <HeaderStart />
            <MainStart />
          </>
          :
          <>
            <HeaderIsLog />
            <MainIsLog />
          </>
      }
      <Footer />
    </>
  );

}


export default App



{/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Заявление о краже велосипеда</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
    </Form>



        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
        </Modal.Footer>
      </Modal> */}