# Проектная работа "Веб-ларек"

Проект представляет собой интернет-магазин с товарами для разработчиков. В нём можно посмотреть каталог товаров, добавить товары в корзину и оформить заказ

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Документация
Проект построен на архитектуре MVP (Model-View-Presenter)

## Основные классы:

## Model 
Класс отвечает за работу с данными, их хранение и изменение. Из него создаются классы модели данных.

Классы-потомки:

Класс AppState. Описыввает общее состояние приложения, используется для хранения информации о карточках товаров, корзине, каталоге, формах заказов. Имеет методы для очистки данных заказа, очистки корзины, установки каталога продуктов, добавления и удаления товаров из корзины, установки данных для предварительного осмотра товара

Класс Product. Нужен для описания товаров. Представляет собой модель продукта. 


## EventEmitter
Класс, обеспечивающий работу с событиями.  Его функции: возможность установить и снять слушателей событий, вызвать слушателей при возникновении события.
Основные методы:
 - on(event, listener): Подписывает слушателя listener на события event;
 - off(event, listener): Отписывает слушателя listener от события event;
 - emit(event, data): Публикует событие event с данными data и уведомляет всех подписчиков события

## API
Класс, отвечающий за взаимодействие с сервером, которое осуществляется с помощью HTTP-запросов и методов:
- post - отправляет POST-запрос,
- get - отправляет GET-запрос,

## Presenter
Асбтрактный класс, отвечающий за реакцию элементов приложения на события. Если EventEmitter может обеспечить механизм оповещений о событиях, то Presenter управляет логикой взаимодействия View и Model и реакцией на события или изменения. Для каждого основного компонента создан отдельный класс-наследник, который связывает модель и представление. Использует класс EventEmitter для подписки на события, происходящие во View и в компонентах. Например: ProductCardPresenter, BasketPresenter, OrderPresenter.

## Component
Абстрактный класс, представляющий основу для элементов пользовательского интерфейса. Имеет конструктор, который принимает HTMLElement, а также методы для работы с этим элементом: установка текстового содержания элемента, показ/скрытие элемента, установку изображения элемента, метод, возвращающий DOM-элемент компонента.

Классы-потомки:

Класс Modal. Обеспечивает работу модального окна. Имеет конструктор, методы открытия/закрытия модального окна, метод возрвращающий контейнер для модального окна и метод, замещающий содержимое окна.

Класс Basket. Отвечает за отображение содержимого корзины, имеет методы включения/отключения кнопки оформления заказа, установки списка элементов корзины и установки итоговой сумммы товаров в корзине.

ProductCard. Отвечает за отображение и работу карточки товара.

Form. Предназначен для создания форм: их отрисовка, остлеживание ошибок валидации формы и изменений заполнения формы.

Класс OrderForm наследуется от Form. Обрабатывает ввод данных заказа (способ оплаты и адрес доставки), имеет методы, обработывающие клики на кнопки оплаты, изменения состояния кнопок, установки и получения данных заказа. 

ContactForm как и OrderForm наследуется от Form. Несет те же функции, но отвечает за ввод данных о почте и номере телефона заказчика.

Класс Success. Отвечает за отображение окна об успешной покупке. Имеет методы получения и установки текста описания.

Класс Page. Отвечает за управление элементами страницы: счетчик товаров, кнопка корзины и обработка кликов на нее. Инициализирует необходимые HTML-элементы страницы. 

## Взаимоейдствие частей приложения
Взаимодействие частей приложения осуществляется с помощью Presenter и EventEmitter. EventEmitter организует всю систему событий, может устанавливать на них слушатели и снимать их же. А Presenter благодаря EventEmitter может реагировать на события. Например, пользователь взаимодействует с интерфейсом и View оповещает об этом Presenter через событие. Presenter в свою очередь обновляет состояние модели и оповещает другие компоненты о событии/изменении модели через EventEmitter. 
