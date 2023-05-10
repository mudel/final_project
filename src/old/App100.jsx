import React from 'react';
import { useState, useEffect } from 'react';
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
  const userData = props.userData;
  const setUserData = props.setUserData;

  // Данные о воровстве  
  const stealData = props.stealData;
  const setStealData = props.setStealData;


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
  const [requestType, setRequestType] = useState('SignIn');

  // Данные полученные от бэкенда  
  const responseData = props.responseData;
  const setResponseData = props.setResponseData;
  const token = props.token;
  const setToken = props.setToken;


  console.log('HeaderStart 0 ==========>', stealData);

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
              console.log('HeaderStart 1 SignIn ==========>', requestType);
            }
          } className="text-white">Вход в систему</Nav.Link>
          <Nav.Link onClick={
            () => { 
              setRequestType('SignUp');
              handleShow();
              console.log('HeaderStart 2 SignUp ==========>', requestType);
            }
          } className="text-white">Регистрация сотрудника</Nav.Link>
          <Nav.Link className="text-white">Сообщение о краже</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
          {console.log('HeaderStart 0 ==========>', stealData);}
    <PersonalData userData={userData} 
                  setUserData={setUserData} 
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
                  responseData = {responseData}
                  setResponseData = {setResponseData}
                  token = {token}
                  setToken = {setToken}
                  stealData = {stealData}
                  setStealData = {setStealData}
    />
    </>
  );

}


function HeaderIsLog(props) {
// Header залогиненого юзера
  const userData = props.userData;

  return (
    <Navbar fixed="top" bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand onClick={()=>{
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('userData');
                                    window.location.reload();
                                    }}
          >
          <img
            src={bystrologo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="bystrologo это кнопка Выход"
        />
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link key={'11'} className="text-white">{userData[1].value}</Nav.Link>
          <Nav.Link key={'12'} className="text-white">{userData[2].value}</Nav.Link>
          <Nav.Link key={'13'} onClick={()=>{
                                            localStorage.removeItem('token');
                                            localStorage.removeItem('userData');
                                            window.location.reload();
                                            }} className="text-white">Выход</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

}

function PersonalData (props) {
// Универсальная функция для ввода данных юзера. Воровство в другой функции 

  const DataSender = props.DataSender;

  const userData = props.userData;
  const setUserData = props.setUserData;
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
  
  // Параметры запросов
  const queryParameters = {
    SignUp:	{title: 'Cоздание учетной записи', url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    SignIn:	{title: 'Авторизация пользователя', url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    Auth: {title: 'Проверка токена', url: 'https://sf-final-project-be.herokuapp.com/api/auth/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    CreateCase:	{title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    CreateCasePublic: {title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/public/report', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    EditCase: {title: 'Редактирование информации о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'PUT', bodyInQuery: true, needId: true},
    DeleteCase:	{title: 'Удаление сообщения о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true},
    GetAllCases: {title: 'Сообщения о кражах', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOneCase:	{title: 'Информация о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: true},
    CreateOfficer: {title: 'Cоздание нового сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers', choiceMethod: 'POST', bodyInQuery: true, needId: false},	
    UpdateOfficer: {title: 'Редактирование данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'PUT', bodyInQuery: true, needId: true},	
    DeleteOfficer: {title: 'Удаление данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true},	
    GetAllOfficers:	{title: 'Список сотрудников', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOfficer: {title: 'Информация о сотруднике', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: true}
  }

  // Данные полученные от бэкенда
  const responseData = props.responseData
  const setResponseData = props.setResponseData
  const token = props.token;
  const setToken = props.setToken;

  

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
      let sendingData = userData.filter((rec) => (sendIt[rec.i][requestType]==true)).map(rec => {   
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
      console.log('handleSubmit 010 ***** queryParameters',queryParameters[requestType].choiceMethod);
      DataSender (sendingData, 
                  handleShowAlert, 
                  setMessage, 
                  queryParameters[requestType].url+((queryParameters[requestType].needId==true) ? userData[5].value : ''),
                  queryParameters[requestType].bodyInQuery, 
                  queryParameters[requestType].choiceMethod, 
                  token, 
                  responseData, 
                  setResponseData);
      console.log('handleSubmit 00 ***** responseData',responseData);

      }
    console.log('PersonalData 20 ===============>>>', validated);
    console.log('PersonalData 25 ===============>>>', responseData);
  };

  useEffect(() => {
  // Когда изменяется responseData, записываем новые данные в userData и token
    if (responseData==undefined) return;  // Если нет данных от бэкенда, то возвращаем исходные данные userData
    if (responseData.token!==undefined) setToken(responseData.token);   
    setUserData(userData.map((rec, index) => {        
      // if (responseData==undefined) {return rec} // Если нет данных от бэкенда, то возвращаем исходные данные userData 
      if (responseData.user[rec.dataName]==undefined) return rec
          else return {...rec, value:responseData.user[rec.dataName]}
      })); 
    }, [responseData]);
    
  console.log('PersonalData 01 ===============>>>', userData);
  console.log('PersonalData 011 ===============>>>', token);
  const [validated, setValidated] = useState(false);

return (
  <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{queryParameters[requestType].title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

        {userData.filter((rec) => (needInput[rec.i][requestType]==true)).map((rec) => (
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

async function DataSender(sendingData, 
                          handleShowAlert, 
                          setMessage, 
                          url, 
                          bodyInQuery, 
                          choiceMethod, 
                          token, 
                          responseData, 
                          setResponseData) {
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
          else {return responseJson.data;} // Ошибок нет, обработка data ****** не испытано

      }) 
      .catch((error) => {console.log('DataSender 3 ***** message', error.message) // Прочие ошибки
          setMessage(error.message); // Передача сообщения fetch об ошибке в модальное окно
          handleShowAlert(); // Вызов модального окна
    }); 

    setResponseData(response);
    console.log('DataSender 4 ***** response',response);
    console.log('DataSender 5 ***** responseData',responseData);
  }


async function sendSteal(steal, handleShowAlert, setMessage) {
// Обмен с бэкендом
// Добавление кражи с авторизацией

  // Формирование body запрроса - значения параметров меняются при каждом новом запросе
  const queryBody = JSON.stringify(steal);

  // Токен может меняться
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWFmOTM2MzE0ODkwN2EzYTNiYWNkNCIsImlhdCI6MTY4MDEwMTM3MiwiZXhwIjoxNjgwNzA2MTcyfQ.80Ffiz8ITYMfIF8kuXZ72ZMuHMxE9ZkuZiN7VYwcyEA'; 

  const url = 'https://sf-final-project-be.herokuapp.com/api/cas/'  // Ошибка в адресе для тестирования CASES!!!
  const choiceMethod = 'POST';  

  const query = {
      method: choiceMethod, 
      headers: {
         'Content-Type': 'application/json', 
         'Authorization': `Bearer ${token}`
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


{/* Это нужно будет заменить универсальной функцией для всех запросов */}
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

 // Данные полученные от бэкенда
  const [responseData, setResponseData] = useState(null); 
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem( 'token' )) || ''); 

  // Сущность залогиненый юзер, если есть сохраненные данные в localStorage то берем их
  const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('userData')) ||
    [
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
      dataName: 'id', // string имя поля в объекте
      dataTitle: 'id', // string Название свойства
      value: '', // string id сотрудника Обязательное поле?
      i: 5
    },
    {
      dataName: 'approved', // string имя поля в объекте
      dataTitle: 'Статус', // string Название свойства
      value: false, // boolean Статус сотрудника: одобрен/не одобрен
      i: 6
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
        dataName: 'id', // string имя поля в объекте
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
        dataName: 'id', // string имя поля в объекте
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
        dataName: 'id', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false // boolean 
    }
    ];

    // Сущность сообщение о краже, если есть сохраненные данные в localStorage то берем их
    const [stealData, setStealData] = // useState(JSON.parse(window.localStorage.getItem('stealData')) ||
    [
    {
        dataName: 'type', // string имя поля в объекте
        dataTitle: 'Тип велосипеда', // string Название свойства
        value: '', // string 
        i: 0
    },
    {
        dataName: 'licenseNumber', // string имя поля в объекте
        dataTitle: 'Номер лицензии', // string Название свойства
        value: '',	// string 
        i: 1
    },
    {
        dataName: 'ownerFullName', // string имя поля в объекте
        dataTitle: 'ФИО арендатора велосипеда', // string Название свойства
        value: '',	// string 
        i: 2
    },
    {
        dataName: 'color', // string имя поля в объекте
        dataTitle: 'Цвет велосипеда', // string Название свойства
        value: '',	// string 
        i: 3
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        dataTitle: 'clientId', // string Название свойства
        value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех записях
        i: 4
    },
    {
        dataName: 'createdAt', // string имя поля в объекте
        dataTitle: 'Дата создания сообщения', // string
        value: '', // date 
        i: 5
    },
    {
        dataName: 'updatedAt', // string имя поля в объекте
        dataTitle: 'Дата обновления сообщения', // string Название свойства
        value: '', // date 
        i: 6
    },
    {
        dataName: 'status', // string имя поля в объекте
        dataTitle: 'Статус сообщения', // string Название свойства
        value: '', // string Статус сообщения Возможные значения: new, in_progres, done
        i: 7
    },
    {
        dataName: 'date', // string имя поля в объекте
        dataTitle: 'Дата кражи', // string Название свойства
        value: '', // date 
        i: 8
    },
    {
        dataName: 'description', // string имя поля в объекте
        dataTitle: 'Комментарий', // string Название свойства
        value: '', // string 
        i: 9
    },
    {
        dataName: 'resolution', // string имя поля в объекте
        dataTitle: 'Завершающий комментарий', // string Название свойства
        value: '', // string 
        i: 10
    },
    {
        dataName: 'officer', // string имя поля в объекте
        dataTitle: 'Ответственный сотрудник', // string Название свойства
        value: false, // string Валидным значением может быть только действующий id ответственного сотрудника из базы
        i: 11
    }
    ]);

    useEffect(() => {
      // Когда изменяется token, включаем авторизованный режим, сохраняем токен в localStorage
      if (token) {
                  setUserIsLogged(true);
                  window.localStorage.setItem('token', JSON.stringify(token));
                  }     
        }, [token]);
    useEffect(() => {
      // Когда изменяется userData, сохраняем данные в localStorage
      window.localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);


  return (
    <>
      {
        !userIsLogged ?
          <>
            <HeaderStart userData={userData}
                         setUserData={setUserData}
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
                         responseData = {responseData}
                         setResponseData = {setResponseData}
                         token = {token}
                         setToken = {setToken}
                         stealData = {stealData}
                         setStealData = {setStealData}
                                              
            />
            <MainStart />
          </>
          :
          <>
            <HeaderIsLog  userData={userData}
            />
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



