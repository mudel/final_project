// Состояние модального окна с формой логина Sign In
const [showPersonalData, setShowPersonalData] = useState(false);
const handleClosePersonalData = () => setShowPersonalData(false); 
const handleShowPersonalData = () => setShowPersonalData(true);

event => PersonalData(user, setUser, setUserIsLogged, requestType)

const sendIt = [
    needInput, required, sendIt

    // Виды запросов и их параметры
const allRequest = {
    SignIn: {
      url: 'http://localhost:8080/api/auth/signin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: '',
        password: ''
      }
    },
    SignUp: {
      url: 'http://localhost:8080/api/auth/signup',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: '',
        email: '',
        password: ''
      }
    }
    // ,
    // SignOut: {
    //   url: 'http://localhost:8080/api/auth/signout',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
    //     username: '',
    //     email: '',
    //     password: ''
    //   } 
    // }
    
    user.filter((rec, index) => needInput[index]['SignIn']).map((rec) => (
  }

  {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M…DgzfQ.j5yhewUp_4P2bQin4sL4rVUwqsr4KW2G1xcwpOXS7X8', user: {…}}
token
: 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjE1YjUzMjgxMjk4ZDhhNWM5YjdmMiIsImlhdCI6MTY4MDY4MjI4MywiZXhwIjoxNjgxMjg3MDgzfQ.j5yhewUp_4P2bQin4sL4rVUwqsr4KW2G1xcwpOXS7X8"
user
: 
approved
: 
true
email
: 
"automouse@gmail.com"
firstName
: 
null
id
: 
"64215b53281298d8a5c9b7f2"
lastName
: 
null




        {/* Это одельная позиция в меню с данными типа select
        Отображается только если в меню есть позиция с типом select */}
        
        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Тип велосипеда</Form.Label>
            <Form.Control 
              as="select"
              required
              defaultValue={steal.type}
              onChange={event => steal.type = event.target.value}
            >
              <option selected disabled value={steal.type}>{steal.type ? steal.type :'Выберите тип из списка'}</option>
              <option value="general">general</option>
              <option value="sport">sport</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
            Обязательный параметр
            </Form.Control.Feedback>

        </Form.Group>


setUserData(userData.map((rec, index) => {  
  console.log('PersonalData 31 ===============>>>', responseData.user[rec.dataName]);
  // if (responseData==undefined) {return rec} // Если нет данных от бэкенда, то возвращаем исходные данные userData 
  if (responseData.user[rec.dataName]==undefined) return rec
      else return {...rec, value:responseData.user[rec.dataName]}
  })); 


 
    CreateCase:	{title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    CreateCasePublic: {title: 'Сообщение о краже', url: 'https://sf-final-project-be.herokuapp.com/api/public/report', choiceMethod: 'POST', bodyInQuery: true, needId: false},
    EditCase: {title: 'Редактирование информации о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'PUT', bodyInQuery: true, needId: true},
    DeleteCase:	{title: 'Удаление сообщения о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true},
    GetAllCases: {title: 'Сообщения о кражах', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOneCase:	{title: 'Информация о краже', url: 'https://sf-final-project-be.herokuapp.com/api/cases/', choiceMethod: 'GET', bodyInQuery: false, needId: true},
    CreateOfficer: {title: 'Cоздание нового сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers', choiceMethod: 'POST', bodyInQuery: true, needId: false},	
    UpdateOfficer: {title: 'Редактирование данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'PUT', bodyInQuery: true, needId: true},	
    DeleteOfficer: {title: 'Удаление данных сотрудника', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'DELETE', bodyInQuery: false, needId: true},	
    GetAllOfficers:	{title: 'Список сотрудников', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: false},
    GetOfficer: {title: 'Информация о сотруднике', url: 'https://sf-final-project-be.herokuapp.com/api/officers/', choiceMethod: 'GET', bodyInQuery: false, needId: true}


    {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"your.email+fakedata48998@gmail.com\",\"firstName\":\"Noble\",\"lastName\":\"Abshire\",\"password\":\"zGynr_bhp\",\"clientId\":\"sxekYTkYXxyJ\"}"cache: "no-cache"credentials: "same-origin"headers: {Content-Type: 'application/json', Authorization: ''}method: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/officers
    {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"your.email+fakedata38823@gmail.com\",\"firstName\":\"Eliza\",\"lastName\":\"Mertz\",\"password\":\"g2QVFL7Ke\",\"clientId\":\"sxekYTkYXxyJ\",\"approved\":false}"cache: "no-cache"credentials: "same-origin"headers: {Content-Type: 'application/json', Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M…zI2fQ.sTGm3l408vhh6DhRhjpZSN8HSAYZz2xPyjwm9Bw91UM'}method: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/officers
    
    {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}
body
: 
"{\"type\":\"sport\",\"licenseNumber\":\"cor44\",\"ownerFullName\":\"ee\",\"color\":\"Minima\",\"clientId\":\"sxekYTkYXxyJ\",\"createdAt\":\"\",\"updatedAt\":\"\",\"date\":\"31.01.2022\",\"description\":\"Animi ratione nihil similique unde est consectetur voluptatem hic.\"}"
cache
: 
"no-cache"
credentials
: 
"same-origin"
headers
: 
{Content-Type: 'application/json', Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M…zQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk'}
method
: 
"POST"
mode
: 
"cors"
redirect
: 
"follow"
referrerPolicy
: 
"no-referrer"
    
    {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"your.email+fakedata48998@gmail.com\",\"firstName\":\"Noble\",\"lastName\":\"Abshire\",\"password\":\"zGynr_bhp\",\"clientId\":\"sxekYTkYXxyJ\"}"cache: "no-cache"credentials: "same-origin"headers: {Content-Type: 'application/json', Authorization: ''}method: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/auth/sign_up


    POST /api/public/report HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: ru-RU,ru;q=0.9,en;q=0.8
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk
Cache-Control: max-age=0
Connection: keep-alive
Content-Length: 237
Content-Type: application/json
DNT: 1
Host: sf-final-project-be.herokuapp.com
Origin: http://localhost:3002
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
sec-ch-ua: "Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"

POST /api/officers HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: ru-RU,ru;q=0.9,en;q=0.8
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk
Cache-Control: max-age=0
Connection: keep-alive
Content-Length: 139
Content-Type: application/json
DNT: 1
Host: sf-final-project-be.herokuapp.com
Origin: http://localhost:3002
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
sec-ch-ua: "Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"

DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"your.email+fakedata82089@gmail.com\",\"firstName\":\"Francis\",\"lastName\":\"Spinka\",\"password\":\"zGynr_bhprr\",\"clientId\":\"sxekYTkYXxyJ\"}"                                                                                                                  cache: "no-cache"credentials: "same-origin"headers:                                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk"Content-Type: "application/json"[[Prototype]]: Objectmethod: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/officers
DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"type\":\"sport\",\"licenseNumber\":\"cor44\",\"ownerFullName\":\"ee\",\"color\":\"Minima\",\"clientId\":\"sxekYTkYXxyJ\",\"createdAt\":\"\",\"updatedAt\":\"\",\"date\":\"31.01.2022\",\"description\":\"Animi ratione nihil similique unde est consectetur voluptatem hic.\"}"cache: "no-cache"credentials: "same-origin"headers: {Content-Type: 'application/json', Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M…zQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk'}                                                                                                                           method: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/public/report



DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"type\":\"sport\",\"licenseNumber\":\"33\",\"ownerFullName\":\"Delores Sporer\",\"color\":\"Minima\",\"clientId\":\"sxekYTkYXxyJ\",\"createdAt\":\"\",\"updatedAt\":\"\",\"date\":\"\",\"description\":\"\"}"cache: "no-cache"credentials: "same-origin"headers: Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk"Content-Type: "application/json"[[Prototype]]: Objec method: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/public/report
DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"your.email+fakedata82089@gmail.com\",\"firstName\":\"Francis\",\"lastName\":\"Spinka\",\"password\":\"zGynr_bhprr\",\"clientId\":\"sxekYTkYXxyJ\",\"approved\":false}"cache: "no-cache"credentials: "same-origin"                            headers: Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk"Content-Type: "application/json"[[Prototype]]: Objectmethod: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/officers


DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"type\":\"sport\",\"licenseNumber\":\"333\",\"ownerFullName\":\"Delores Sporer\",\"color\":\"\",\"clientId\":\"sxekYTkYXxyJ\",\"createdAt\":\"2023-04-12T13:22:09.419Z\",\"updatedAt\":\"\",\"date\":\"\",\"description\":\"\"}"cache: "no-cache"credentials: "same-origin"headers: Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk"Content-Type: "application/json"[[Prototype]]: Objectmethod: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/public/report
DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"email\":\"yota82089@gmail.com\",\"firstName\":\"\",\"lastName\":\"Spinka\",\"password\":\"zGynr_bhprr\",\"clientId\":\"sxekYTkYXxyJ\",\"approved\":false}"                                                                     cache: "no-cache"credentials: "same-origin"headers: Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZhNGU4MzhjZGZjOTcyZjVlMmVmMCIsImlhdCI6MTY4MTMwMjk0NCwiZXhwIjoxNjgxOTA3NzQ0fQ.GflL2x7Q-ZRJVzBFTWXvX4Tt_whqTWp-F9MaOVrhtYk"Content-Type: "application/json"[[Prototype]]: Objectmethod: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/officers



DataSender 0 ***** query {method: 'POST', headers: {…}, mode: 'cors', cache: 'no-cache', credentials: 'same-origin', …}body: "{\"type\":\"sport\",\"licenseNumber\":\"cor44\",\"ownerFullName\":\"Delores Sporer\",\"color\":\"\",\"createdAt\":\"2023-04-12T13:53:24.609Z\",\"updatedAt\":\"\",\"date\":\"\",\"description\":\"\",\"officer\":\"\"}"cache: "no-cache"credentials: "same-origin"headers: Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZiN2VkMzhjZGZjOTcyZjVlMzE0YyIsImlhdCI6MTY4MTMwNzYzOSwiZXhwIjoxNjgxOTEyNDM5fQ.2WvJikfY70ZFo7zk8F6kWxixwn_F3oK3vSk1nSWKtKY"Content-Type: "application/json"[[Prototype]]: Objectmethod: "POST"mode: "cors"redirect: "follow"referrerPolicy: "no-referrer"[[Prototype]]: Object url https://sf-final-project-be.herokuapp.com/api/cases/


const response = await fetch(url, query)
    // Собственно функция-запрос к бэкенду
      .then(response => response.json())
      .then(
        responseJson => {
          if (responseJson.status === 'OK') { // Ошибок нет, возвращаем данные
            console.log('Данные получены', responseJson);
            setResponseData(responseJson);
          } else {  // Ошибка бэкенда, вывод сообщения в модальное окно
            // setResponseData(responseJson);
            setMessage(responseJson.message); // Передача сообщения бэкенда об ошибке в модальное окно
            console.log('Ошибка с сообщением бэкенда', responseJson.message)}
            handleShowAlert(); // Вызов модального окна
          }
        ) 
      // .catch (
      //   responseJson => {
      //     console.log('Данные с ошибкой?:', responseJson); // Вторая функция, если была ошибка
          
      //   }
      // )
    
      .catch((error) => { // Прочие ошибки
            console.log('Прочие ошибки: ', error.message);
            setMessage(error.message); // Передача сообщения fetch об ошибке в модальное окно
            handleShowAlert(); // Вызов модального окна
      }); 

  }

  {      
    requestType.includes('Case') ?  // PersonalData для сообщения о краже  и для сотрудника вызывается с разными параметрами                     
      <PersonalData userData={responseData} 
                    setUserData={setResponseData} 
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
                    needInput = {needInputSteal} 
                    required = {requiredSteal}
                    sendIt = {sendItSteal}
                    responseData = {responseData}
                    setResponseData = {setResponseData}
                    token = {token}
                    setToken = {setToken}
      /> 
      :
        <PersonalData userData={responseData} 
                      setUserData={setResponseData} 
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
                      needInput = {needInput} 
                      required = {required}
                      sendIt = {sendIt}
                      responseData = {responseData}
                      setResponseData = {setResponseData}
                      token = {token}
                      setToken = {setToken}
        />
  }

approved: true
clientId: "sxekYTkZZxyJ"
email: "your.email+fakedata99175@gmail.com"
firstName: "Willa"
lastName: "Marvin"
password: "$2b$08$xpNKYsLCMitXP/aNjcZOPOJKc.ZkV55FoynSE6vSAVXNzXQy3FPcC"
__v: 0
_id: "643d5ce7b6fb77aad27e7955"

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjE1YjUzMjgxMjk4ZDhhNWM5YjdmMiIsImlhdCI6MTY4MjQyNTc3NiwiZXhwIjoxNjgzMDMwNTc2fQ.0TNT_9q4Q_tcMKI-0VIgynIOs-3vpJi9JpZc_W9I2fA

8$.EJJ5a

sxekYTkYXxyJ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M…jM2fQ.WzWpGcZ6zgtBddzDLzaHzIAS-ct8BvjpO-LIokfsywU
sxekYTkYXxyJ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N…zA3fQ.2DL7__RqxvC5xqyvxcnoUPMGK8sdI55zyp-waQqLpw8
sxekYTkYXxyJ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N…zc4fQ.LD6KnukB2JsZIwq3wqpezgQ9eKajHLgw7VRd1p4jDqM

(!(rec.dataName==='approved'|rec.dataName==='status'|rec.dataName==='officer')) ?
            <Form.Control
              required={mainType==='MainIsTable'&&rec.dataName==='password' ? false : required[rec.i][requestType]} // При редактировании данных сотрудника пароль можно только заменить на новый
              disabled={mainType==='MainIsTable'&&(rec.dataName==='email'|rec.dataName==='clientId')} // Поля, которые запрещено редактировать
              type="text"
              placeholder={rec.dataTitle}
              defaultValue={mainType==='MainIsTable'&&rec.dataName==='password' ? '' : rec.value}
              onChange={event => rec.value = event.target.value}
            />
            :
            rec.dataName==='approved'&&
            <Form.Select
              required={required[rec.i][requestType]}
              disabled={mainType==='MainIsTable'&&rec.dataName==='status'} // Поле статуса запрещено редактировать
              aria-label="Default select example"
              defaultValue={rec.value}
              onChange={event => rec.value = event.target.value}
            />