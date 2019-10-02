// just simple example with typescript decorators

function autopilot(constructor: Function) {
  const getPrice = constructor.prototype.getPrice;
  const getDescription = constructor.prototype.getDescription;
  constructor.prototype.getPrice = function() {
    return getPrice.call(this) + 5000;
  };

  constructor.prototype.getDescription = function() {
    return `${getDescription.call(this)} with autopilot`;
  };
}

function parkingSensors(constructor: Function) {
  const getPrice = constructor.prototype.getPrice;
  const getDescription = constructor.prototype.getDescription;
  constructor.prototype.getPrice = function() {
    return getPrice.call(this) + 3000;
  };

  constructor.prototype.getDescription = function() {
    return `${getDescription.call(this)} with parking sensors`;
  };
}

@parkingSensors
@autopilot
class Car {
  private price: number = 0;
  private description: string = 'Car';

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}

const car: Car = new Car();

console.log(car.getDescription(), car.getPrice());

