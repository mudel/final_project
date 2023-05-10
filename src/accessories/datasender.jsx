import React from 'react';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям


async function DataSender(sendingData,
  handleShowAlert,
  setMessage,
  requestType,
  url,
  bodyInQuery,
  choiceMethod,
  token,
  setToken,
  userData,
  setUserData,
  stealData,
  setStealData,
  setAllOfficersData,
  setAllStealsData
) {
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
  if (bodyInQuery) { query.body = queryBody } // В некоторых типах запросов body не должно быть, иначе ошибка

  const response = await fetch(url, query)
    // Собственно функция-запрос к бэкенду
    .then(response => response.json())
    .then(
      responseJson => {
        if (responseJson.status !== 'ERR') { // Ошибок нет, возвращаем данные, если они есть
          // Если есть данные, то передаем их в state
          if (['SignIn', 'Auth'].includes(requestType)) {
            setToken(responseJson.data.token);
            setUserData(userData.map((rec) => {
              if (responseJson.data.user[rec.dataName] == undefined) return { ...rec, value: '' } // Если нет данных в .user, то возвращаем ''
              else return { ...rec, value: responseJson.data.user[rec.dataName] }
            }));
          };
          if (['CreateOfficer', 'UpdateOfficer', 'GetOfficer'].includes(requestType)) {
            setUserData(userData.map((rec) => {
              if (responseJson.data[rec.dataName] == undefined) return { ...rec, value: '' } // Если нет данных в .user, то возвращаем ''
              else return { ...rec, value: responseJson.data[rec.dataName] }
            }));
          }
          if (['CreateCase', 'CreateCasePublic', 'EditCase', 'GetOneCase'].includes(requestType)) {
            setStealData(stealData.map((rec) => {
              if (responseJson.data[rec.dataName] == undefined) return { ...rec, value: '' } // Если нет данных то возвращаем ''
              else return { ...rec, value: responseJson.data[rec.dataName] }
            }));
          }
          if (requestType === 'GetAllOfficers') {
            setAllOfficersData(responseJson.officers);
          }
          if (requestType === 'GetAllCases') {
            setAllStealsData(responseJson.data);
          }

        } else {  // Ошибка бэкенда, вывод сообщения в модальное окно

          setMessage(responseJson.message); // Передача сообщения бэкенда об ошибке в модальное окно
          handleShowAlert(); // Вызов модального окна
        }
      }
    )
    .catch((error) => { // Прочие ошибки
      setMessage(error.message); // Передача сообщения fetch об ошибке в модальное окно
      handleShowAlert(); // Вызов модального окна
    });

}

export default DataSender;
