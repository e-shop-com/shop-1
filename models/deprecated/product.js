//const db = require('../util/database');
//const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
      ); 
  } // return promise that execute yields. make sure to parameterize the inputs with ?'s to prevent SQL injection.

  static deleteById(id) {
    
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products'); 
  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
  }
};
