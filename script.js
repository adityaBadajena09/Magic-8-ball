 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

let answerType=chooseRandomAnswerType();

function chooseRandomAnswer(answerType) {
	// Part 1: Your code here 👇

  let rIndex=0;
  let Answer ="";
  randomIndex= getRandomNumber(0,4);
  
  
  if(answerType=="positive"){

   
   Answer= positiveAnswers[rIndex];
   
    
  }else if(answerType=="negative"){

   
    Answer= negativeAnswers[rIndex];
   
  }
  else {

   
   Answer= maybeAnswers[rIndex];
   
    
  }

  return Answer;
  

}

chooseRandomAnswerTest();

function chooseRandomAnswerType() {
	// Part 2: Your code here 👇

  let type= ["positive","negative","maybe"];
  let num= getRandomNumber(0,3);
  let answerType= type[num];
  return answerType;
}

 //chooseRandomAnswerTypeTest();

function onAnswerRequested() {
  // Part 3: Your code here 👇

  let questionText="";
  let text="";
  questionText=getQuestionText();
 
  if(questionText==""){

    text= NO_QUESTION_WARNING;
    return supplyAnswer(text);
  }
  else{
    let randomAnswerType= chooseRandomAnswerType();
    let randomAnswer="";
    randomAnswer=chooseRandomAnswer(randomAnswerType);
    return supplyAnswer(randomAnswer);
    
  }
	
}

// onAnswerRequestedTest();