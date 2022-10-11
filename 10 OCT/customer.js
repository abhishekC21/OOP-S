// class

class Customer {
  // properties

  name = "";
  age = "";
  address = "";
  userid = "";
  mobile = "";
  email = "";

  // Assign values to the properties
  init(_name, _age, _address, _userid, _mobile, _email) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.userid = _userid;
    this.mobile = _mobile;
    this.email = _email;
    console.log(this.name);
  }

  // methods
  placeOrder() {
    this.trackOrder();
    console.log(`Placed order for ${this.name}`);
    // console.log(this.placeOrder());
    // this.placeOrder();
    // console.log("Placed order for " + this.name);
  }

  trackOrder() {}

  search() {}
}

// object
// craeting object using Customer blueprint
var Customer1 = new Customer(
  "John Done",
  20,
  "Mumbai",
  1,
  9420742238,
  "johndone@gmail.com"
);
// Customer1.init();
Customer1.placeOrder();

var Customer2 = new Customer(
  "John Done",
  20,
  "Mumbai",
  1,
  9420742238,
  "johndone@gmail.com"
);
// Customer2.init();
Customer2.placeOrder();
