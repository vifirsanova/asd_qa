# Перенос проекта React JS в репозиторий

## Запускаем командную строку от имени администратора и открываем папку с проектом в Node.js

`C:\>cd "\program files"`

`C:\Program Files>cd nodejs`

`C:\Program Files\nodejs>cd my-app`

## Устанавливаем пакет *gh-pages* 

`C:\Program Files\nodejs\my-app>npm install gh-pages - save-dev`

## Открываем *package.json*

`C:\Program Files\nodejs\my-app>package.json`

![Иллюстрация к проекту](https://sun9-10.userapi.com/impg/09lsUMuS772qbS0gXAeJ9_l-iIHBU-dJmvgJcA/O2Ul0up6u0Y.jpg?size=655x382&quality=96&sign=996182cc7519c4a457768ef48e6011a6&type=album)

## Добавляем в *package.json* ссылку на страницу проекта на GitHub

![Иллюстрация к проекту](https://sun9-11.userapi.com/impg/SCO4CiholHWpz86nBsVBnRND6PdjW0FZrLhOyA/ET9J37zYTG4.jpg?size=712x397&quality=96&sign=c9317aa70eb3e734a713483bf5e2911a&type=album)

## Переходим в раздел *scripts* в *package.json*

Добавляем `"predeploy": "npm run build"` ("связывает" приложение) и `"deploy": "gh-pages -d build"` (запуск приложения)

![](https://sun9-16.userapi.com/impg/wzhAYnjrl-z68_yCk77JsszMNAzRMf2jYusGcQ/gAfabc5pGMI.jpg?size=567x189&quality=96&sign=5c5f90aa6adb5b4df5f23ade0ab85b1b&type=album)

## Обновляем репозиторий
