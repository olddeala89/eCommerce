const fs = require('fs');
const express = require('express');
const { render } = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    const count = {count: 3};
    res.send(count);
    render('cart')
    res.render('index', data);
})

class Item {
    Id = -1;
    Name = 'None';
    Description = 'None';
    Price = '0';
    ImageUrl = '/';

    constructor(Id, Name, Description, Price, ImageUrl) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.Price = Price;
        this.ImageUrl = ImageUrl;
    }

    getId() {
        return this.Id;
    }

    getName() {
        return this.Name;
    }

    getDescription() {
        return this.Description;
    }

    getPrice() {
        return this.Price;
    }

    getImageUrl() {
        return this.ImageUrl;
    }
}

class Cart {
    items = [];
    userId;

    constructor(userId) {
        this.userId = userId;
    }

    addItem(item) {
        this.items.push(item);
    }
    
    getItems() {
        return this.items;
    }

    createPrintableCart() {
        /*let userCart = {};
        for (let item of this.items) {
            userCart.push('name: ', item.getName(), ', price: ', item.getPrice());
        }
        return userCart;*/
    }
}

let itm1 = new Item(1, 'Milk', '', '$20', '/');
let itm2 = new Item(2, 'Eggs', '', '$40', '/');
let itm3 = new Item(3, 'Bread', '', '$15', '/');
let crt1 = new Cart(228);
crt1.addItem(itm1);
/*crt1.addItem(itm2);
crt1.addItem(itm3);*/

let data = {name: 'Moloko', price: '$2', description: 'It\'s just milk'};



























const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});