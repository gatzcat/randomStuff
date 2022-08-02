/* 
  I recently learnt about closures in JS in my Frontend Development course with CodeOp.
  The instructor was encouraging us to ask questions and participate with promises of chocolate (Kinder Bueno).
  As an individual highly-motivated by food, I decided to put my recent learnings to use!
*/

function kinderBuenos(initialStock, name) {
    let balance = initialStock;
    let giftList = {}
    
    //returns function that accepts number of Kinder Buenos and the recipient.
    return function (giftAmount, recipient) {
      giftList[recipient] = Object.keys(giftList).includes(recipient) ? 
                            giftList[recipient] += giftAmount : giftAmount;
      
      let stringEnd = " " 
  
      if (Object.keys(giftList).length != 0) {
        stringEnd = `They promised: `
        for (let [key, value] of Object.entries(giftList)) {
          stringEnd += `\n* ${key} ${value} Kinder Bueno${value > 1 ? "s." : "."} `
        }
      }
  
      balance -= giftAmount;
      let stringStart = balance > 0 ? `${name} has ${balance} Kinder buenos left. `
                                    : `${name} has ${initialStock} Kinder Bueno${initialStock > 1 ? "s" : ""} 
                                      and must buy ${balance * -1} more. `
      
      return stringStart + stringEnd
    }
  }
  
  let carlosKinder = kinderBuenos(10, "Carlos")
  carlosKinder(1, "Lucia");
  carlosKinder(2, "Lucia");
  carlosKinder(1, "Vanessa");
  carlosKinder(1, "Diana");
  carlosKinder(1, "Irene");
  console.log(carlosKinder(1, "Diana"));