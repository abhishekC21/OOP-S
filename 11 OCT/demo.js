class Customer {
  name = "";
  age = "";
  address = "";
  userid = "";
  mobile = "";
  email = "";

  constructor(_name, _age, _address, _userid, _mobile, _email) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.userid = _userid;
    this.mobile = _mobile;
    this.email = _email;
  }

  placeOrder() {
    console.log(this);
    console.log(`Placed order for ${this.name}`);
  }

  trackOrder() {}

  search() {}
}

let customer1 = new Customer(
  "Abhishek",
  19,
  "Ahmednagar",
  1,
  9420742238,
  "abhishekchitambar3@gmail.com"
);
customer1.placeOrder();

// let customer2 = new Customer(
//   "Abhishek",
//   19,
//   "Ahmednagar",
//   1,
//   9420742238,
//   "abhishekchitambar3@gmail.com"
// );
// customer2.placeOrder();
