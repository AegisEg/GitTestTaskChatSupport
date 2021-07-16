# GitTestTaskChatSupport
An example of development on vue.js, node.js,PHP(Laravel)
# Getting started Node JS Server 
Write to file "nodeJs/vue/src/config.js" with the actual api url of the laravel server and url webSockets server.
Fill the nodeJs/.env file with up-to-date data.
```
PORT=8000
LARAVEL_API_URL=http://testlaravel.ru/api/
```
Commands for starting the Node js server:
 ```terminal
cd nodeJs
npm install
npm start
cd vue
npm install
npm run build
 ```
# Getting started Laravel Server
Write to file "laravel/resources/js/config.js" with the actual api url of the laravel server.

Fill the laravel/.env file with up-to-date data
```

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chatlaravel
DB_USERNAME=phpmyadmin
DB_PASSWORD=1234

phpredis=predis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

```
Commands for starting the Laravel server:
 ```terminal
cd laravel
npm install
composer install
npm run prod
php artisan migrate
php artisan db:seed
php artisan server
 ```
 
