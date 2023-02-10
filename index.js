// Iteration 1: Names and Input
let driver = "hacker1";

console.log(`The name of the driver is ${driver}`)

let navigator = "hacker2";

console.log(`The navigators name is ${navigator}`)


// Iteration 2: Conditionals
if (driver.length > navigator.length){
    console.log(`The driver has the longest name it has ${driver.length} characters`);
  }
  else if (driver.length < navigator.length){
    console.log(`The driver has the longest name it has ${navigator.length} characters`);
  }
  else{
    console.log(`Wow, you both have equally long names, ${driver.length} character`);
  }

// Iteration 3: Loops

function capitalLetter(driver) {
  for (let i = 0; i < driver.length; i++) {
    console.log(driver[i].toUpperCase());
  }
}
const result = capitalLetter(driver)
console.log(result)

function capitalLetter2(navigator) {
  for (let i = navigator.length - 1; i >= 0; i--) {
    console.log(navigator[i].toUpperCase());
  }
}

const result2 = capitalLetter2(navigator)
console.log(result2)




let longText = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

console.log(longText.length);

function etTuBrute(longText){
  let counter = 0; 
  for (let i = 0; i < longText.length; i++){
    for (let j = 0; j < longText.length; j++){
      if (longText[i] + longText[j]  === "et"){
      counter++
    }
  }
}
  return counter
}
  

const result3 = etTuBrute(longText)
console.log(result3)


let phraseToCheck = "race car"

function palindrome(phraseToCheck){
  let phrase1 = [];
  let phrase2 = [];
  for (let i = 0; i < phraseToCheck.length; i++){
    phrase1.push(phraseToCheck[i]);
    phrase2.unshift(phraseToCheck[i]);
  }
    if (phrase1 == phrase2){
    return true 
    }
  else {
    false
  }
}

const result4 = palindrome(phraseToCheck)
console.log(result4)