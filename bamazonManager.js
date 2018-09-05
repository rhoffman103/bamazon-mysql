var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "myPassword",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("\n---------------------------------");
    console.log("Available Products:\n");
    res.forEach(function(element) {
      console.log(
        `Department:  ${element.department_name}\n${
          element.product_name
        }\nI.D. Number: ${element.item_id}\nUnits Left:  ${
          element.stock_quantity
        }\nPrice: $${element.price}\n`
      );
    });
    prompt();
  });
}

const updateProductByItemId = function(id, quantity) {
  var updatedStock;
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    res.forEach(function(element) {
      if (element.item_id == id) {
        // Check if sufficient stock
        if (quantity < element.stock_quantity) {
          var cost;
          updatedStock = element.stock_quantity - quantity;
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updatedStock
              },
              {
                item_id: id
              }
            ],
            function(err) {
              if (err) throw err;
            }
          );
          cost = quantity * element.price;
          console.log(`${element.product_name} ordered.\nTotal Cost: $${cost}`);
        }
        else {
          console.log(`Insufficient quantity!`);
        }
      }
    });
    connection.end();
  });
};

const prompt = function() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "id_select",
        message: "Enter I.D. number of desired product."
      },
      {
        type: "input",
        name: "units",
        message: "Enter total units to purchase."
      }
    ])
    .then(function(user) {
        updateProductByItemId(user.id_select, user.units);
    });
};
