import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import GetData from '../accessories/getdata';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям



function MainIsLog(props) {
  // Главная страница залогиненого юзера

  // Вид Main - таблица или меню
  const mainType = props.mainType;
  const setMainType = props.setMainType;

  const DataSender = props.DataSender;

  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;
  const initUserData = props.initUserData;

  // Сущность сообщение о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;
  const initStealData = props.initStealData;

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
  const token = props.token;
  const setToken = props.setToken;
  const allOfficersData = props.allOfficersData;
  const setAllOfficersData = props.setAllOfficersData;
  const allStealsData = props.allStealsData;
  const setAllStealsData = props.setAllStealsData;

  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg" style={{ paddingTop: 165 }}>
        <Container>
          <Nav className="me-auto my-2 my-lg-0 flex-column">
            <Nav.Link key={'1'} onClick={() => {
              setRequestType('CreateCase');
              initStealData();
              handleShow();
            }
            } href="#action1">Сообщить о краже</Nav.Link>

            <Nav.Link key={'2'} onClick={() => {
              setRequestType('GetAllCases');
              GetData('GetAllOfficers', // Лучше бы переменную requestType передавать, но она не успевает обновиться
                token,
                setToken,
                message,
                setMessage,
                handleShowAlert,
                showAlert,
                handleCloseAlert,
                DataSender,
                allOfficersData,
                setAllOfficersData,
                allStealsData,
                setAllStealsData,
                userData,
                stealData,
                setUserData,
                setStealData,
                ''); // Пустая строка, т.к. не нужен id для получения списка сотрудников

              GetData('GetAllCases', // Лучше бы переменную requestType передавать, но она не успевает обновиться
                token,
                setToken,
                message,
                setMessage,
                handleShowAlert,
                showAlert,
                handleCloseAlert,
                DataSender,
                allOfficersData,
                setAllOfficersData,
                allStealsData,
                setAllStealsData,
                userData,
                stealData,
                setUserData,
                setStealData,
                ''); // Пустая строка, т.к. не нужен id для получения списка сотрудников
              setMainType('MainIsTable');
            }
            } href="#action2">Список сообщений о краже</Nav.Link>

            <Nav.Link key={'3'} onClick={() => {
              setRequestType('CreateOfficer');
              initUserData();
              handleShow();
            }
            } href="#action3">Регистрация сотрудника</Nav.Link>

            <Nav.Link key={'4'} onClick={() => {
              setRequestType('GetAllOfficers');
              GetData('GetAllOfficers', // Лучше бы переменную requestType передавать, но она не успевает обновиться
                token,
                setToken,
                message,
                setMessage,
                handleShowAlert,
                showAlert,
                handleCloseAlert,
                DataSender,
                allOfficersData,
                setAllOfficersData,
                allStealsData,
                setAllStealsData,
                userData,
                stealData,
                setUserData,
                setStealData,
                ''); // Пустая строка, т.к. не нужен id для получения списка сотрудников
              setMainType('MainIsTable');
            }
            } href="#action4">Список сотрудников</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {
        requestType.includes('Case') ?  // PersonalData для сообщения о краже  и для сотрудника вызывается с разными параметрами                     
          <PersonalData sendData={stealData}
            userData={userData}
            stealData={stealData}
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
            needInput={needInputSteal}
            required={requiredSteal}
            sendIt={sendItSteal}
            allOfficersData={allOfficersData}
            allStealsData={allStealsData}
            token={token}
            setToken={setToken}
            setStealData={setStealData}
            setAllOfficersData={setAllOfficersData}
            setAllStealsData={setAllStealsData}
            setMainType={setMainType}
            mainType={mainType}


          />
          :
          <PersonalData sendData={userData}
            userData={userData}
            stealData={stealData}
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
            needInput={needInput}
            required={required}
            sendIt={sendIt}
            allOfficersData={allOfficersData}
            allStealsData={allStealsData}
            token={token}
            setToken={setToken}
            setStealData={setStealData}
            setAllOfficersData={setAllOfficersData}
            setAllStealsData={setAllStealsData}
            setMainType={setMainType}
            mainType={mainType}
          />
      }

    </>
  );

}


export default MainIsLog;