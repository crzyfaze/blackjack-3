//document.getElementById('userImage3').style.display = "inline"

//document.getElementById('deal3').disabled = true

//<img id="userImage5" class="images" class="right" src="images/1.2.png" alt="card 2" style="height: 200px; display:none">


let numUserTokens = 100
let compTotal = 0
let strOutput = ""
let userTotal = 0
let numUserPlayTimes = 0
let numComPlayTimes = 0
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



let numFirstSecond = 0
let numFirstSecondThird = 0
let numFirstSecondThirdFourth = 0
let numFirstSecondThirdFourthFifth = 0

let numComFirstSecond = 0
let numComFirstSecondThird = 0
let numComFirstSecondThirdFourth = 0
let numComFirstSecondThirdFourthFifth = 0


function newFace() {

  //setting letiables
  numOne1 = Math.floor((Math.random() * 4)) + 1
  numOne2 = Math.floor((Math.random() * 13)) + 2
  numTwo1 = Math.floor((Math.random() * 4)) + 1
  numTwo2 = Math.floor((Math.random() * 13)) + 2
  numThree1 = Math.floor((Math.random() * 4)) + 1
  numThree2 = Math.floor((Math.random() * 13)) + 2
  numFour1 = Math.floor((Math.random() * 4)) + 1
  numFour2 = Math.floor((Math.random() * 13)) + 2
  numFive1 = Math.floor((Math.random() * 4)) + 1
  numFive2 = Math.floor((Math.random() * 13)) + 2
  numSix1 = Math.floor((Math.random() * 4)) + 1
  numSix2 = Math.floor((Math.random() * 13)) + 2
  numSeven1 = Math.floor((Math.random() * 4)) + 1
  numSeven2 = Math.floor((Math.random() * 13)) + 2
  numEight1 = Math.floor((Math.random() * 4)) + 1
  numEight2 = Math.floor((Math.random() * 13)) + 2
  numSpaceNine1 = Math.floor((Math.random() * 4)) + 1
  numNine2 = Math.floor((Math.random() * 13)) + 2
  numTen1 = Math.floor((Math.random() * 4)) + 1
  numTen2 = Math.floor((Math.random() * 13)) + 2
  numTokenBet = Number(document.getElementById('myRange').value)
  strOutput = " "
  numUserPlayTimes = 0


  
  //make a bet code
  if (numTokens <= 0) {
    strOutput = "You're out of tokens! Reset the game and try again."
    document.getElementById('winner').innerHTML = strOutput
    return

  } else if (numTokenBet > numTokens) {
    strOutput = "You don't have enough tokens! Bet less tokens. "
    document.getElementById('winner').innerHTML = strOutput
    return
  } else if (numTokenBet <= 0) {
    strOutput = "Make a bet over 0 before you play!"
    document.getElementById('winner').innerHTML = strOutput
    return
  }




  //setting the images
  document.getElementById('userImage3').style.display = "none"
  document.getElementById('userImage4').style.display = "none"
  document.getElementById('userImage5').style.display = "none"
  document.getElementById('compImage3').style.display = "none"
  document.getElementById('compImage4').style.display = "none"
  document.getElementById('compImage5').style.display = "none"

  document.getElementById('userImage1').src = "images/" + numOne1 + "." + numOne2 + ".png";
  document.getElementById('userImage2').src = "images/" + numTwo1 + "." + numTwo2 + ".png";
  document.getElementById('compImage1').src = "images/back_red.png";
  document.getElementById('compImage2').src = "images/" + numFour1 + "." + numFour2 + ".png";

  document.getElementById('userImage3').src = "images/" + numFive1 + "." + numFive2 + ".png";
  document.getElementById('userImage4').src = "images/" + numSix1 + "." + numSix2 + ".png";
  document.getElementById('userImage5').src = "images/" + numSeven1 + "." + numSeven2 + ".png";

  document.getElementById('compImage3').src = "images/" + numEight1 + "." + numEight2 + ".png";
  document.getElementById('compImage4').src = "images/" + numSpaceNine1 + "." + numNine2 + ".png";
  document.getElementById('compImage5').src = "images/" + numTen1 + "." + numTen2 + ".png";

  document.getElementById('hit').disabled = false
  document.getElementById('stay').disabled = false
  document.getElementById('deal').disabled = true
  document.getElementById('deal').innerHTML = "DEAL 🎡"


/**
 * slot one - userimage1
 * slot two - userimage 2
 * slot three - usermimage 3
 * slot four - userimage4
 * 
  * compImage1 - comp image1
  * slot seven - compimage2
  * slot eight - compimage3
  * slot nine - compimage4
  * slot ten - compimage5
*/




  //to make the cards over 12 a ten value
  if (numOne2 >= 11) {
    numOne2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numTwo2 >= 11) {
    numTwo2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numThree2 >= 11) {
    numThree2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numFour2 >= 11) {
    numFour2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numFive2 >= 11) {
    numFive2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSix2 >= 11) {
    numSix2 = 10
    console.log("There was something bigger than the 10.")
  }

  if (numSeven2 >= 11) {
    numSeven2 = 10
    console.log("There was something bigger than the 10.")
  }

  //win logic 
  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false

    numTokens = numTokens + numTokenBet
  }



  userTotal = numOne2 + numTwo2
  if (userTotal == 21) {
    strOutput = "You Win!"
  }


  compTotal = numThree2 + numFour2;



  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false
    console.log("TEST")
    numTokens = numTokens + numTokenBet
  }


numFirstSecond =  numOne2 + numTwo2
 numFirstSecondThird = numOne2 + numTwo2 + numFive2
 numFirstSecondThirdFourth = numOne2 + numTwo2 + numFive2 + numSix2
 numFirstSecondThirdFourthFifth = numOne2 + numTwo2 + numFive2 + numSix2 + numSeven2

   numComFirstSecond = numThree2 + numFour2
 numComFirstSecondThird = numThree2 + numFour2 + numEight2
 numComFirstSecondThirdFourth = numThree2 + numFour2 + numEight2 + numNine2
 numComFirstSecondThirdFourthFifth = numThree2 + numFour2 + numEight2 + numNine2 + numTen2 


  //output

  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens



}





function hitGame() {
  numUserPlayTimes++
  console.log(numUserPlayTimes)






  if (numUserPlayTimes == 1) {

    document.getElementById('userImage3').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numFive2


  } else if (numUserPlayTimes == 2) {

    document.getElementById('userImage4').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2

  } else if (numUserPlayTimes == 3) {

    document.getElementById('userImage5').style.display = "inline"
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2 + numSeven2

  }






  if (numFive2 == 11 && numUserPlayTimes == 1 && numFirstSecond <= 10 ) {
    numFive2 == 11
       userTotal = numOne2 + numTwo2 + numFive2
    
  } else if (numFive2 == 11 && numUserPlayTimes == 1 && numFirstSecond >= 11) {
    numFive2 = 1
       userTotal = numOne2 + numTwo2 + numFive2
  }

  if (numSix2 == 11 && numUserPlayTimes == 2 && numFirstSecondThirdFourth <= 10) {
    numSix2 == 11
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2
  } else if (numSix2 == 11 && numUserPlayTimes == 2 && numFirstSecondThirdFourth >= 11) {
    numSix2 = 1
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2
  }

  if (numSeven2 == 11 && numUserPlayTimes == 3 && numFirstSecondThirdFourthFifth <= 10) {
    numSeven2 == 11
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2 + numSeven2
  } else if (numSeven2 == 11 && numUserPlayTimes == 3 && numFirstSecondThirdFourthFifth >= 11) {
    numSeven2 = 1
    userTotal = numOne2 + numTwo2 + numFive2 + numSix2 + numSeven2
  }


  console.log(numFive2 + "TEST")


  if (userTotal <= 21 && numUserPlayTimes == 3) {
    strOutput = "FIVE CARD CHARLIE!!"
  }



  if (userTotal == 21) {
    strOutput = "You Win!"

  } else if (userTotal > 21) {
    strOutput = "BUST! You Lose."

  }

  console.log(userTotal)

  if (strOutput == "BUST! You Lose.") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false
    numTokens = numTokens - numTokenBet
  }

  if (strOutput == "You Win!" || strOutput == "FIVE CARD CHARLIE!!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false
    console.log("TEST")
    numTokens = numTokens + numTokenBet
  }


  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens
}











function stayGame() {
  document.getElementById('hit').disabled = true
  document.getElementById('stay').disabled = true
  document.getElementById('deal').disabled = false

  document.getElementById('compImage1').src = "images/" + numThree1 + "." + numThree2 + ".png";




  




  if (compTotal < 17) {
    document.getElementById('compImage3').style.display = "inline"
    compTotal = compTotal + numEight2
    numComPlayTimes = 1
    console.log(compTotal)
  }



  
 if (numEight2 == 11 && numComPlayTimes == 1 && numComFirstSecond <= 10 ) {
    numEight2 = 11
  
       compTotal = numThree2 + numFour2 + numEight2
    
  } else if (numEight2 == 11 && numComPlayTimes == 1 && numComFirstSecond >= 11) {
    numEight2 = 1
    console.log("YOYOYOYOYO")
       compTotal = numThree2 + numFour2 + numEight2
  }

  

  if (compTotal < 17) {
    document.getElementById('compImage4').style.display = "inline"
    compTotal = compTotal + numNine2
    console.log(compTotal)
    numComPlayTimes = 2
  }
  

  if (numNine2 == 11 && numComPlayTimes == 2 && numComFirstSecondThirdFourth <= 10) {
   numNine2 = 11
    compTotal = numThree2 + numFour2 + numEight2 + numNine2
  } else if (numNine2 == 11 && numComPlayTimes == 2 && numComFirstSecondThirdFourth >= 11) {
    numNine2 = 1
     compTotal = numThree2 + numFour2 + numEight2 + numNine2
  }



  

  if (compTotal < 17) {
    document.getElementById('compImage5').style.display = "inline"
    compTotal = compTotal + numTen2
    console.log(compTotal)
    numComPlayTimes = 3
  }

  if (numTen2 == 11 && numComPlayTimes == 3 && numComFirstSecondThirdFourthFifth <= 10) {
    numTen2 = 11
         compTotal = numThree2 + numFour2 + numEight2 + numNine2 + numTen2
  } else if (numSeven2 == 11 && numComPlayTimes == 3 && numComFirstSecondThirdFourthFifth >= 11) {
    numTen2 = 1
         compTotal = numThree2 + numFour2 + numEight2 + numNine2 + numTen2
  }


  

  
  if (compTotal > 21) {
    strOutput = "You Win!"

  } else if (compTotal == 21) {
    strOutput = "You Lose!"
  }



  

  
 




  


  if (userTotal == compTotal) {
    strOutput = "Tie!"

  } else if (userTotal > compTotal) {
    strOutput = "You Win!"
  } else if (compTotal > userTotal && compTotal < 21) {
    strOutput = "You Lose!"
  }

  if (strOutput == "BUST! You Lose." || strOutput == "You Lose!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false
    numTokens = numTokens - numTokenBet
  }

  if (strOutput == "You Win!") {
    document.getElementById('hit').disabled = true
    document.getElementById('stay').disabled = true
    document.getElementById('deal').disabled = false
    console.log("TEST")
    numTokens = numTokens + numTokenBet
  }



  document.getElementById('winner').innerHTML = strOutput
  document.getElementById('tokens').innerHTML = " " + numTokens
    document.getElementById('deal').innerHTML = "Deal Again"


  console.log(compTotal)

  
}






document.addEventListener("DOMContentLoaded", function(event) {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
});

