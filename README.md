# Пример SSR для React приложения
## Запуск проекта в режиме разработки:
1. Выполнить команду ```npm run dev```
2. Открыть сайт по адресу http://localhost:3000/
### Результат
- В режиме разработки создается Vite сервер и подключается как middleware в сервер Express. `app.use(vite.middlewares)`.
- Разметка создается с помощью `vite.transformIndexHtml` для правильной работы HMR и плагинов Vite.

Подробнее про настройку SSR в Vite можно почитать по [ссылке](https://vite.dev/guide/ssr.html#setting-up-the-dev-server).
## Запуск проекта в режиме продакшн:
1. Выполнить команду ```npm run preview```
2. Открыть сайт по адресу http://localhost:3000/
### Результат
- Сервер Express раздает разметку.
- Разметка генерируется с помощью функции `renderToString` из библиотеки `react-dom/server`.
- На стороне клиента выполняется гидратация приложения с помощью функции `hydrateRoot` из библиотеки `react-dom/client`. `hydrateRoot` используется вместо `createRoot`.