import React from 'react';
import { useState, useEffect } from 'react';
import HeaderStart from './header/headerstart';
import HeaderIsLog from './header/headerislog';
import PersonalData from './accessories/personaldata';
import MainStart from './main/mainstart';
import DataSender from './accessories/datasender';
import FetchAlert from './accessories/fetchalert';
import MainIsLog from './main/mainislog';
import MainTable from './main/maintable';
import Footer from './footer/footer';


// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.


function App() {

  // Состояние авторизации юзера
  const [userIsLogged, setUserIsLogged] = useState(false);

  // Вид Main - таблица или меню
  const [mainType, setMainType] = useState('MainIsLog');

  // Вид запроса к бэкенду
  const [requestType, setRequestType] = useState('SignIn');

  // Сосотояние модального окна сообщения об ошибке обмена данными с бэкендом
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);

  // Состояние модального окна регистрации сотрудника
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Сообщение об ошибке обмена данными с бэкендом
  const [message, setMessage] = useState('');

  // Данные полученные от бэкенда
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')) || '');
  const [allOfficersData, setAllOfficersData] = useState(null);
  const [allStealsData, setAllStealsData] = useState(null);

  // ---------------------------------------------------------------------------------------------------
  // Сущность Ответственный сотрудник, если есть сохраненные данные в localStorage то берем их
  // const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('userData')) ||

  const userDataInit =
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
        value: 'c8e443ac-a396-46d6-9cf7-98d1ef1b4b7asxeeTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах, где нужен
        i: 4
      },
      {
        dataName: '_id', // string имя поля в объекте
        dataTitle: 'id', // string Название свойства
        value: '', // string id сотрудника Обязательное поле?
        i: 5
      },
      {
        dataName: 'approved', // string имя поля в объекте
        dataTitle: 'Одобрен', // string Название свойства
        value: '', // string Подтвержден ли сотрудник 
        i: 6
      }
    ];

  const [userData, setUserData] = useState(userDataInit);
  const initUserData = () => setUserData(userDataInit);



  // Наличие свойства в меню ввода
  // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
  const needInput = [
    {
      dataName: 'email', // string имя поля в объекте
      SignIn: true, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'firstName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean

    },
    {
      dataName: 'lastName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'password', // string имя поля в объекте
      SignIn: true, // boolean
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'clientId', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: '_id', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'approved', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    }
  ];

  // Обязательно к заполнению свойства в меню ввода
  // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
  const required = [
    {
      dataName: 'email', // string имя поля в объекте
      SignIn: true, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'firstName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false
    },
    {
      dataName: 'lastName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false
    },
    {
      dataName: 'password', // string имя поля в объекте
      SignIn: true, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true
    },
    {
      dataName: 'clientId', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false
    },
    {
      dataName: '_id', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false
    },
    {
      dataName: 'approved', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false
    }
  ];

  // Наличие свойства в отправке на сервер
  // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
  const sendIt = [
    {
      dataName: 'email', // string имя поля в объекте
      SignIn: true, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'firstName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'lastName', // string имя поля в объекте
      SignIn: false, // boolean 
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'password', // string имя поля в объекте
      SignIn: true, // boolean
      SignUp: true, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    },
    {
      dataName: 'clientId', // string имя поля в объекте
      SignIn: true, // boolean
      SignUp: true, // boolean 
      CreateOfficer: false, // boolean 
      UpdateOfficer: false // boolean
    },
    {
      dataName: '_id', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: false, // boolean
      UpdateOfficer: false // boolean
    },
    {
      dataName: 'approved', // string имя поля в объекте
      SignIn: false, // boolean
      SignUp: false, // boolean 
      CreateOfficer: true, // boolean
      UpdateOfficer: true // boolean
    }
  ];

  // ---------------------------------------------------------------------------------------------------    
  // Сущность сообщение о краже, если есть сохраненные данные в localStorage то берем их
  const stealDataInit =
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
        value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах
        i: 4
      },
      {
        dataName: '_id', // string имя поля в объекте   
        dataTitle: 'id', // string Название свойства
        value: '', // string 
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
        value: '', // string Валидным значением может быть только действующий id ответственного сотрудника из базы
        i: 11
      },
      {
        dataName: 'createdAt', // string имя поля в объекте 
        dataTitle: 'Дата создания сообщения', // string
        value: '', // date 
        i: 12
      },
      {
        dataName: '__v', // string имя поля в объекте   
        dataTitle: 'v', // string Название свойства
        value: '', // string 
        i: 13
      }
    ];

  
  const [stealData, setStealData] = useState(stealDataInit);
  const initStealData = () => setStealData(stealDataInit);


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
      dataName: '_id', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
      DeleteCase: false, // boolean
      GetAllCases: false, // boolean
      GetOneCase: false // boolean
    },
    {
      dataName: 'updatedAt', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
      DeleteCase: false, // boolean
      GetAllCases: false, // boolean
      GetOneCase: true // boolean
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
      GetAllCases: true, // boolean
      GetOneCase: true // boolean
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
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
      DeleteCase: false, // boolean
      GetAllCases: false, // boolean
      GetOneCase: false // boolean
    },
    {
      dataName: 'createdAt', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
      DeleteCase: false, // boolean
      GetAllCases: false, // boolean
      GetOneCase: true // boolean
    },
    {
      dataName: '__v', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: false, // boolean
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
      dataName: '_id', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
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
      dataName: '__v', // string имя поля в объекте
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
      dataName: '_id', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
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
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: true, // boolean
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
      dataName: '__v', // string имя поля в объекте
      CreateCase: false, // boolean 
      CreateCasePublic: false, // boolean 
      EditCase: false, // boolean
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
  // useEffect(() => {
  //   // Когда изменяется userData, сохраняем данные в localStorage
  //   window.localStorage.setItem('userData', JSON.stringify(userData));
  // }, [userData]);


  // Отладка
  useEffect(() => {
    // Когда изменяется allOfficersData
  }, [allOfficersData]);


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
              needInput={needInput}
              required={required}
              sendIt={sendIt}
              token={token}
              setToken={setToken}
              needInputSteal={needInputSteal}
              requiredSteal={requiredSteal}
              sendItSteal={sendItSteal}
              stealData={stealData}
              setStealData={setStealData}
              requestType={requestType}
              setRequestType={setRequestType}
              setAllOfficersData={setAllOfficersData}
              setAllStealsData={setAllStealsData}
              mainType={mainType}
              allOfficersData={allOfficersData}
              allStealsData={allStealsData}



            />
            <MainStart />
          </>
          :
          <>
            <HeaderIsLog userData={userData}
              setMainType={setMainType}
              mainType={mainType}
            />
            {
              mainType === 'MainIsLog' ?
                <MainIsLog userData={userData}
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
                  needInput={needInput}
                  required={required}
                  sendIt={sendIt}
                  token={token}
                  setToken={setToken}
                  stealData={stealData}
                  setStealData={setStealData}
                  needInputSteal={needInputSteal}
                  requiredSteal={requiredSteal}
                  sendItSteal={sendItSteal}
                  mainType={mainType}
                  setMainType={setMainType}
                  requestType={requestType}
                  setRequestType={setRequestType}
                  allOfficersData={allOfficersData}
                  setAllOfficersData={setAllOfficersData}
                  allStealsData={allStealsData}
                  setAllStealsData={setAllStealsData}
                  initStealData={initStealData}
                  initUserData={initUserData}
                />
                :
                <MainTable userData={userData}
                  setUserData={setUserData}
                  setUserIsLogged={setUserIsLogged}
                  PersonalData={PersonalData}
                  handleShow={handleShow}
                  show={show}
                  setShow={setShow}
                  handleClose={handleClose}
                  showAlert={showAlert}
                  handleShowAlert={handleShowAlert}
                  handleCloseAlert={handleCloseAlert}
                  message={message}
                  setMessage={setMessage}
                  DataSender={DataSender}
                  needInput={needInput}
                  required={required}
                  sendIt={sendIt}
                  token={token}
                  setToken={setToken}
                  stealData={stealData}
                  setStealData={setStealData}
                  needInputSteal={needInputSteal}
                  requiredSteal={requiredSteal}
                  sendItSteal={sendItSteal}
                  mainType={mainType}
                  setMainType={setMainType}
                  requestType={requestType}
                  setRequestType={setRequestType}
                  allOfficersData={allOfficersData}
                  setAllOfficersData={setAllOfficersData}
                  allStealsData={allStealsData}
                  setAllStealsData={setAllStealsData}
                  initUserData={initUserData}
                  initStealData={initStealData}
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



