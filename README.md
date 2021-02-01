# Fake api для студентов IT Academy

Для запуска сервера сначала установите все зависимости используя команду
```
npm install
```
После этого запускаем сервер командой
```
npm start
```
Сервер будет запущен на порту 1717 (http://localhost:1717)

## Доступные CRUD приложения и роуты
  
>**Памятка обозначений**  
_required_ - обязательное поле  
_optional_ - не обязательное поле

#### Книги
**Для получения списка всех книг**  
`GET /books`  
В ответе вы получите массив из объектов такой структуры: 
```
{
  id: string, // required
  name: string, // required
  author: string, // required
  isFavorite: boolean, // optional
}
```
**Для создания новой книги**  
`POST /books/create`   
Схема объекта для отправки в body запроса
```
{
  name: string, // required
  author: string, // required
  isFavorite: boolean,  // optional
}
```
id объекта сгерерируется на сервере  

**Для редактирования книги**  
`PUT /books/update/:id`  
Схема объекта для отправки в body запроса
```
{
  name: string, // optional
  author: string, // optional
  isFavorite: boolean,  // optional
}
```

**Для удаления книги**  
`DELETE /books/delete/:id`  
При успешном удалении вы получите сообщение  
```
successfull delete
```
