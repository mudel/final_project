import React from 'react';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям


async function GetData(requestType, // Тип запроса
  token, // Токен
  setToken, // Состояние токена
  message,  // Сообщение об ошибке
  setMessage, // Состояние сообщения об ошибке
  handleShowAlert, // Функция отображения сообщения об ошибке
  showAlert,  // Состояние сообщения об ошибке
  handleCloseAlert, // Функция скрытия сообщения об ошибке
  DataSender, // Функция отправки запроса к бэкенду
  allOfficersData,
  setAllOfficersData,
  allStealsData,
  setAllStealsData,
  userData,
  stealData,
  setUserData,
  setStealData,
  id
) {
  // Функция получения списка сотрудников или краж с бэкенда

  // Тип запроса

  // Параметры запросов 
  const queryParameters = {
    Auth: { title: 'Проверка токена', url: 'https://sf-final-project-be.herokuapp.com/api/auth/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    GetAllCases: { title: 'Сообщения о кражах', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    GetOneCase: { title: 'Информация о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: true },
    GetAllOfficers: { title: 'Список сотрудников', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    GetOfficer: { title: 'Информация о сотруднике', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: true }
  };

  // Данные для отправки на бэкенд не нужны
  const sendingData = null;

  // url может иметь в конце строки id
  const url = queryParameters[requestType].url + (queryParameters[requestType].needId ? id : '');

  // Отправка запроса на бэкенд ЗАПРОСЫ С ID ТУТ НЕ ДЕЛАЮТСЯ

  DataSender(sendingData,
    handleShowAlert,
    setMessage,
    requestType,
    url,
    queryParameters[requestType].bodyInQuery,
    queryParameters[requestType].choiceMethod,
    token,
    setToken,
    userData,
    setUserData,
    stealData,
    setStealData,
    setAllOfficersData,
    setAllStealsData);

}


export default GetData;