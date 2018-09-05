DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("D'Addario EXL110 Nickel Light Electric Guitar Strings 3-Pack", "Guitar Strings", 14.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Snarling Dogs Brain Guitar Picks and Tin Box", "Guitar Picks", 5.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GHS Fast-Fret String Cleaner", "Guitar Care", 7.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ibanez RGA series RGAR42MFMT Electric Guitar", "Electric Guitars", 499.99, 74);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ibanez Ibanez Artcore Series AS73G Semi-Hollowbody Electric Guitar Flat Black", "Electric Guitars", 449.99, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender PM-TE Standard Travel Acoustic-Electric Guitar Natural", "Acoustic Guitars", 699.99, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Line 6 POD HD500X Guitar Multi-Effects Processor", "Multi Effects Pedals", 499.99, 143);
