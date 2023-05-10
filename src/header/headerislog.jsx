import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import bystrologo from '../images/bystrologo.png';



// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям

function HeaderIsLog(props) {
  // Header залогиненого юзера
  // Виден, когда пользователь авторизован
  const userData = props.userData;
  const mainType = props.mainType;
  const setMainType = props.setMainType;

  return (
    <Navbar collapseOnSelect fixed="top" bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => {
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
          {/* <Nav.Link key={'11'} className="text-white">{userData[1].value}</Nav.Link>
          <Nav.Link key={'12'} className="text-white">{userData[2].value}</Nav.Link> */}
          <Nav.Link key={'13'} onClick={() => {
            ; // Выход из таблицы, если мы там
            if (mainType === 'MainIsTable') setMainType('MainIsLog')
            else {
              localStorage.removeItem('token');
              localStorage.removeItem('userData');
              window.location.reload();
            }
          }} className="text-white">Выход</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

}


export default HeaderIsLog;