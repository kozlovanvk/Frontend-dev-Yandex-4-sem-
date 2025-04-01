interface IAppState {
    catalog: IProduct[];
    basket: string[];
    preview: string | null;
    order: IOrder | null;
}

interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    catetory: string;
    price: number | null;
}

interface IProductCard extends IProduct {
    index?: string;
    buttonTitle?: string;
}

interface IOrderForm {
    payment: string;
    address: string;
}

interface IContactForm {
    phone: string;
    email: string;
}

interface IOrder extends IOrderForm, IContactForm {
    items: string[];
    total: number;
}

interface IOrderSuccess {
    id: string;
    total: number;
}

interface IBasketView {
    items: HTMLElement[];
    total: number;
}

interface IPage {
    counter: number; //сколько товаров в корзине для отображения на главной странице
    gallery: HTMLElement[]; //каталог товаров
}