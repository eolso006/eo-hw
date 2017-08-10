class Car {
  constructor(doors, topSpeed, color) {
    this.doors = doors;
    this.topSpeed = topSpeed;
    this.color = color;
  }

  quarterMile() {
    return (1 / this.topSpeed * 60) / .4;
  }
}



let car1 = new Car(4, 160, 'beige');
console.log(car1);
console.log(car1.quarterMile());

let car2 = new Car(2, 220, 'yellow');
console.log(car2);
console.log(car2.quarterMile());
