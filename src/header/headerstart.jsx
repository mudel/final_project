import React from 'react';
import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import bystrologo from '../images/bystrologo.png';


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
  const mainType = props.mainType;

  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;
  const allOfficersData = props.allOfficersData;

  // Сущность сообщение о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;
  const allStealsData = props.allStealsData;

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
  const token = props.token;
  const setToken = props.setToken;
  const setAllOfficersData = props.setAllOfficersData;
  const setAllStealsData = props.setAllStealsData;

  const [userOrSteal, setUserOrSteal] = useState('user');

  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="secondary" expand="lg">
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
            <Nav.Link key='0' onClick={() => {
              setRequestType('SignIn');
              setUserOrSteal('user')
              handleShow();
            }} className="text-white">Вход в систему</Nav.Link>
            <Nav.Link key='1' onClick={() => {
              setRequestType('SignUp');
              setUserOrSteal('user');
              handleShow();
            }} className="text-white">Регистрация сотрудника</Nav.Link>
            <Nav.Link key='2' onClick={() => {
              setRequestType('CreateCasePublic');
              setUserOrSteal('steal');
              handleShow();
            }} className="text-white">Сообщение о краже</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {
        userOrSteal === 'user' ?
          <>
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
              token={token}
              setToken={setToken}
              setStealData={setStealData}
              setAllOfficersData={setAllOfficersData}
              setAllStealsData={setAllStealsData}
              setMainType={setUserOrSteal}
              mainType={mainType}
              allOfficersData={allOfficersData}
              allStealsData={allStealsData}
            />
          </>
          :
          <>
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
              token={token}
              setToken={setToken}
              setStealData={setStealData}
              setAllOfficersData={setAllOfficersData}
              setAllStealsData={setAllStealsData}
              setMainType={setUserOrSteal}
              mainType={mainType}
              allOfficersData={allOfficersData}
              allStealsData={allStealsData}
            />
          </>
      }
    </>
  );

}



export default HeaderStart;