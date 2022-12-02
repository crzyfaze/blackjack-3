
let numUserTokens = 100
let strOutput = ""
let numCompPlayTime = 0
let numPlayTotal = 0
let numTokenBet = 0


let numOne1 = 0
let numOne2 = 0

let numTwo1 = 0
let numTwo2 = 0

let numThree1 = 0
let numThree2 = 0

let numFour1 = 0
let numFour2 = 0

let numFive1 = 0
let numFive2 = 0

let numSix1 = 0
let numSix2 = 0

let numSeven1 = 0
let numSeven2 = 0

let numEight1 = 0
let numEight2 = 0

let numNine1 = 0
let numNine2 = 0

let numTen1 = 0
let numTen2 = 0

let timesHit = 0

let userTotal = 0
let compTotal = 0
let compCards = 2

let UserCombCard1 = 0
let UserCombCard2 = 0
let UserCombCard3 = 0
let UserCombCard4 = 0

let numCompCombCard0 = numSix2
let numCompCombCard1 = numSix2 + numSeven2
let numCompCombCard2 = numSix2 + numSeven2 + numEight2
let numCompCombCard3 = numSix2 + numSeven2 + numEight2 + numNine2
let numCompCombCard4 = numSix2 + numSeven2 + numEight2 + numNine2 + numTen2
function deal() {
document.getElementById('deal').innerHTML = "Deal"
  //buttons shyows when pressed deal
  document.getElementById('deal').disabled = true
  document.getElementById('hit').disabled = false
  document.getElementById('stay').disabled = false

  numTokenBet = Number(document.getElementById('myRange').value)

  //user cards num generator
  numOne1 = Math.floor((Math.random() * 4)) + 1
  numOne2 = Math.floor((Math.random() * 13)) + 1

  numTwo1 = Math.floor((Math.random() * 4)) + 1
  numTwo2 = Math.floor((Math.random() * 13)) + 1

  numThree1 = Math.floor((Math.random() * 4)) + 1
  numThree2 = Math.floor((Math.random() * 13)) + 1

  numFour1 = Math.floor((Math.random() * 4)) + 1
  numFour2 = Math.floor((Math.random() * 13)) + 1

  numFive1 = Math.floor((Math.random() * 4)) + 1
  numFive2 = Math.floor((Math.random() * 13)) + 1

  //comp cards numb generator
  numSix1 = Math.floor((Math.random() * 4)) + 1
  numSix2 = 1// Math.floor((Math.random() * 13)) + 1

  numSeven1 = Math.floor((Math.random() * 4)) + 1
  numSeven2 = 1// Math.floor((Math.random() * 13)) + 1

  numEight1 = Math.floor((Math.random() * 4)) + 1
  numEight2 = 1//Math.floor((Math.random() * 13)) + 1

  numNine1 = Math.floor((Math.random() * 4)) + 1
  numNine2 = 1//Math.floor((Math.random() * 13)) + 1

  numTen1 = Math.floor((Math.random() * 4)) + 1
  numTen2 = 1//Math.floor((Math.random() * 13)) + 1



  //user last 3 images set hidden
  document.getElementById('userImage3').style.display = "none"
  document.getElementById('userImage4').style.display = "none"
  document.getElementById('userImage5').style.display = "none"

  //comp last 3 images set  hidden
  document.getElementById('compImage3').style.display = "none"
  document.getElementById('compImage4').style.display = "none"
  document.getElementById('compImage5').style.display = "none"


  //user apply number to image
  document.getElementById('userImage1').src = "images/" + numOne1 + '.' + numOne2 + '.png'
  document.getElementById('userImage2').src = "images/" + numTwo1 + '.' + numTwo2 + '.png'
  document.getElementById('userImage3').src = "images/" + numThree1 + '.' + numThree2 + '.png'
  document.getElementById('userImage4').src = "images/" + numFour1 + '.' + numFour2 + '.png'
  document.getElementById('userImage5').src = "images/" + numFive1 + '.' + numFive2 + '.png'

  //comp apply number to image
  document.getElementById('compImage1').src = "images/" + numSix1 + '.' + numSix2 + '.png'
  document.getElementById('compImage2').src = "images/" + numSeven1 + '.' + numSeven2 + '.png'
  document.getElementById('compImage3').src = "images/" + numEight1 + '.' + numEight2 + '.png'
  document.getElementById('compImage4').src = "images/" + numNine1 + '.' + numNine2 + '.png'
  document.getElementById('compImage5').src = "images/" + numTen1 + '.' + numTen2 + '.png'

  //user check for ace and above 11
  if (numOne2 >= 11) {
    numOne2 = 10
  }
  if (numTwo2 >= 11) {
    numTwo2 = 10
  }
  if (numThree2 >= 11) {
    numThree2 = 10
  }
  if (numFour2 >= 11) {
    numFour2 = 10
  }
  if (numFive2 >= 11) {
    numFive2 = 10
  }

  //comp check for ace and above 11
  if (numSix2 >= 11) {
    numSix2 = 10
  }

  if (numSeven2 >= 11) {
    numSeven2 = 10
  }
  if (numEight2 >= 11) {
    numEight2 = 10
  }

  if (numNine2 >= 11) {
    numNine2 = 10
  }

  if (numTen2 >= 11) {
    numTen2 = 10
  }



//user combination cards

  UserCombCard1 = numOne2 + numTwo2
  UserCombCard2 = numOne2 + numTwo2 + numThree2
  UserCombCard3 = numOne2 + numTwo2 + numThree2 + numFour2
  UserCombCard4 = numOne2 + numTwo2 + numThree2 + numFour2 + numFive2


//computer combination cards
numCompCombCard0 = numSix1
numCompCombCard1 = numSix2 + numSeven2
numCompCombCard2 = numSix2 + numSeven2 + numEight2
numCompCombCard3 = numSix2 + numSeven2 + numEight2 + numNine2
numCompCombCard4 = numSix2 + numSeven2 + numEight2 + numNine2 + numTen2







  



  //token check
  if (numUserTokens == 0) {
    alert("You don't have any tokens! Press the reset button!")
    return
  } else if (numTokenBet < 10) {
    alert("Bet atleast 10 tokens!")
    return
  } else if (numTokenBet > numUserTokens) {
    alert("You can't bet more than you have!")
    return
  }

  document.getElementById('compImage1').src = "images/back_blue.png"

  strOutput = " "

  userTotal = numOne2 + numTwo2
  compTotal = numSeven2



  //check if won via 5 card or 21 on dot
  if (userTotal > 21) { // if bust
    strOutput = "You Busted!"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens - numTokenBet
  }
  if (userTotal == 21) { //if 21 on dot
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    strOutput = "You win!"
    numUserTokens = numUserTokens + numTokenBet
  }
  if (userTotal == compTotal) { //tie; nothing happens until hit
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    strOutput = ""
  }
  if (timesHit == 3 && userTotal <= 21) { //5 card charlie
    strOutput = "5 card Charlie, You Win!"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens + numTokenBet
  }



  timesHit = 0
  document.getElementById('output').innerHTML = strOutput
}

function hit() {

  timesHit++


  document.getElementById('compImage1').src = "images/back_blue.png"

  userTotal = numOne2 + numTwo2

  if (timesHit == 1) {
    document.getElementById('userImage3').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numThree2
  }
  if (timesHit == 2) {
    document.getElementById('userImage4').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numThree2 + numFour2
  }
  if (timesHit == 3) {
    document.getElementById('userImage5').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numThree2 + numFour2 + numFive2
  }

  if (userTotal > 21) { // if bust
    strOutput = "You Busted!"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens - numTokenBet
  } else if (userTotal == 21) { //if 21 on dot
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    strOutput = "You win!"
    numUserTokens = numUserTokens + numTokenBet
  } else if (userTotal == compTotal) {
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
  }
  if (timesHit == 3 && userTotal <= 21) { //5 card charlie
    strOutput = "5 card Charlie, You Win!"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens + numTokenBet
  }


  document.getElementById('userTokens').innerHTML = numUserTokens
  document.getElementById('output').innerHTML = strOutput



}




function stay() {


 document.getElementById('compImage1').style.display = "inline"


  document.getElementById('compImage1').src = "images/" + numSix1 + '.' + numSix2 + '.png'

  compTotal = 0




 if (numSix2 == 1  && compTotal <= 10) {
  numSix2 = 11
  compTotal = numSix2 
} else if (numSix2 == 1 && compTotal >=11) {
  numSix2 = 1
  compTotal = numSix2 
}

if (numSeven2 == 3 && numCompCombCard0 <=10) {
  numSeven2 = 11
  compTotal = numSix2 + numSeven2 
} else if (numSeven2 == 3 && numCompCombCard0 >=11) {
  numSeven2 = 1
  compTotal = numSix2 + numSeven2 
}


  if (compTotal < 17) {
    document.getElementById('compImage3').style.display = "inline"
    compTotal = numSix2 + numSeven2 + numEight2
    numCompPlayTime = 1
  }

  if (numEight2 == 1 && numCompPlayTime == 1 && compTotal <=10) {
    numEight2 = 11
    compTotal = numSix2 + numSeven2 + numEight2
  } else if (numEight2 == 1 && numCompPlayTime == 1 && compTotal >=11) {
    numEight2 = 1
    compTotal = numSix2 + numSeven2 + numEight2
  }



  
 if (compTotal < 17) {
    document.getElementById('compImage4').style.display = "inline"
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2
    numCompPlayTime = 2
  }

  if (numNine2 == 1 && numCompPlayTime == 2 && compTotal <=10) {
    numNine2 = 11
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2
  } else if (numNine2 == 1 && numCompPlayTime == 2 && compTotal >=11) {
    numNine2 = 1
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2
  } 

  if (compTotal < 17) {
    document.getElementById('compImage5').style.display = "inline"
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2 + numTen2
    numCompPlayTime = 3
  }

  if (numTen2 == 1 && numCompPlayTime == 3 && compTotal <=10) {
    numTen2 = 11
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2 + numTen2
  } else if (numTen2 == 1 && numCompPlayTime == 2 && compTotal >=11) {
    numTen2 = 1
    compTotal = numSix2 + numSeven2 + numEight2 + numNine2 + numTen2
  } 

  /**


   */











  //win conditions
  if ((compTotal == userTotal) && (userTotal <= 21 && compTotal <= 21)) {
    strOutput = "no one wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
  } else if (userTotal > 21 && compTotal > 21) {
    strOutput = "no one wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
  } else if (compTotal >= userTotal && compTotal <= 21) {
    strOutput = "Computer wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens - numTokenBet
  } else if (userTotal > compTotal && userTotal <= 21) {
    strOutput = "Player wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens + numTokenBet
  } else if (userTotal > 21){
    strOutput = "Computer wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens - numTokenBet
  } else if (compTotal > 21) {
    strOutput = "Player wins"
    document.getElementById('deal').disabled = false
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    numUserTokens = numUserTokens + numTokenBet
  }








  document.getElementById('userTokens').innerHTML = numUserTokens
  document.getElementById('output').innerHTML = strOutput

    document.getElementById('userScore').innerHTML = userTotal
    document.getElementById('compScore').innerHTML = compTotal


    console.log("1-7")
    console.log(numOne2, "--1")
    console.log(numTwo2, "--2")
    console.log(numThree2, "--3")
    console.log(numFour2, "--4")
    console.log(numFive2, "--5")
    console.log(numSix2, "--6")
    console.log(numSeven2, "--7")
    console.log(numEight2, "--8")
    console.log(numNine2, "--9")
    console.log(numTen2, "--10")
  

    document.getElementById("deal").innerHTML = "Deal Again!"
}

document.addEventListener("DOMContentLoaded", function(event) {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
});
