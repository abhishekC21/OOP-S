class FamilyCar extends Car {
  comfortLevel = "";
  childSafety = "";

  constructor(engine, airbags, price, comfortLevel, childSafety) {
    this.comfortLevel = comfortLevel;
    this.childSafety = true;
  }

  driveSafe() {
    console.log("Driving safe....");
  }
}
