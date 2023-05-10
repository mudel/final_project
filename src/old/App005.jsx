import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Modal, Image, Col, Container, Form, Row, Button, Navbar, Nav } from 'react-bootstrap';
import bystrologo from './images/bystrologo.png';
import bystrobike from './images/bystrobike.jpg';



// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.

function HeaderStart(props) {
// Header стартовой страницы
// Виден, когда пользователь не авторизован

  const DataSender = props.DataSender;

  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;

  // Сущность сообщение о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;

  // Отображение и отправка полей ввода данных юзера
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода

   // Отображение и отправка полей ввода данных кражи
   const needInputSteal = props.needInputSteal; // Наличие свойства в меню ввода
   const requiredSteal = props.requiredSteal; // Обязательность свойства в меню ввода
   const sendItSteal = props.sendItSteal; // Отправка свойства в меню ввода 

  // Состояние авторизации юзера
  const setUserIsLogged = props.setUserIsLogged;

  // Функция отображения модального окна с формой ввода данных
  const PersonalData = props.PersonalData;

  // Состояние модального окна с формой ввода данных юзера
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
 const requestType = props.requestType;
 const setRequestType = props.setRequestType;

  // Данные полученные от бэкенда  
  const responseData = props.responseData;
  const setResponseData = props.setResponseData;
  const token = props.token;
  const setToken = props.setToken;

  const [userOrSteal, setUserOrSteal] = useState('steal');

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
          <Nav.Link onClick={() => { 
                                    setRequestType('SignIn');
                                    setUserOrSteal('user')
                                    handleShow();
                                  }} className="text-white">Вход в систему</Nav.Link>
          <Nav.Link onClick={() => { 
                                    setRequestType('SignUp');
                                    setUserOrSteal('user')
                                    handleShow();
                                  }} className="text-white">Регистрация сотрудника</Nav.Link>
          <Nav.Link onClick={() => { 
                                    setRequestType('CreateCasePublic');
                                    setUserOrSteal('steal')
                                    handleShow();
                                  }} className="text-white">Сообщение о краже</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    { 
      userOrSteal === 'user' ? 
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
        />
        :
          <PersonalData userData={stealData} 
                        setUserData={setStealData} 
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
                        needInput = {needInputSteal} 
                        required = {requiredSteal}
                        sendIt = {sendItSteal}
                        responseData = {responseData}
                        setResponseData = {setResponseData}
                        token = {token}
                        setToken = {setToken}
              />
    }
    </>
  );

}


function HeaderIsLog(props) {
// Header залогиненого юзера
// Виден, когда пользователь авторизован
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
// Универсальная функция для ввода данных юзера

  const DataSender = props.DataSender;

  // Данные пользователя
  const userData = props.userData;
  const setUserData = props.setUserData;
  const setUserIsLogged = props.setUserIsLogged;

  // Отображение и отправка полей ввода
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода


  // Соcтояние модального окна с сообщением об ошибке
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
  
  // Параметры запросов  ЛИШНИЕ УБРАТЬ
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
      let sendingData = userData.filter((rec) => (sendIt[rec.i][requestType]==true)).map(rec => {  
            const container = {};
            container[rec.dataName] = rec.value;
            return container;
            }); 
      sendingData = sendingData.reduce((acc, rec) => {
            return {...acc, ...rec}
            }, {});

      // Когда окно закрывается данные должны отправляться на бэкенд
      // ПРОВЕРИТЬ НУЖНА ЛИ ВСЯ ВОЗНЯ С needId и т.д. ИЛИ В ЭТОЙ ФУНКЦИИ id не отправляется никогда  И ЕЕ МОЖНО УБРАТЬ

      console.log('************** Здесь должен быть датасендер');

      DataSender (sendingData, 
                  handleShowAlert, 
                  setMessage, 
                  queryParameters[requestType].url+((queryParameters[requestType].needId==true) ? userData[5].value : ''),
                  queryParameters[requestType].bodyInQuery, 
                  queryParameters[requestType].choiceMethod, 
                  token,
                  responseData, 
                  setResponseData
                  );
      }
  };

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

        {/* Формирорвание формы ввода данных из массива userData */}
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
    
    const query = {
        method: choiceMethod, 
        headers: {
           'Content-Type': 'application/json', 
           'Authorization': `Bearer ${token}` // Токен может меняться
        },       
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
    };
    if (bodyInQuery) {query.body = queryBody} // В некоторых типах запросов body не должно быть, иначе ошибка

console.log('************** query', query)

    const response = await fetch(url, query)
    // Собственно функция-запрос к бэкенду
      .then(response => response.json())
      .then(
        responseJson => {
          if (responseJson.status === 'OK') { // Ошибок нет, возвращаем данные, если они есть
            console.log('Данные получены', responseJson);
            // Если есть данные, то передаем их в state
            if (responseJson.data) setResponseData(responseJson.data);
          } else {  // Ошибка бэкенда, вывод сообщения в модальное окно
            
            setMessage(responseJson.message); // Передача сообщения бэкенда об ошибке в модальное окно
            console.log('Ошибка с сообщением бэкенда', responseJson.message)
            handleShowAlert(); // Вызов модального окна
            }
          }
        ) 
      .catch((error) => { // Прочие ошибки
            console.log('Прочие ошибки: ', error.message);
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

// Вид Main - таблица или меню
  const mainType = props.mainType;
  const setMainType = props.setMainType;

const DataSender = props.DataSender;

  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;

  // Сущность сообщение о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;

  // Отображение и отправка полей ввода данных юзера
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода

  // Отображение и отправка полей ввода данных кражи
  const needInputSteal = props.needInputSteal; // Наличие свойства в меню ввода
  const requiredSteal = props.requiredSteal; // Обязательность свойства в меню ввода
  const sendItSteal = props.sendItSteal; // Отправка свойства в меню ввода

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
 const requestType = props.requestType;
 const setRequestType = props.setRequestType;

  // Данные полученные от бэкенда  
  const responseData = props.responseData;
  const setResponseData = props.setResponseData;
  const token = props.token;
  const setToken = props.setToken;



  return (
    <>
      <Navbar bg="light" expand="lg" style={{ paddingTop: 165 }}>
        <Container>
          <Nav className="me-auto my-2 my-lg-0 flex-column">
            <Nav.Link key={'1'} onClick={() => {   
                                                setRequestType('CreateCase');
                                                handleShow();                                                
                                                }
                                        } href="#action1">Сообщить о краже</Nav.Link>

            <Nav.Link key={'2'} href="#action2">Список сообщений о краже</Nav.Link>

            <Nav.Link key={'3'} onClick={() => { 
                                                setRequestType('CreateOfficer');
                                                handleShow();
                                               }
                                        } href="#action3">Регистрация сотрудника</Nav.Link>

            <Nav.Link key={'4'} onClick={() => { 
                                                setRequestType('GetAllOfficers');
                                                console.log('MainIsLog key=4 requestType', requestType);
                                                
                                                GetData(requestType, 
                                                        responseData,
                                                        setResponseData,
                                                        token,
                                                        setToken,
                                                        message,
                                                        setMessage,
                                                        handleShowAlert,
                                                        showAlert,
                                                        handleCloseAlert,
                                                        DataSender);
                                                 setMainType('MainIsTable');
                                               }
                                        } href="#action4">Список сотрудников</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {      
        requestType.includes('Case') ?  // PersonalData для сообщения о краже  и для сотрудника вызывается с разными параметрами                     
          <PersonalData userData={stealData} 
                        setUserData={setStealData} 
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
                        needInput = {needInputSteal} 
                        required = {requiredSteal}
                        sendIt = {sendItSteal}
                        responseData = {responseData}
                        setResponseData = {setResponseData}
                        token = {token}
                        setToken = {setToken}
          /> 
          :
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
            />
      }    
      <Container bg="light" expand="lg" >
        <div className="me-auto my-2 my-lg-0 flex-column"
        >
          </div>
        
      </Container>                              
    </>
  );

}

function GetData (requestType, // Тип запроса
                  responseData, // Данные полученные от бэкенда
                  setResponseData, // Состояние данных полученных от бэкенда
                  token, // Токен
                  setToken, // Состояние токена
                  message,  // Сообщение об ошибке
                  setMessage, // Состояние сообщения об ошибке
                  handleShowAlert, // Функция отображения сообщения об ошибке
                  showAlert,  // Состояние сообщения об ошибке
                  handleCloseAlert, // Функция скрытия сообщения об ошибке
                  DataSender) {  // Функция отправки запроса к бэкенду
// Функция получения списка сотрудников или краж с бэкенда

  // Тип запроса
  // console.log('GetData props', props);

  // const requestType = props.requestType;
  

  // Параметры запросов 
  const queryParameters = {
    Auth: {title: 'Проверка токена', url: 'https://sf-final-project-be.herokuapp.com/api/auth/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetAllCases: {title: 'Сообщения о кражах', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOneCase:	{title: 'Информация о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: true},
    GetAllOfficers:	{title: 'Список сотрудников', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOfficer: {title: 'Информация о сотруднике', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: true}
  }
  // const DataSender = props.DataSender;

  // Соcтояние модального окна с сообщением об ошибке
  // const showAlert = props.showAlert;
  // const handleShowAlert = props.handleShowAlert;
  // const handleCloseAlert = props.handleCloseAlert;   

  // Сообщение об ошибке
  // const message = props.message;
  // const setMessage = props.setMessage;

  // Данные полученные от бэкенда
  // const responseData = props.responseData
  // const setResponseData = props.setResponseData
  // const token = props.token;
  // const setToken = props.setToken;

  // Данные для отправки на бэкенд не нужны
  const sendingData = null;

  console.log('********* requestType', requestType);
  console.log('********* queryParameters[requestType].url', queryParameters[requestType].url) ;

  // Отправка запроса на бэкенд ЗАПРОСЫ С ID ТУТ НЕ ДЕЛАЮТСЯ
  
  DataSender (sendingData, 
              handleShowAlert, 
              setMessage, 
              queryParameters[requestType].url,
              queryParameters[requestType].bodyInQuery, 
              queryParameters[requestType].choiceMethod, 
              token, 
              responseData, 
              setResponseData);
  
}
  



function MainTable(props) {
  // Главная страница с отображением таблицы с данными о кражах и сотрудниках
  
  const DataSender = props.DataSender;

  const mainType = props.mainType;
  const setMainType = props.setMainType;
  
  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;

  // Сущность сообщение о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;

  // Отображение и отправка полей ввода данных юзера
  const needInput = props.needInput; // Наличие свойства в меню ввода
  const required = props.required; // Обязательность свойства в меню ввода
  const sendIt = props.sendIt; // Отправка свойства в меню ввода

  // Отображение и отправка полей ввода данных кражи
  const needInputSteal = props.needInputSteal; // Наличие свойства в меню ввода
  const requiredSteal = props.requiredSteal; // Обязательность свойства в меню ввода
  const sendItSteal = props.sendItSteal; // Отправка свойства в меню ввода

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
    const requestType = props.requestType;
    const setRequestType = props.setRequestType;
  
    // Данные полученные от бэкенда  
    const responseData = props.responseData;
    const setResponseData = props.setResponseData;
    const token = props.token;
    const setToken = props.setToken;

    console.log('********* MainTable 1 props', props);
  
    
    GetData(requestType, 
            responseData,
            setResponseData,
            token,
            setToken,
            message,
            setMessage,
            handleShowAlert,
            showAlert,
            handleCloseAlert,
            DataSender);
  
    console.log('********* MainTable 2 responseData', responseData);

    return (
      <Table striped bordered hover variant="secondary" expand="lg" style={{ marginTop: 129 }}>
      <thead >
        <tr>
        {
          userData.map((rec) => {   
           return <th key={rec.i}>{rec.dataTitle}</th>
          })
        }
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

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

  // Вид Main - таблица или меню
  const [mainType, setMainType] = useState('MainIsLog');

  // Вид запроса к бэкенду
  const [requestType, setRequestType] = useState('SignIn');

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

  // ---------------------------------------------------------------------------------------------------
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
      value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах, где нужен
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
      dataTitle: 'approved', // string Название свойства
      value: '', // string Подтвержден ли сотрудник 
      i: 6
    }
  ]);

    // Наличие свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const needInput = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },  
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'id', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: true // boolean
    }
    ];

    // Обязательно к заполнению свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const required = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'id', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    }
    ];

    // Наличие свойства в отправке на сервер
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const sendIt = [
    {
        dataName: 'email', // string имя поля в объекте
        SignIn: true, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'firstName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'lastName', // string имя поля в объекте
        SignIn: false, // boolean 
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'password', // string имя поля в объекте
        SignIn: true, // boolean
        SignUp: true, // boolean 
        CreateOfficer: true // boolean
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: true, // boolean 
        CreateOfficer: false // boolean 
    },
    {
        dataName: 'id', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: false // boolean
    },
    {
        dataName: 'approved', // string имя поля в объекте
        SignIn: false, // boolean
        SignUp: false, // boolean 
        CreateOfficer: true // boolean
    }
    ];

    // ---------------------------------------------------------------------------------------------------    
    // Сущность сообщение о краже, если есть сохраненные данные в localStorage то берем их
    const [stealData, setStealData] = useState(      // useState(JSON.parse(window.localStorage.getItem('stealData')) ||
    [
    {
        dataName: 'type', // string имя поля в объекте  +++
        dataTitle: 'Тип велосипеда', // string Название свойства
        value: '', // string 
        i: 0
    },
    {
        dataName: 'licenseNumber', // string имя поля в объекте   +++
        dataTitle: 'Номер лицензии', // string Название свойства
        value: '',	// string 
        i: 1
    },
    {
        dataName: 'ownerFullName', // string имя поля в объекте +++
        dataTitle: 'ФИО арендатора велосипеда', // string Название свойства
        value: '',	// string 
        i: 2
    },
    {
        dataName: 'color', // string имя поля в объекте   +++
        dataTitle: 'Цвет велосипеда', // string Название свойства
        value: '',	// string 
        i: 3
    },
    {
        dataName: 'clientId', // string имя поля в объекте  +++
        dataTitle: 'clientId', // string Название свойства
        value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах
        i: 4
    },
    {
        dataName: 'createdAt', // string имя поля в объекте +++
        dataTitle: 'Дата создания сообщения', // string
        value: '', // date 
        i: 5
    },
    {
        dataName: 'updatedAt', // string имя поля в объекте   +++
        dataTitle: 'Дата обновления сообщения', // string Название свойства
        value: '', // date 
        i: 6
    },
    {
        dataName: 'status', // string имя поля в объекте  +++
        dataTitle: 'Статус сообщения', // string Название свойства
        value: '', // string Статус сообщения Возможные значения: new, in_progres, done
        i: 7
    },
    {
        dataName: 'date', // string имя поля в объекте  +++
        dataTitle: 'Дата кражи', // string Название свойства
        value: '', // date 
        i: 8
    },
    {
        dataName: 'description', // string имя поля в объекте   +++
        dataTitle: 'Комментарий', // string Название свойства
        value: '', // string 
        i: 9
    },
    {
        dataName: 'resolution', // string имя поля в объекте    +++
        dataTitle: 'Завершающий комментарий', // string Название свойства
        value: '', // string 
        i: 10
    },
    {
        dataName: 'officer', // string имя поля в объекте   +++
        dataTitle: 'Ответственный сотрудник', // string Название свойства
        value: '', // string Валидным значением может быть только действующий id ответственного сотрудника из базы
        i: 11
    }
    ]); 


    // Наличие свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const needInputSteal = [
      {
          dataName: 'type', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'licenseNumber', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'ownerFullName', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },  
      {
          dataName: 'color', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'clientId', // string имя поля в объекте
          CreateCase: false, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: false, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'createdAt', // string имя поля в объекте
          CreateCase: false, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: false, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'updatedAt', // string имя поля в объекте
          CreateCase: false, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: false, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'status', // string имя поля в объекте
          CreateCase: false, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'date', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'description', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: true, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'resolution', // string имя поля в объекте
          CreateCase: false, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      },
      {
          dataName: 'officer', // string имя поля в объекте
          CreateCase: true, // boolean 
          CreateCasePublic: false, // boolean 
          EditCase: true, // boolean
          DeleteCase: false, // boolean
          GetAllCases: false, // boolean
          GetOneCase: false // boolean
      }
      ];

    // Обязательно к заполнению свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве stealData
    const requiredSteal = [
      {
        dataName: 'type', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'licenseNumber', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'ownerFullName', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },  
    {
        dataName: 'color', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'createdAt', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'updatedAt', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'status', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'date', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'description', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'resolution', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'officer', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    }
    ];


    // Наличие свойства в отправке на сервер
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const sendItSteal = [
      {
        dataName: 'type', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'licenseNumber', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'ownerFullName', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },  
    {
        dataName: 'color', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'clientId', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: false, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'createdAt', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'updatedAt', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'status', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'date', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'description', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: true, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'resolution', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    },
    {
        dataName: 'officer', // string имя поля в объекте
        CreateCase: true, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: true, // boolean
        DeleteCase: false, // boolean
        GetAllCases: false, // boolean
        GetOneCase: false // boolean
    }
    ];

    // ---------------------------------------------------------------------------------------------------

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

    useEffect(() => {
      console.log('Хороший responsson: ', responseData);
    // Когда изменяется responseData, записываем новые данные в userData и token
    if (responseData==undefined) return;  // Если нет данных от бэкенда, то ничего не возвращаем? или исходные данные userData if (responseData==undefined) {return rec} // Если нет данных от бэкенда, то возвращаем исходные данные userData 
    if (responseData.token!==undefined) {  // Если есть токен, то записываем его в token
      setToken(responseData.token); 
      console.log('PersonalData responseData.token', responseData.token);
      setUserData(userData.map((rec) => {   // Если есть .token, должен быть и .user 
        console.log('PersonalData userdata rec.dataName', responseData.user[rec.dataName]);
        if (responseData.user[rec.dataName]==undefined) return rec // Если нет данных в .user, то возвращаем исходные данные userData
            else return {...rec, value:responseData.user[rec.dataName]}
        })); 
      }
    if (responseData.status!==undefined) { // Если нет .token, но есть .status, возможно это данные о краже        ****************
      setStealData(stealData.map((rec) => {   
        console.log('PersonalData stealdata rec.dataName', responseData[rec.dataName]);
          if (responseData[rec.dataName]==undefined) return rec // Если нет данных то возвращаем исходные данные из userData ??????????
              else return {...rec, value:responseData[rec.dataName]}
          }));
      }
      if (responseData.email!==undefined) { // Если нет .token или .status, но есть email, это данные о сотруднике
        setUserData(userData.map((rec) => {   
          console.log('PersonalData officerdata rec.dataName', responseData[rec.dataName]);
            if (responseData[rec.dataName]==undefined) return rec // Если нет данных то возвращаем исходные данные из userData
                else return {...rec, value:responseData[rec.dataName]}
            }));
        } 
    }, [responseData]);

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
                         needInput = {needInput} 
                         required = {required}
                         sendIt = {sendIt}
                         responseData = {responseData}
                         setResponseData = {setResponseData}
                         token = {token}
                         setToken = {setToken}
                         stealData={stealData} 
                         setStealData={setStealData}
                         needInputSteal = {needInputSteal} 
                         requiredSteal = {requiredSteal}
                         sendItSteal = {sendItSteal}
                         stealData = {stealData}
                         setStealData = {setStealData}
                         requestType = {requestType}
                        setRequestType = {setRequestType}
                                              
            />
            <MainStart />
          </>
          :
          <>
            <HeaderIsLog  userData={userData}
            />
            {
            mainType==='MainIsLog' ?
              <MainIsLog  userData={userData}   
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
                          needInput = {needInput} 
                          required = {required}
                          sendIt = {sendIt}
                          responseData = {responseData}
                          setResponseData = {setResponseData}
                          token = {token}
                          setToken = {setToken}
                          stealData={stealData} 
                          setStealData={setStealData}
                          needInputSteal = {needInputSteal} 
                          requiredSteal = {requiredSteal}
                          sendItSteal = {sendItSteal}
                          mainType = {mainType}
                          setMainType = {setMainType}
                          requestType = {requestType}
                          setRequestType = {setRequestType}

              />
              :
              <MainTable  userData={userData}
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
                          needInput = {needInput} 
                          required = {required}
                          sendIt = {sendIt}
                          responseData = {responseData}
                          setResponseData = {setResponseData}
                          token = {token}
                          setToken = {setToken}
                          stealData={stealData} 
                          setStealData={setStealData}
                          needInputSteal = {needInputSteal} 
                          requiredSteal = {requiredSteal}
                          sendItSteal = {sendItSteal}
                          mainType = {mainType}
                          setMainType = {setMainType}
                          requestType = {requestType}
                          setRequestType = {setRequestType}
              />
            }
          </>
      }

      <FetchAlert showAlert={showAlert} handleCloseAlert={handleCloseAlert} message={message} />
      <Footer />
    </>
  );

}


export default App



