/* 
  I recently learnt about closures in JS in my Frontend Development course with CodeOp.
  The instructor was encouraging us to ask questions and participate with promises of chocolate (Kinder Bueno).
  As an individual highly-motivated by food, I decided to put my recent learnings to use!
*/

// Initial params represent the starting number of chocolate and the person who has them
function kinderBuenos(initialStock, name) {
    let balance = initialStock;
    
    let giftList = {} // This object will store all the receipients and number of chocolate they're promised
    
    //returns function that accepts number of Kinder Buenos and the recipient.
    return function (giftAmount, recipient) {
      //verifies if the recipient already exists
      giftList[recipient] = Object.keys(giftList).includes(recipient) ? 
                            giftList[recipient] += giftAmount : giftAmount;
      
      let stringEnd = " " 
  
      if (Object.keys(giftList).length != 0) {
        stringEnd = `They promised: `
        for (let [key, value] of Object.entries(giftList)) {
          //prints the number of chocolate owed to each individual on a new line
          stringEnd += `\n* ${key} ${value} Kinder Bueno${value > 1 ? "s." : "."} `
        }
      }
  
      balance -= giftAmount;
      
      // if the balance is more than 0, the balance is shown, else it shows how many more chocolates must be bought
      let stringStart = balance > 0 ? `${name} has ${balance} Kinder buenos left. `
                                    : `${name} has ${initialStock} Kinder Bueno${initialStock > 1 ? "s" : ""} 
                                      and must buy ${balance * -1} more. `
      
      return stringStart + stringEnd
    }
  }
  
  let carlosKinder = kinderBuenos(10, "Carlos") //Carlos is the name of the instructor. 
  carlosKinder(1, "Lucia"); //Carlos promises 1 chocolate to Lucia
  carlosKinder(2, "Lucia"); //He promises Lucia another 2
  carlosKinder(1, "Vanessa");
  carlosKinder(1, "Diana");
  carlosKinder(1, "Irene");
  console.log(carlosKinder(1, "Diana")); // Finally he 