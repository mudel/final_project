import React from 'react';
import { useState } from 'react';
import { Table} from 'react-bootstrap';
import GetData from '../accessories/getdata.jsx';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям





function MainTable(props) {
  // Главная страница с отображением таблицы с данными о кражах и сотрудниках

  const DataSender = props.DataSender;
  const initUserData = props.initUserData;

  const mainType = props.mainType;
  const setMainType = props.setMainType;

  // Сущность залогеный юзер
  const userData = props.userData;
  const setUserData = props.setUserData;

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
      {
        requestType === 'GetAllCases' || requestType === 'GetOneCase' || requestType === 'EditCase' ?
          <>
            <Table striped bordered hover variant="secondary" expand="lg" style={{ marginTop: 129 }}>
              <thead >
                <tr key={'100'}>
                  <th key={'0'}>Тип</th>
                  <th key={'1'}>Арендатор</th>
                  <th key={'2'}>Лицензия</th>
                  <th key={'3'}>Цвет</th>
                  <th key={'4'}>Статус</th>
                  <th key={'5'}>Дата кражи</th>
                  <th key={'6'}>Дата сообщения</th>
                  <th key={'7'}>Дата обновления</th>
                  <th key={'8'}>Комментарий</th>
                  <th key={'9'}>Заверш. комм.</th>
                  <th key={'10'}>Сотрудник</th>
                </tr>
              </thead>
              <tbody>
                {
                  allStealsData && allOfficersData &&
                  allStealsData.map((rec) => {
                    return (
                      <tr key={rec._id}
                        onClick={() => {
                          setRequestType('GetOneCase');
                          GetData('GetOneCase', // Лучше бы переменную requestType передавать, но она не успевает обновиться
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
                            rec._id)
                            .then(() => {
                              setRequestType('EditCase');
                              handleShow();
                              initStealData();
                            });
                        }}
                      >
                        <td key={'0'}>{rec.type}</td>
                        <td key={'1'}>{rec.ownerFullName}</td>
                        <td key={'2'}>{rec.licenseNumber}</td>
                        <td key={'3'}>{rec.color}</td>
                        <td key={'4'}>{rec.status}</td>
                        <td key={'5'}>{rec.date}</td>
                        <td key={'6'}>{rec.createdAt}</td>
                        <td key={'7'}>{rec.updatedAt}</td>
                        <td key={'8'}>{rec.description}</td>
                        <td key={'9'}>{rec.resolution}</td>
                        <td key={'10'}>
                          {allOfficersData.filter((rec2) => (rec2._id === rec.officer)).map((rec2) => (
                            <>
                              {rec2.firstName ? rec2.firstName : ''}
                              {' '}
                              {rec2.lastName ? rec2.lastName : ''}
                              {rec2.firstName || rec2.lastName ? '' : rec2.email}
                            </>
                          ))}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </>
          :
          <>
            <Table striped bordered hover variant="secondary" expand="lg" style={{ marginTop: 129 }}>
              <thead >
                <tr key={'100'}>
                  <th key={'0'}>e-mail</th>
                  <th key={'1'}>Имя</th>
                  <th key={'2'}>Фамилия</th>
                  <th key={'5'}>Одобрен</th>
                </tr>
              </thead>
              <tbody>
                {
                  allOfficersData &&
                  allOfficersData.map((rec) => {
                    return (
                      <tr key={rec._id}
                        onClick={() => {
                          setRequestType('GetOfficer');
                          GetData('GetOfficer', // Лучше бы переменную requestType передавать, но она не успевает обновиться
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
                            rec._id)
                            .then(() => {
                              setRequestType('UpdateOfficer');
                              handleShow();
                              initUserData();
                            });
                        }}
                      >
                        <td key={'0'}>{rec.email}</td>
                        <td key={'1'}>{rec.firstName}</td>
                        <td key={'2'}>{rec.lastName}</td>
                        <td key={'5'}>{rec.approved ? 'Да' : 'Нет'}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </>
      }

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

export default MainTable;