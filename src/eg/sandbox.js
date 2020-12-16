export function Person(fn, ln) {
  //this refer to person
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    //this refer to person
    console.log(`DisplayName: ${this.first_name} ${this.last_name}`);
  };

  this.fatName = () => {
    //this refer to person
    console.log(`FatName: ${this.first_name} ${this.last_name}`);
    return this;
  };
  //this refer to person
  this.test = this;
}

export let person = new Person("John", "Reed");

export let person2 = new Person("Paul", "Adams");

export const america = {
  name: "The United States of America",
  yearFounded: 1776,
  describe() {
    //this refer to america object
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  },
};

export let hariz = {
  face: ":D",
  whoIam: function () {
    //this refer to hariz object
    return this;
  },
  whodis: () => {
    //this refer to undefined
    return this;
  },
  doublePerson: function () {
    //this refer to hariz object
    console.log(this);
    let afnan = {
      face: ":')",
      foo() {
        //this refer to foo object
        return this;
      },
    };
    return afnan.foo();
  },
  thirdPerson() {
    //this refer to hariz object
    console.log(this);
    let afnan = {
      face: ":'o",
      boo() {
        //this  refer to boo object
        return this;
      },
    };
    return afnan.boo();
  },
};

/*# expected outputs*/

// person.fatName().displayName()

// person.displayName.bind(person2)()

// person.displayName.call(person2)

// person2.displayName()

// america.describe()

// console.log("whoim:", hariz.whoIam())

// console.log("whodis:", hariz.whodis())

// console.log("doublePerson:", hariz.doublePerson())

// console.log("thirdPerson:", hariz.thirdPerson())

/*
  # Conclusion
     'this' certainly refer class/object/instance/ObjectMethod/function ObjectProperty(same as like objectMethod) 
     'this' refer to respective bind/call/apply methods

*/

// -- ### --- // 

/* 
  # Classes
      |not hoised like functions so kena letak class order di atas

*/
class Horse {
  //Private field declarations
  #name
  //constructor
  constructor(name,type="normal") {
    this.#name = name
    this.type = type
    
  }
  //getter -- do not need () to call poop eg console.log(myHorse.poop)
  get poop(){

      const poop = `horse(${this.#name}) has poop 💩💩💩 `
      return poop
  }

  get name(){
    return this.#name
  }
   //setter -- need () to call pooplocation eg console.log(myHorse.poopLocation())
   poopLocation(){
      const poop = `horse(${this.#name}) has poop 💩💩💩 everywhere`
      return poop
  }

  //Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
  static chainPoop() {
    console.log(`💩💩💩`)
    return this
  }

}

class FlyingHorse extends Horse
{
    constructor(name){
        const type = "pegasus"
        super(name,type)
        this.wings = "Two Big Wings"
    }


    get horseDetail()
    {
        //this.name refer to getter name in Horse Class
        return `${this.name} is the ${this.type} horse that has ${this.wings}`
    }

    //setter override
   poopLocation(){
    const poop = `horse(${this.name}) has poop 💩💩💩 everywhere while flying`
    return poop
   }

   //static method override
   static chainPoop() {
    console.log(`💩--💩--💩`)
    return this
  }
}

// Horse.chainPoop().chainPoop()

// const patrick = new Horse("Patrick")
// console.log("private",patrick.name) //expected output : undefined
// console.log(patrick.poop)
// console.log(patrick.poopLocation())
// const spongebob = new FlyingHorse("spongebob")
// console.log(spongebob.poop)
// console.log(spongebob.horseDetail)
// console.log(spongebob.poopLocation())

// FlyingHorse.chainPoop().chainPoop()





