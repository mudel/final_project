import React from 'react';
import { useState } from 'react';
import { Alert, Modal, Image, Col, Container, Form, Row, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import bystrologo from './images/bystrologo.png';
import bystrobike from './images/bystrobike.jpg';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Placeholder from 'react-bootstrap/Placeholder';


// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.

function HeaderStart(props) {
// Header стартовой страницы

  const DataSender = props.DataSender;

  // Сущность залогеный юзер
  const user = props.user;
  const setUser = props.setUser;

  // Отображение и отправка полей ввода
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода

  // Состояние авторизации юзера
  const setUserIsLogged = props.setUserIsLogged;

  // Функция отображения модального окна с формой ввода данных
  const PersonalData = props.PersonalData;

  // Состояние модального окна с формой ввода данных
  const show = props.show;
  const setShow = props.setShow;
  const handleClose = props.handleClose;
  const handleShow = props.handleShow;
  
  // Состояние модального окна с сообщением об ошибке  
   const handleShowAlert = props.handleShowAlert;
   const handleCloseAlert = props.handleCloseAlert;
   const showAlert = props.showAlert;
   const message = props.message;
   const setMessage = props.setMessage;

  // Вид запроса к бэкенду
  const [requestType, setRequestType] = useState('Signin');

  return (
    <>
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
          <Nav.Link onClick={
            () => { 
              setRequestType('SignIn');
              handleShow();
              console.log(requestType);
            }
          } className="text-white" href="#action10">Вход в систему</Nav.Link>
          <Nav.Link className="text-white" href="#action11">Регистрация сотрудника</Nav.Link>
          <Nav.Link className="text-white" href="#action12">Сообщение о краже</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <PersonalData user={user} 
                  setUser={setUser} 
                  setUserIsLogged={setUserIsLogged} 
                  requestType={requestType} 
                  show={show} 
                  handleClose={handleClose} 
                  message={message}
                  setMessage={setMessage}
                  DataSender={DataSender}
                  handleShowAlert={handleShowAlert}
                  showAlert={showAlert}
                  handleCloseAlert={handleCloseAlert}
                  needInput = {needInput} 
                  required = {required}
                  sendIt = {sendIt}
    />
    </>
  );

}


function HeaderIsLog() {
// Header залогиненого юзера

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

function PersonalData (props) {
// Универсальная функция для ввода данных юзера. Воровство в другой функции 

  const DataSender = props.DataSender;

  const user = props.user;
  const setUser = props.setUser;
  const setUserIsLogged = props.setUserIsLogged;

  // Отображение и отправка полей ввода
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода


  // Сотояние модального окна с сообщением об ошибке
  const showAlert = props.showAlert;
  const handleShowAlert = props.handleShowAlert;
  const handleCloseAlert = props.handleCloseAlert;   

  // Сообщение об ошибке
  const message = props.message;
  const setMessage = props.setMessage;

  // Состояние модального окна с формой ввода данных пользователя (Sign In)
  const show = props.show;
  const handleClose = props.handleClose;
  const requestType = props.requestType;

  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWFmOTM2MzE0ODkwN2EzYTNiYWNkNCIsImlhdCI6MTY4MDEwMTM3MiwiZXhwIjoxNjgwNzA2MTcyfQ.80Ffiz8ITYMfIF8kuXZ72ZMuHMxE9ZkuZiN7VYwcyEA'; 
  const url = 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in'
  const choiceMethod = 'POST';  
  const bodyInQuery = true; // В некоторых запросах body не должно быть, иначе ошибка
  const [responseData, setResponseData] = useState(null);
  
  const temporaryUser = user.map(rec => {   
    console.log('PersonalData 00 ===============>>>', responseData.user);
    // if (responseData.user[rec.dataName]!==undefined) {
    //   rec.value = responseData.user[rec.dataName]}
    })
  console.log('PersonalData 01 ===============>>>', temporaryUser);
  const [validated, setValidated] = useState(false);

  console.log('PersonalData 05 ===============>>>', responseData);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);    
    if (form.checkValidity()) {
      handleClose();
      // Формируем объект с данными для отправки на бэкенд
      console.log('PersonalData 22 ===============>>>', needInput);
      console.log('Формируем объект с данными для отправки на бэкенд', requestType);
      let sendingData = user.filter((rec) => (sendIt[rec.i][requestType]==true)).map(rec => {   
            const container = {};
            container[rec.dataName] = rec.value;
            return container;
            })
      console.log('PersonalData 44 ===============>>>', sendingData);   
      sendingData = sendingData.reduce((acc, rec) => {
            return {...acc, ...rec}
            }, {})
      console.log('PersonalData 10 ===============>>>', sendingData);

      // Когда окно закрывается данные должны отправляться на бэкенд
      DataSender(sendingData, handleShowAlert, setMessage, url, bodyInQuery, choiceMethod, token, responseData, setResponseData);
      console.log('handleSubmit 00 ***** responseData',responseData);

      }
    console.log('PersonalData 20 ===============>>>', validated);
    console.log('PersonalData 25 ===============>>>', responseData);
  };



return (
  <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Здесь будет заголовок из специальной таблицы</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

        {user.filter((rec) => (needInput[rec.i][requestType]==true)).map((rec) => (
            <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
            <Form.Label>{rec.dataTitle}</Form.Label>
            <Form.Control
              required={rec.required} 
              type="text"
              placeholder={rec.dataTitle}
              defaultValue={rec.value}
              onChange={event => rec.value = event.target.value}
            />
            <Form.Control.Feedback type="invalid">Обязательный параметр</Form.Control.Feedback>
          </Form.Group>
          ))}
        <Button type="submit">Ввод</Button>
        </Row>
      </Form>
    </Modal.Body>
    </Modal>
  </>
);

}

function MainStart() {
// Главная страница стартовая

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

async function DataSender(sendingData, handleShowAlert, setMessage, url, bodyInQuery, choiceMethod, token, responseData, setResponseData) {
  // Обмен с бэкендом
  // Универсальная процедура отправки данных на бэкенд и получения ответа
  
    // Формирование body запрроса - значения параметров меняются при каждом новом запросе
    const queryBody = JSON.stringify(sendingData);
  
    // Токен может меняться
    const query = {
        method: choiceMethod, 
        headers: {
           'Content-Type': 'application/json', 
           'Authorization': token
        },       
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
    };
    if (bodyInQuery) {query.body = queryBody} // В некоторых типах запросов body не должно быть, иначе ошибка

    const response = await fetch(url, query)
      .then((response) => {return response.json(); 
    })
      .then((responseJson) => {
        if (responseJson.status === 'ERR') { // Ошибка бэкенда, вывод сообщения в модальное окно
          console.log('DataSender 1 *** Ошибка:', responseJson.message, responseJson.errCode);
          setMessage(responseJson.message); // Передача сообщения бэкенда об ошибке в модальное окно
          handleShowAlert(); // Вызов модального окна
          } 
          else {setResponseData(responseJson.data);
            console.log('DataSender 2 ***** responseData',responseData);} // Ошибок нет, обработка data
      }) 
      .catch((error) => {console.log('DataSender 3 ***** message', error.message) // Прочие ошибки
          setMessage(error.message); // Передача сообщения fetch об ошибке в модальное окно
          handleShowAlert(); // Вызов модального окна
    }); 
    console.log('DataSender 4 ***** responseData',responseData);
  }


async function sendSteal(steal, handleShowAlert, setMessage) {
// Обмен с бэкендом
// Добавление кражи с авторизацией

  // Формирование body запрроса - значения параметров меняются при каждом новом запросе
  const queryBody = JSON.stringify(steal);

  // Токен может меняться
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWFmOTM2MzE0ODkwN2EzYTNiYWNkNCIsImlhdCI6MTY4MDEwMTM3MiwiZXhwIjoxNjgwNzA2MTcyfQ.80Ffiz8ITYMfIF8kuXZ72ZMuHMxE9ZkuZiN7VYwcyEA'; 

  const url = 'https://sf-final-project-be.herokuapp.com/api/cas/'  // Ошибка в адресе для тестирования CASES!!!
  const choiceMethod = 'POST';  

  const query = {
      method: choiceMethod, 
      headers: {
         'Content-Type': 'application/json', 
         'Authorization': token
      },       
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      // body в некоторых запросах не должно быть, иначе ошибка
      body: queryBody 
  };
  const response = await fetch(url, query)
    .then((response) => {return response.json(); 
  })
    .then((responseJson) => {
      if (responseJson.status === 'ERR') { // Ошибка бэкенда, вывод сообщения в модальное окно
        console.log('sendSteal **** Ошибка:', responseJson.message, responseJson.errCode);
        setMessage(responseJson.message); // Передача сообщения бэкенда об ошибке в модальное окно
        handleShowAlert(); // Вызов модального окна
        } 
        else {console.log('sendSteal ------>data:', responseJson.data)} // Ошибок нет, тут будет обработка data
    }) 
    .catch((error) => {console.log('sendSteal **** message', error.message) // Прочие ошибки
        setMessage(error.message); // Передача сообщения fetch об ошибке в модальное окно
        handleShowAlert(); // Вызов модального окна
  }); 
    
}

function FetchAlert(props) {
// Модальное окно с сообщением об ошибке
  const showAlert = props.showAlert;
  const handleCloseAlert = props.handleCloseAlert;
  const message = props.message;

  return (
    <>
      <Modal show={showAlert} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title variant="danger">Ошибка!</Modal.Title>
        </Modal.Header>
        <Modal.Body >{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseAlert}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



function MainIsLog(props) {
// Главная страница залогиненого юзера

  // Сотояние модального окна с сообщением об ошибке
  const showAlert = props.showAlert;
  const handleShowAlert = props.handleShowAlert;
  const handleCloseAlert = props.handleCloseAlert;   
  
  // Сообщение об ошибке
  const message = props.message;
  const setMessage = props.setMessage;

  // Состояние модального окна с формой добавления кражи Create Case
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  let steal = {
              licenseNumber: '',
              ownerFullName: '',
              type: '', 
              clientId: '', 
              color: '', 
              date: '', 
              description: ''
             }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log('MainIsLog 1 ===============>>>', 'checkValidity', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);    //                            Надо разобраться с этой логикой, после первого правильного заполнения console.log('3===============>>>', steal); не работает
    if (form.checkValidity()) {
      handleClose();
      console.log('MainIsLog 2 ===============>>>', steal);   // Когда окно закрывается должны отправляться данные на бэкенд
      sendSteal(steal, handleShowAlert, setMessage);
      }
    console.log('MainIsLog 3 ===============>>>', validated);
    };

  return (


    <>
      <Navbar bg="light" expand="lg" style={{ paddingTop: 165 }}>
        <Container>
          <Nav className="me-auto my-2 my-lg-0 flex-column">
            <Nav.Link key={'1'} onClick={handleShow} href="#action1">Сообщить о краже</Nav.Link>
            <Nav.Link key={'2'} href="#action2">Список сообщений о краже</Nav.Link>
            <Nav.Link key={'3'} href="#action3">Регистрация сотрудника</Nav.Link>
            <Nav.Link key={'4'} href="#action4">Список сотрудников</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Модальное окно с вводои данных о краже */}
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
                defaultValue={steal.licenseNumber}
                onChange={event => steal.licenseNumber = event.target.value}
              />
              <Form.Control.Feedback type="invalid">Обязательный параметр</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ownerFullName">
              <Form.Label>ФИО пользователя</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ФИО пользователя"
                defaultValue={steal.ownerFullName}
                onChange={event => steal.ownerFullName = event.target.value}
              />
              <Form.Control.Feedback type="invalid">Обязательный параметр</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Тип велосипеда</Form.Label>
                <Form.Control 
                  as="select"
                  required
                  defaultValue={steal.type}
                  onChange={event => steal.type = event.target.value}
                >
                  <option selected disabled value={steal.type}>{steal.type ? steal.type :'Выберите тип из списка'}</option>
                  <option value="general">general</option>
                  <option value="sport">sport</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                Обязательный параметр
                </Form.Control.Feedback>

            </Form.Group>
          
            <Form.Group className="mb-3" controlId="clientId">
              <Form.Label>Идентификатор клиента</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Идентификатор клиента" 
                 
                defaultValue={steal.clientId}
                onChange={event => steal.clientId = event.target.value}
              />
              <Form.Control.Feedback type="invalid">
              Обязательный параметр
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
    
          <Row className="mb-3">
    
            <Form.Group className="mb-3" controlId="color">
              <Form.Label>Цвет велосипеда</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Цвет" 
               
              defaultValue={steal.color}
              onChange={event => steal.color = event.target.value}
            />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Дата кражи</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Дата" 
               
              defaultValue={steal.date}
              onChange={event => steal.date = event.target.value}
            />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Комментарий</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Напишите комментарий" 
               
              defaultValue={steal.description}
              onChange={event => steal.description = event.target.value}
            />
            </Form.Group>
         
          <Button type="submit">Отправить сообщение</Button>
          </Row>
        </Form>



        </Modal.Body>
      </Modal>
      {/* <FetchAlert showAlert={showAlert} handleCloseAlert={handleCloseAlert} message={message} /> */}
      
        
      {/* {AlertDismissible('Ой-ой-ой', 'Вы не заполнили все поля')} */}
    </>


  );

}



function Footer() {
// Футер существует в одной версии

  return (
    <Navbar fixed="bottom" bg="secondary" expand="lg" >
      <Container className="justify-content-md-end text-white" >
        &#xa9; Bystrobike 2023
      </Container>
    </Navbar>
  );

}


function App() {

  // Состояние авторизации юзера
  const [userIsLogged, setUserIsLogged] = useState(false); 

  // Сосотояние модального окна сообщения об ошибке обмена данными с бэкендом
  const [showAlert, setShowAlert] = useState(false); 
  const handleCloseAlert  = () => setShowAlert(false);         
  const handleShowAlert = () => setShowAlert(true);  

  // Состояние модального окна регистрации сотрудника
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  // Сообщение об ошибке обмена данными с бэкендом
  const [message, setMessage] = useState(''); 

  // Сущность залогиненый юзер
  const [user, setUser] = useState([
    {
      dataName: 'email', // string имя поля в объекте
      dataTitle: 'e-mail', // string Название свойства
      value: '', // string E-mail адрес сотрудника Обязательное и уникальное поле
      i: 0
    },
    {
      dataName: 'firstName', // string имя поля в объекте
      dataTitle: 'Имя', // string Название свойства
      value: '',	// string Имя сотрудника Обязательное поле
      i: 1
    },
    {
      dataName: 'lastName', // string имя поля в объекте
      dataTitle: 'Фамилия', // string Название свойства
      value: '',	// string Фамилия сотрудника Обязательное поле
      i: 2
    },
    {
      dataName: 'password', // string имя поля в объекте
      dataTitle: 'Пароль', // string Название свойства
      value: '',	// string Пароль сотрудника Обязательное поле
      i: 3
    },
    {
      dataName: 'clientId', // string имя поля в объекте
      dataTitle: 'clientId', // string Название свойства
      value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех записях
      i: 4
    },
    {
      dataName: 'approved', // string имя поля в объекте
      dataTitle: 'approved', // string Название свойства
      value: false, // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех записях
      i: 5
    }
  ]);

    // Наличие свойства в меню ввода
    const needInput = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true // boolean 
    },  
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean
        SignUp: true // boolean 
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    }
    ];

    // Обязательно к заполнению свойства в меню ввода
    const required = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false // boolean 
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false // boolean 
    },
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false // boolean 
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    }
    ];

    // Наличие свойства в отправке на сервер
    const sendIt = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true // boolean 
    },
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean
        SignUp: true // boolean 
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: true // boolean 
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    }
    ];




  return (
    <>
      {
        !userIsLogged ?
          <>
            <HeaderStart user={user}
                         setUser={setUser}
                         setUserIsLogged={setUserIsLogged}
                         PersonalData={PersonalData}
                         handleShow={handleShow}
                         show={show}
                         handleClose={handleClose}
                         showAlert={showAlert}
                         handleShowAlert={handleShowAlert}
                         handleCloseAlert={handleCloseAlert}
                         message={message}
                         setMessage={setMessage}
                         DataSender={DataSender}
                         needInput = {needInput} // Добавить в MainIsLog
                         required = {required}
                         sendIt = {sendIt}
            />
            <MainStart />
          </>
          :
          <>
            <HeaderIsLog />
            <MainIsLog showAlert={showAlert} 
                       handleShowAlert={handleShowAlert}
                       handleCloseAlert={handleCloseAlert}
                       message={message}
                       setMessage={setMessage}
            />
          </>
      }

      <FetchAlert showAlert={showAlert} handleCloseAlert={handleCloseAlert} message={message} />
      <Footer />
    </>
  );

}


export default App



