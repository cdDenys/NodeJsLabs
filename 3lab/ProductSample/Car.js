const ProductFactory = require("../ProductFactory");

const samples = {
  honda: {
    id: "1",
    brand: "Honda",
    type: "sudan",
    color: "yellow",
    price: 2000,
    title: "Good one",
    productType: "Car"
  },
  mazda: {
    id: "2",
    brand: "Mazda",
    type: "hatch",
    color: "red",
    price: 5000,
    title: "Good one",
    productType: "Car"
  },
  mecs: {
    id: "3",
    brand: "Mercedes",
    type: "sudan",
    color: " black",
    price: 10000,
    title: "Good one",
    productType: "Car"
  },
  suzuki: {
    id: "4",
    brand: "suzuki",
    type: "sudan",
    color: "green",
    price: 4000,
    title: "Good one",
    productType: "Car"
  }
};
let productFactory = new ProductFactory();
let honda = productFactory.create(samples.honda);
honda.setPrice(3000);
honda.setDescription("Buy please!");
let mazda = productFactory.create(samples.mazda);
let mecs = productFactory.create(samples.mecs);
let suzuki = productFactory.create(samples.suzuki);
module.exports = {
  honda,
  mazda,
  mecs,
  suzuki
};
