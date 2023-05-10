import React from 'react';
import { useState, useEffect } from 'react';
import HeaderStart from '../header/headerstart.jsx';
import HeaderIsLog from '../header/headerislog.jsx';
import PersonalData from '../accessories/personaldata.jsx';
import MainStart from '../main/mainstart.jsx';
import DataSender from '../accessories/datasender.jsx';
import FetchAlert from '../accessories/fetchalert.jsx';
import MainIsLog from '../main/mainislog.jsx';
import MainTable from '../main/maintable.jsx';
import Footer from '../footer/footer.jsx';
import init from '../data/datainit.jsx';


// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям

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
  const [officersData, setOfficersData] =  useState([]); // Данные о сотрудниках

  // Сущность залогиненый юзер, если есть сохраненные данные в localStorage то берем их
  const [userData, setUserData] = useState(JSON.parse(window.localStorage.getItem('userData')) || init.userData);
  const initUserData = setUserData(init.userData);

    // Наличие свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const needInput = init.needInput;

    // Обязательно к заполнению свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const required = init.required;

    // Наличие свойства в отправке на сервер
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const sendIt = init.sendIt;

    // Сущность сообщение о краже, если есть сохраненные данные в localStorage то берем их
    const [stealData, setStealData] = useState(init.stealData);
    const initStealData = setStealData(init.stealData);

    // Наличие свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const needInputSteal = init.needInputSteal;

    // Обязательно к заполнению свойства в меню ввода
    // Каждая запись в массиве соответствует по порядку одной записи в массиве stealData
    const requiredSteal = init.requiredSteal;

    // Наличие свойства в отправке на сервер
    // Каждая запись в массиве соответствует по порядку одной записи в массиве userData
    const sendItSteal = init.sendItSteal;

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
      // if (responseData._id!==undefined) { // Если нет .token или .status, но есть _id, это данные о сотрудниках
      //   setOfficersData (responseData); 
      //   console.log('PersonalData officersData', officersData);
            
      //   } 
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
                          officersData = {officersData}
                          setOfficersData = {setOfficersData}

              />
              :
              <MainTable  userData={userData}
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
                          officersData = {officersData}
                          setOfficersData = {setOfficersData}
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



