var Car = function(color, passangers) {

  this.color = color;
  this.passangers = passangers;

}

module.exports = Car;

var greenCar = new Car('green', 20);
console.log(greenCar);
