//document.getElementById('userImage3').style.display = "inline"

//document.getElementById('button3').disabled = true

//<img id="userImage5" class="images" class="right" src="images/1.2.png" alt="card 2" style="height: 200px; display:none">


var numTokens = 100
var numCompScore = 0
var strOutput = ""
var numPlayTotal = 0
var numPlayTimes = 0
var numComPlayTimes = 0


var numSpaceOne1 = 0
var numSpaceOne2 = 0
var numSpaceTwo1 = 0
var numSpaceTwo2 = 0
var numSpaceThree1 = 0
var numSpaceThree2 = 0
var numSpaceFour1 = 0
var numSpaceFour2 = 0
var numSpaceFive1 = 0
var numSpaceFive2 = 0
var numSpaceSix1 = 0
var numSpaceSix2 = 0
var numSpaceSeven1 = 0
var numSpaceSeven2 = 0
var numSpaceEight1 = 0
var numSpaceEight2 = 0
var numSpaceNine1 = 0
var numSpaceNine2 = 0
var numSpaceTen1 = 0
var numSpaceTen2 = 0
var numBet = 0

var numFirstSecond = 0
var numFirstSecondThird = 0
var numFirstSecondThirdFourth = 0
var numFirstSecondThirdFourthFifth = 0

var numComFirstSecond = 0
var numComFirstSecondThird = 0
var numComFirstSecondThirdFourth = 0
var numComFirstSecondThirdFourthFifth = 0


function newFace() {

  //setting variables
  numSpaceOne1 = Math.floor((Math.random() * 4)) + 1
  numSpaceOne2 = Math.floor((Math.random() * 13)) + 2
  numSpaceTwo1 = Math.floor((Math.random() * 4)) + 1
  numSpaceTwo2 = Math.floor((Math.random() * 13)) + 2
  numSpaceThree1 = Math.floor((Math.random() * 4)) + 1
  numSpaceThree2 = Math.floor((Math.random() * 13)) + 2
  numSpaceFour1 = Math.floor((Math.random() * 4)) + 1
  numSpaceFour2 = Math.floor((Math.random() * 13)) + 2
  numSpaceFive1 = Math.floor((Math.random() * 4)) + 1
  numSpaceFive2 = Math.floor((Math.random() * 13)) + 2
  numSpaceSix1 = Math.floor((Math.random() * 4)) + 1
  numSpaceSix2 = Math.floor((Math.random() * 13)) + 2
  numSpaceSeven1 = Math.floor((Math.random() * 4)) + 1
  numSpaceSeven2 = Math.floor((Math.random() * 13)) + 2
  numSpaceEight1 = Math.floor((Math.random() * 4)) + 1
  numSpaceEight2 = Math.floor((Math.random() * 13)) + 2
  numSpaceNine1 = Math.floor((Math.random() * 4)) + 1
  numSpaceNine2 = Math.floor((Math.random() * 13)) + 2
  numSpaceTen1 = Math.floor((Math.random() * 4)) + 1
  numSpaceTen2 = Math.floor((Math.random() * 13)) + 2
  numBet = Number(document.getElementById('betId').value)
  strOutput = " "
  numPlayTimes = 0


  
  //make a bet code
  if (numTokens <= 0) {
    strOutput = "You're out of tokens! Reset the game and try again."
    document.getElementById('winner').innerHTML = strOutput
    return

  } else if (numBet > numTokens) {
    strOutput = "You don't have enough tokens! Bet less tokens. "
    document.getElementById('winner').innerHTML = strOutput
    return
  } else if (numBet <= 0) {
    strOutput = "Make a bet over 0 before you play!"
    document.getElementById('winner').innerHTML = strOutput
    return
  }




  //setting the images
  document.getElementById('slotThree').style.display = "none"
  document.getElementById('slotFour').style.display = "none"
  document.getElementById('slotFive').style.display = "none"
  document.getElementById('slotEight').style.display = "none"
  document.getElementById('slotNine').style.display = "none"
  document.getElementById('slotTen').style.display = "none"

  document.getElementById('slotOne').src = "images/" + numSpaceOne1 + "." + numSpaceOne2 + ".png";
  document.getElementById('slotTwo').src = "images/" + numSpaceTwo1 + "." + numSpaceTwo2 + ".png";
  document.getElementById('slotSix').src = "images/facedown.png";
  document.getElementById('slotSeven').src = "images/" + numSpaceFour1 + "." + numSpaceFour2 + ".png";

  document.getElementById('slotThree').src = "images/" + numSpaceFive1 + "." + numSpaceFive2 + ".png";
  document.getElementById('slotFour').src = "images/" + numSpaceSix1 + "." + numSpaceSix2 + ".png";
  document.getElementById('slotFive').src = "images/" + numSpaceSeven1 + "." + numSpaceSeven2 + ".png";

  document.getElementById('slotEight').src = "images/" + numSpaceEight1 + "." + numSpaceEight2 + ".png";
  document.getElementById('slotNine').src = "images/" + numSpaceNine1 + "." + numSpaceNine2 + ".png";
  document.getElementById('slotTen').src = "images/" + numSpaceTen1 + "." + numSpaceTen2 + ".png";

  document.getElementById('hit').disabled = false
  document.getElementById('stay').disabled = false
  document.getElementById('button').disabled = true
  document.getElementById('button').innerHTML = "DEAL 🎡"







  //to make the cards over 12 a ten value
  if (numSpaceOne2 >= 12) {
    numSpaceOne2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceTwo2 >= 12) {
    numSpaceTwo2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceThree2 >= 12) {
    numSpaceThree2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceFour2 >= 12) {
    numSpaceFour2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceFive2 >= 12) {
    numSpaceFive2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceSix2 >= 12) {
    numSpaceSix2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSpaceSeven2 >= 12) {
    numSpaceSeven2 = 10
    console.log("There was something bigger than the 10.")
  }

  //win logic 
  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    console.log("TEST")
    numTokens = numTokens + numBet
  }



  numPlayTotal = numSpaceOne2 + numSpaceTwo2
  if (numPlayTotal == 21) {
    strOutput = "You Win!"
  }


  numCompScore = numSpaceThree2 + numSpaceFour2;



  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    console.log("TEST")
    numTokens = numTokens + numBet
  }


numFirstSecond =  numSpaceOne2 + numSpaceTwo2
 numFirstSecondThird = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2
 numFirstSecondThirdFourth = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2
 numFirstSecondThirdFourthFifth = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2 + numSpaceSeven2

   numComFirstSecond = numSpaceThree2 + numSpaceFour2
 numComFirstSecondThird = numSpaceThree2 + numSpaceFour2 + numSpaceEight2
 numComFirstSecondThirdFourth = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2
 numComFirstSecondThirdFourthFifth = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2 + numSpaceTen2 


  //output

  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens



}





function hitGame() {
  numPlayTimes++
  console.log(numPlayTimes)






  if (numPlayTimes == 1) {

    document.getElementById('slotThree').style.display = "inline"
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2


  } else if (numPlayTimes == 2) {

    document.getElementById('slotFour').style.display = "inline"
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2

  } else if (numPlayTimes == 3) {

    document.getElementById('slotFive').style.display = "inline"
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2 + numSpaceSeven2

  }






  if (numSpaceFive2 == 11 && numPlayTimes == 1 && numFirstSecond <= 10 ) {
    numSpaceFive2 == 11
       numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2
    
  } else if (numSpaceFive2 == 11 && numPlayTimes == 1 && numFirstSecond >= 11) {
    numSpaceFive2 = 1
       numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2
  }

  if (numSpaceSix2 == 11 && numPlayTimes == 2 && numFirstSecondThirdFourth <= 10) {
    numSpaceSix2 == 11
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2
  } else if (numSpaceSix2 == 11 && numPlayTimes == 2 && numFirstSecondThirdFourth >= 11) {
    numSpaceSix2 = 1
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2
  }

  if (numSpaceSeven2 == 11 && numPlayTimes == 3 && numFirstSecondThirdFourthFifth <= 10) {
    numSpaceSeven2 == 11
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2 + numSpaceSeven2
  } else if (numSpaceSeven2 == 11 && numPlayTimes == 3 && numFirstSecondThirdFourthFifth >= 11) {
    numSpaceSeven2 = 1
    numPlayTotal = numSpaceOne2 + numSpaceTwo2 + numSpaceFive2 + numSpaceSix2 + numSpaceSeven2
  }


  console.log(numSpaceFive2 + "TEST")


  if (numPlayTotal <= 21 && numPlayTimes == 3) {
    strOutput = "FIVE CARD CHARLIE!!"
  }



  if (numPlayTotal == 21) {
    strOutput = "You Win!"

  } else if (numPlayTotal > 21) {
    strOutput = "BUST! You Lose."

  }

  console.log(numPlayTotal)

  if (strOutput == "BUST! You Lose.") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    numTokens = numTokens - numBet
  }

  if (strOutput == "You Win!" || strOutput == "FIVE CARD CHARLIE!!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    console.log("TEST")
    numTokens = numTokens + numBet
  }


  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens
}











function stayGame() {
  document.getElementById('hit').disabled = true
  document.getElementById('stay').disabled = true
  document.getElementById('button').disabled = false

  document.getElementById('slotSix').src = "images/" + numSpaceThree1 + "." + numSpaceThree2 + ".png";




  




  if (numCompScore < 17) {
    document.getElementById('slotEight').style.display = "inline"
    numCompScore = numCompScore + numSpaceEight2
    numComPlayTimes = 1
    console.log(numCompScore)
  }



  
 if (numSpaceEight2 == 11 && numComPlayTimes == 1 && numComFirstSecond <= 10 ) {
    numSpaceEight2 = 11
  
       numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2
    
  } else if (numSpaceEight2 == 11 && numComPlayTimes == 1 && numComFirstSecond >= 11) {
    numSpaceEight2 = 1
    console.log("YOYOYOYOYO")
       numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2
  }

  

  if (numCompScore < 17) {
    document.getElementById('slotNine').style.display = "inline"
    numCompScore = numCompScore + numSpaceNine2
    console.log(numCompScore)
    numComPlayTimes = 2
  }
  

  if (numSpaceNine2 == 11 && numComPlayTimes == 2 && numComFirstSecondThirdFourth <= 10) {
   numSpaceNine2 = 11
    numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2
  } else if (numSpaceNine2 == 11 && numComPlayTimes == 2 && numComFirstSecondThirdFourth >= 11) {
    numSpaceNine2 = 1
     numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2
  }



  

  if (numCompScore < 17) {
    document.getElementById('slotTen').style.display = "inline"
    numCompScore = numCompScore + numSpaceTen2
    console.log(numCompScore)
    numComPlayTimes = 3
  }

  if (numSpaceTen2 == 11 && numComPlayTimes == 3 && numComFirstSecondThirdFourthFifth <= 10) {
    numSpaceTen2 = 11
         numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2 + numSpaceTen2
  } else if (numSpaceSeven2 == 11 && numComPlayTimes == 3 && numComFirstSecondThirdFourthFifth >= 11) {
    numSpaceTen2 = 1
         numCompScore = numSpaceThree2 + numSpaceFour2 + numSpaceEight2 + numSpaceNine2 + numSpaceTen2
  }


  

  
  if (numCompScore > 21) {
    strOutput = "You Win!"

  } else if (numCompScore == 21) {
    strOutput = "You Lose!"
  }



  

  
 




  


  if (numPlayTotal == numCompScore) {
    strOutput = "Tie!"

  } else if (numPlayTotal > numCompScore) {
    strOutput = "You Win!"
  } else if (numCompScore > numPlayTotal && numCompScore < 21) {
    strOutput = "You Lose!"
  }

  if (strOutput == "BUST! You Lose." || strOutput == "You Lose!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    numTokens = numTokens - numBet
  }

  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('button').disabled = false
    console.log("TEST")
    numTokens = numTokens + numBet
  }



  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens
    document.getElementById('button').innerHTML = "Deal Again"


  console.log(numCompScore)

  
}







