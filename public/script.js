const { response } = require("express");

var cart = document.getElementById('cart');

fetch('/').then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
  
    return response.json();
  }).then(data => {
     // здесь вы можете работать с данными response
     let count = response.params.count[count];
     for (let i = 0; i < count; i++) {
        cart.innerHTML + "<%- include ('blocks/cart') -%>";
     }
  });