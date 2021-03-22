let Cart = require("./Cart");
let cart = new Cart();

let { honda, mazda, mecs, suzuki } = require("./ProductSample/Car");
cart.add(honda, 2, 25);
cart.add(suzuki, 5);
cart.show();
cart.removeItem("2", 2);
console.log(cart.show());
console.log(cart.getTotalCost());
