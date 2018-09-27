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
npx sequelize db:migrate (через npx можно без глобальной установки, о самой миграции подробнее http://docs.sequelizejs.com/manual/tutorial/migrations.html )

Что в планах?
1) Подключить авторизацию админки
2) Полноценно связать все модели Продукты, Блюда (состоят их продуктов) и Рецепты (состоят из блюд). Несовсем понятно как рассчитывать расскаладку.
Скрорее всего придется расширять текущие модели и создавать новые
3) Полностью адаптивная верстка на Grid или Flexbox
4) Тестирование. Пока не знаю как и что делать, для этого нужно более глубое понимание React и функционального программирования. 
5) Сайт должен быть красивым, с анимациями (в разумном количестве и подстветками). Изучить materials более детально.
6) Полноценный CI
7) Попробовать GraphQL


Разработки проекта.
1) Создать базу данных блюд которые бы использовались при составлении меню. Наш проект делит походы на несколько групп горный, пеший, водный. Каждое блюдо должно иметь свойства относящиеся к одному из видов походов либо к нескольким (гречка с мясом может быть приготовлена в любом походе, а плов только на неспортивном сплаве). Так же каждое блюдо в свойсвах должно иметь свойства по времени приёма годиться данное блюдо для завтрака/обеда/ужина (например плов это только ужин на сплаве, овсянка только завтрак в любом походе, а гречка может быть как обедом, так и завтраком или ужином). 
2) Научить автоматически составлять разнообразные меню из тех блюд, которые мы укажем в базе данных.
3) Составить базу данных на каждое блюдо в которой бы указвался рецепт, необходимые ингридиенты из расчёта на одну порцию для дальнейшего рассчёта на кол-во участников похода, и рассчёта по Белкам Жирам и Углеводам.
4) добавить тип похода спортивный неспортивный, для спортивного кол-во продуктов должно быть максимально уменьшено. (это уже можно включать на поздних фазах.)