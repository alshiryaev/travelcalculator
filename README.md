Здесь я планирую выражаать свое видение и мысли по этому проекту.

Это учебный проект. Мне бы хотелось полность его пройти. Цель - изучить фронтенд разработку. 
Список для изучения достаточно внушителен, но в основе все тот же JavaScript и куча его библиотек - Nodejs, React (это самое основное, у каждого из них есть еще, например, sequelize, express, axios, cors)
В качестве СКВ - git. На Windows использую утилиту git Bash. Среда разработки Vs Code

О чем проект? 
Он позволяет Вам рассчитать сколько продуктов необходимо взять с собой в поход.
Проект написал полность на стеке JavaScript. На клиентской части используется React, на серверной - NodeJs
(express) + PostgreSql (sequelize)

Для запуска необходимо установить yarn (npm install yarn -g)
Запуск проекта через yarn dev - запустится сервер и клиент. Также есть возможнось запустить отдельно только сервер или клиент, (yarn run server / client)
Добавлена возможность дебага серверного кода в среде разработки Visual Studio Code. Обычно в 
этом случае я запускаю еще и клиент, чтоб дебажить на реальных данных.


Накатываем миграции командой.
sequelize db:migrate (Необходима глобальная установка, подробнее http://docs.sequelizejs.com/manual/tutorial/migrations.html )

Что в планах?
1) Подключить авторизацию админки
2) Полноценно связать все модели Продукты, Блюда (состоят их продуктов) и Рецепты (состоят из блюд). Несовсем понятно как рассчитывать расскаладку.
Скрорее всего придется расширять текущие модели и создавать новые
3) Полностью адаптивная верстка на Grid или Flexbox
4) Тестирование. Пока не знаю как и что делать, для этого нужно более глубое понимание React и получается функционального программирования. 
5) Сайт должен быть красивым, с анимациями (в разумном количестве и подстветками). Изучить materials более детально.
6) Полноценный CI
7) Попробовать GraphQL