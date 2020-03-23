// class Alligator {
//   constructor(
//       name = '',
//       color = '',
//       gender = '',
//       weight = 0,
//       tailLengthInch = 0,
//       teethSize = '',
//   ) {
//       this.id = 0,
//       this.name = name;
//       this.color = color;
//       this.gender = gender;
//       this.weight = weight;
//       this.tailLengthInch = tailLengthInch;
//       this.teethSize = teethSize;
//   }
// }
  class Baboon {
    attack() {
      return this.damage;
    }
    constructor (id, name, color, gender, weight, tailLengthInch, damage,) {
      this.id = id || "monkey";
      this.name = name || "Bertha";
      this.color = color || "gray";
      this.gender = gender || "male";
      this.weight = weight || 860;
      this.tailLengthInch = tailLengthInch || 12;
      this.damage = damage ||"Gorilla death punch"

    
    }

  }

  let newBaboon = new Baboon("Gorilla", "Gunther", "", "", "", 2,"")

  newBaboon.attack();
  
  console.log(newBaboon);
  
