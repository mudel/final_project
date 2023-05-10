import React from 'react';
import { useState } from 'react';
import { Modal, Form, Row, Button } from 'react-bootstrap';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям

function PersonalData(props) {
  // Универсальная функция для ввода данных юзера и кражи

  const DataSender = props.DataSender;

  // Передаваемые данные
  const sendData = props.sendData;
  const mainType = props.mainType;
  const setMainType = props.setMainType;

  // Данные пользователя
  const userData = props.userData;
  const setUserData = props.setUserData;
  const setUserIsLogged = props.setUserIsLogged;
  const allOfficersData = props.allOfficersData;

  // Данные о краже
  const stealData = props.stealData;
  const setStealData = props.setStealData;

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
    SignUp: { title: 'Cоздание учетной записи', url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up', choiceMethod: 'POST', bodyInQuery: true, needId: false },
    SignIn: { title: 'Авторизация пользователя', url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in', choiceMethod: 'POST', bodyInQuery: true, needId: false },
    Auth: { title: 'Проверка токена', url: 'https://sf-final-project-be.herokuapp.com/api/auth/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    CreateCase: { title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'POST', bodyInQuery: true, needId: false },
    CreateCasePublic: { title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/public/report', choiceMethod: 'POST', bodyInQuery: true, needId: false },
    EditCase: { title: 'Редактирование информации о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'PUT', bodyInQuery: true, needId: true },
    DeleteCase: { title: 'Удаление сообщения о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true },
    GetAllCases: { title: 'Сообщения о кражах', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    GetOneCase: { title: 'Информация о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: true },
    CreateOfficer: { title: 'Cоздание нового сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers', choiceMethod: 'POST', bodyInQuery: true, needId: false },
    UpdateOfficer: { title: 'Редактирование данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'PUT', bodyInQuery: true, needId: true },
    DeleteOfficer: { title: 'Удаление данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true },
    GetAllOfficers: { title: 'Список сотрудников', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: false },
    GetOfficer: { title: 'Информация о сотруднике', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: true }
  }

  // Данные полученные от бэкенда
  const token = props.token;
  const setToken = props.setToken;
  // const allOfficersData = props.allOfficersData;
  const setAllOfficersData = props.setAllOfficersData;
  // const allStealsData = props.allStealsData;
  const setAllStealsData = props.setAllStealsData;
  const allStealsData = props.allStealsData;
  const [validated, setValidated] = useState(false);



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity()) {
      event.preventDefault();
      handleClose();
      // Формируем объект с данными для отправки на бэкенд - выбираем только те данные, которые нужно отправить в этом запросе
      // Пароль отправляем только если это запрос на создание нового пользователя или при редактировании существующего введен новый
      let sendingData = sendData.filter((rec) => (sendIt[rec.i][requestType] === true) && (!(mainType === 'MainIsTable' && rec.dataName === 'password' && rec.value !== ''))).map(rec => {
        const container = {};
        container[rec.dataName] = rec.value;
        return container;
      });
      sendingData = sendingData.reduce((acc, rec) => {
        return { ...acc, ...rec }
      }, {});

      // Когда окно закрывается данные должны отправляться на бэкенд

      DataSender(sendingData,
        handleShowAlert,
        setMessage,
        requestType,
        queryParameters[requestType].url + ((queryParameters[requestType].needId === true) ? sendData[5].value : ''),
        queryParameters[requestType].bodyInQuery,
        queryParameters[requestType].choiceMethod,
        token,
        setToken,
        userData,
        setUserData,
        stealData,
        setStealData,
        setAllOfficersData,
        setAllStealsData
      );
    }
    if (mainType === 'MainIsTable') setMainType('MainIsLog'); // Выход из таблицы, если мы там  
  };

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
              {sendData.filter((rec) => (needInput[rec.i][requestType] === true)).map((rec) => (
                (rec.dataName !== 'approved' && rec.dataName !== 'type' && rec.dataName !== 'status' && rec.dataName !== 'officer') ?
                  <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
                    <Form.Label>{rec.dataTitle}</Form.Label>
                    <Form.Control
                      required={mainType === 'MainIsTable' && rec.dataName === 'password' ? false : required[rec.i][requestType]} // При редактировании данных сотрудника пароль можно только заменить на новый
                      disabled={mainType === 'MainIsTable' && (rec.dataName === 'email' | rec.dataName === 'clientId' | rec.dataName === 'createdAt' | rec.dataName === 'updatedAt')} // Поля, которые запрещено редактировать
                      type="text"
                      placeholder={rec.dataTitle}
                      defaultValue={mainType === 'MainIsTable' && rec.dataName === 'password' ? '' : rec.value}
                      onChange={event => rec.value = event.target.value}
                    />
                    <Form.Control.Feedback type="invalid">Обязательный параметр</Form.Control.Feedback>
                  </Form.Group>
                  :
                  rec.dataName === 'type' ?
                    <>
                      <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
                        <Form.Label>{rec.dataTitle}</Form.Label>
                        <Form.Select
                          onChange={event => rec.value = event.target.value}
                          defaultValue={rec.value}
                        >
                          <option>{rec.value}</option>
                          <option value={'general'}>general</option>
                          <option value={'sport'}>sport</option>
                        </Form.Select>
                      </Form.Group>
                    </>
                    :
                    rec.dataName === 'status' ?
                      <>
                        <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
                          <Form.Label>{rec.dataTitle}</Form.Label>
                          <Form.Select
                            onChange={event => rec.value = event.target.value}
                            defaultValue={rec.value}
                          >
                            <option>{rec.value}</option>
                            <option value={'new'}>new</option>
                            <option value={'in_progress'}>in_progress</option>
                            {/* {sendData[10].value!=='' &&  */}
                            <option value={'done'}>done</option>}
                          </Form.Select>
                        </Form.Group>
                      </>
                      :
                      rec.dataName === 'approved' ?
                        <>
                          <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
                            <Form.Label>{rec.dataTitle}</Form.Label>
                            <Form.Select
                              onChange={event => rec.value = event.target.value}
                              defaultValue={rec.value}
                            >
                              <option>{rec.value ? 'Да' : 'Нет'}</option>
                              <option value={true}>Да</option>
                              <option value={false}>Нет</option>
                            </Form.Select>
                          </Form.Group>
                        </>
                        :
                        <> {/* rec.dataName==='officer' */}
                          <Form.Group key={rec.dataName} className="mb-3" controlId={rec.dataName}>
                            <Form.Label>{rec.dataTitle}</Form.Label>
                            <Form.Select
                              onChange={event => rec.value = event.target.value}
                              defaultValue={rec.value}
                            >
                              <option key={111}>
                                {allOfficersData.filter((rec2) => (rec2._id === rec.value)).map((rec2) => (
                                  <>
                                    {rec2.firstName ? rec2.firstName : ''}
                                    {' '}
                                    {rec2.lastName ? rec2.lastName : ''}
                                    {rec2.firstName || rec2.lastName ? '' : rec2.email}
                                  </>
                                ))}
                              </option>
                              {allOfficersData.filter((rec2) => (rec2['approved'] === true)).map((rec2) => (
                                <option key={rec2._id} value={rec2._id}>
                                  {rec2.firstName ? rec2.firstName : ''}
                                  {' '}
                                  {rec2.lastName ? rec2.lastName : ''}
                                  {rec2.firstName || rec2.lastName ? '' : rec2.email}
                                </option>

                              ))}
                            </Form.Select>
                          </Form.Group>
                        </>
              ))}
              <Button type="submit">Ввод</Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );

}
    export default PersonalData;