var Ferry = function(carTotal, passangersTotal){

  this.carTotal = carTotal;
  this.passangersTotal = passangersTotal;

}
module.exports = Ferry;

var numOfCars = new Ferry(20, 5);
console.log(numOfCars);
