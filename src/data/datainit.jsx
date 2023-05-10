
// Сущность залогиненый юзер
const userData =
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
    value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах, где нужен
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

// Наличие свойства в меню ввода
// Каждая запись в массиве соответствует по порядку одной записи в массиве userData
const needInput = [
{
    dataName: 'email', // string имя поля в объекте
    SignIn: true, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'firstName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'lastName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},  
{
    dataName: 'password', // string имя поля в объекте
    SignIn: true, // boolean
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'clientId', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: '_id', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: 'approved', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: true // boolean
}
];

// Обязательно к заполнению свойства в меню ввода
// Каждая запись в массиве соответствует по порядку одной записи в массиве userData
const required = [
{
    dataName: 'email', // string имя поля в объекте
    SignIn: true, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'firstName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: 'lastName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: 'password', // string имя поля в объекте
    SignIn: true, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'clientId', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: '_id', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: 'approved', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
}
];

// Наличие свойства в отправке на сервер
// Каждая запись в массиве соответствует по порядку одной записи в массиве userData
const sendIt = [
{
    dataName: 'email', // string имя поля в объекте
    SignIn: true, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'firstName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'lastName', // string имя поля в объекте
    SignIn: false, // boolean 
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'password', // string имя поля в объекте
    SignIn: true, // boolean
    SignUp: true, // boolean 
    CreateOfficer: true // boolean
},
{
    dataName: 'clientId', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: true, // boolean 
    CreateOfficer: false // boolean 
},
{
    dataName: '_id', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: false // boolean
},
{
    dataName: 'approved', // string имя поля в объекте
    SignIn: false, // boolean
    SignUp: false, // boolean 
    CreateOfficer: true // boolean
}
];

// Сущность сообщение о краже
const stealData = 
[
{
    dataName: 'type', // string имя поля в объекте  +++
    dataTitle: 'Тип велосипеда', // string Название свойства
    value: '', // string 
    i: 0
},
{
    dataName: 'licenseNumber', // string имя поля в объекте   +++
    dataTitle: 'Номер лицензии', // string Название свойства
    value: '',	// string 
    i: 1
},
{
    dataName: 'ownerFullName', // string имя поля в объекте +++
    dataTitle: 'ФИО арендатора велосипеда', // string Название свойства
    value: '',	// string 
    i: 2
},
{
    dataName: 'color', // string имя поля в объекте   +++
    dataTitle: 'Цвет велосипеда', // string Название свойства
    value: '',	// string 
    i: 3
},
{
    dataName: 'clientId', // string имя поля в объекте  +++
    dataTitle: 'clientId', // string Название свойства
    value: 'sxekYTkYXxyJ', // string Идентификатор СТУДЕНТА Обязательное поле одинаковый во всех запросах
    i: 4
},
{
    dataName: 'createdAt', // string имя поля в объекте +++
    dataTitle: 'Дата создания сообщения', // string
    value: '', // date 
    i: 5
},
{
    dataName: 'updatedAt', // string имя поля в объекте   +++
    dataTitle: 'Дата обновления сообщения', // string Название свойства
    value: '', // date 
    i: 6
},
{
    dataName: 'status', // string имя поля в объекте  +++
    dataTitle: 'Статус сообщения', // string Название свойства
    value: '', // string Статус сообщения Возможные значения: new, in_progres, done
    i: 7
},
{
    dataName: 'date', // string имя поля в объекте  +++
    dataTitle: 'Дата кражи', // string Название свойства
    value: '', // date 
    i: 8
},
{
    dataName: 'description', // string имя поля в объекте   +++
    dataTitle: 'Комментарий', // string Название свойства
    value: '', // string 
    i: 9
},
{
    dataName: 'resolution', // string имя поля в объекте    +++
    dataTitle: 'Завершающий комментарий', // string Название свойства
    value: '', // string 
    i: 10
},
{
    dataName: 'officer', // string имя поля в объекте   +++
    dataTitle: 'Ответственный сотрудник', // string Название свойства
    value: '', // string Валидным значением может быть только действующий id ответственного сотрудника из базы
    i: 11
}
]; 


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
        dataName: 'createdAt', // string имя поля в объекте
        CreateCase: false, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: false, // boolean
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
        CreateCase: true, // boolean 
        CreateCasePublic: false, // boolean 
        EditCase: true, // boolean
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
    dataName: 'createdAt', // string имя поля в объекте
    CreateCase: false, // boolean 
    CreateCasePublic: false, // boolean 
    EditCase: false, // boolean
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
    dataName: 'createdAt', // string имя поля в объекте
    CreateCase: true, // boolean 
    CreateCasePublic: true, // boolean 
    EditCase: true, // boolean
    DeleteCase: false, // boolean
    GetAllCases: false, // boolean
    GetOneCase: false // boolean
},
{
    dataName: 'updatedAt', // string имя поля в объекте
    CreateCase: true, // boolean 
    CreateCasePublic: true, // boolean 
    EditCase: true, // boolean
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
    CreateCase: true, // boolean 
    CreateCasePublic: false, // boolean 
    EditCase: true, // boolean
    DeleteCase: false, // boolean
    GetAllCases: false, // boolean
    GetOneCase: false // boolean
}
];

export default {
    userData,
    needInput,
    required,
    sendIt,
    stealData,
    needInputSteal,
    requiredSteal,
    sendItSteal
};
