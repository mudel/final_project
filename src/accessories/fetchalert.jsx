import React from 'react';
import { Modal, Button} from 'react-bootstrap';

// Финальный_проект_велопрокат
// Известная компания, занимающаяся прокатом велосипедов в крупных городах России, испытывает проблемы с частой кражей их имущества (велосипедов). 
// Как возможное решение проблемы, компания хочет вести учёт этих случаев и отслеживать прогресс. 
// Их собственные разработчики уже подготовили серверную часть приложения, вам же требуется реализовать клиентскую часть.
// Клиентская часть предназначена как для сотрудников компании, так и для обычных пользователей. 
// Обычному пользователю доступна только ограниченная часть функционала: главная страница и страница с возможностью сообщить о новом случае кражи.
// Страница с возможностью сообщить о новом случае кражи доступна только авторизованным пользователям



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

export default FetchAlert;