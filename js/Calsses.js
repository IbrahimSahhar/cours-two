//////////////////////////////////////class one //////////////////////////////

class person {
  name = "ibrahim";
  age = 20;
  printInfo = () => {
    console.log(
      `name of person is ${this.name} and the age of person is ${this.age}`
    );
  };
}

let myPerson = new person();

myPerson.printInfo();

//////////////////////////////////////class Two //////////////////////////////

class machine {
  constructor(name, space) {
    this.name = name;
    this.space = space;
  }

  printInfo = () => {
    console.log(
      `name of machine is ${this.name} and the space of machine is ${this.space}`
    );
  };
}

let myMachine = new machine("radio", 120);

myMachine.printInfo();

//////////////////////////////////////class Three //////////////////////////////

class device extends machine {
  constructor(name, space) {
    super(name, space);
  }
}
let myDevice = new device("mobile", 220);

myDevice.printInfo();
