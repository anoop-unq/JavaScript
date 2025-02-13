// Task 1: take prompt and Convert to Uppercase
// Task 2: take prompt and Convert to Lowercase
let mainElement = document.createElement('div');
mainElement.classList.add("program");

let main = document.createElement('div');
main.classList.add("program");

let inputE1 = document.createElement('input');
inputE1.type = "text";
inputE1.classList.add("input-element");
inputE1.id = "userValue";
inputE1.placeholder = "Enter String";

let para = document.createElement('p')
para.classList.add("message")
// para.textContent=""
para.id="messageError"

// let inputE2 = document.createElement('input');
// inputE2.type = "password";
// inputE2.classList.add("input-element");
// inputE2.id = "userPassword";
// inputE2.placeholder = "Enter Password";

main.append(inputE1,para)

let other = document.createElement('div')
other.classList.add("other")

let paraE1 = document.createElement('p')
paraE1.classList.add("message")
// para.textContent=""
paraE1.id="messageError1"

let submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.classList.add("submit-btn");
submitBtn.textContent = "Submit";

let maintain = document.createElement('div');
maintain.classList.add("programless")

let operations2 = document.createElement('button');
operations2.classList.add("Addless")
operations2.id="perform"
operations2.textContent="to UpperCase"


let operations3 = document.createElement('button');
operations3.classList.add("Addless")
operations3.id="perform1"
operations3.textContent="to LowerCase"

let maintainE1 = document.createElement('div');
maintainE1.classList.add("programless")

let operations22 = document.createElement('button');
operations22.classList.add("Addless")
operations22.id="reverse"
operations22.textContent="Reverse"


let operations33 = document.createElement('button');
operations33.classList.add("Addless")
operations33.id="vowel"
operations33.textContent="Vowel"

let submitBtn1 = document.createElement('button');
submitBtn1.classList.add("submit-btn");
submitBtn1.id="hey"
submitBtn1.textContent = "Reset";
maintain.style="display:none"
operations22.style="display:none";
operations33.style="display:none";
submitBtn1.style="display:none";
submitBtn.onclick=function(){
    let pass = document.getElementById('userValue')
    let passValue = pass.value;
    let messageError = document.getElementById('messageError')
    let messageDisplay = document.getElementById('messageError1')
    if(passValue==""){
        messageError.textContent="Invalid ! Enter a String "
        messageError.style.fontWeight="725";
        messageError.style.marginTop="10px"
    }
    else if(Number(passValue)){

        messageError.textContent=`Entered number ${passValue} ! enter string`
        messageError.style.fontWeight="725";
        messageError.style.marginTop="10px"
    }
    else if(String(passValue)){
      messageError.textContent=""
        var stringArray = passValue.split('');

        var numberArray = stringArray.map(function(str) {
          var trimmedStr = str.trim();
          return trimmedStr ? String(trimmedStr) : true // here remove NaN for including space as Nan !
        });
  
        var validNumbers = numberArray.filter(function(num) {
          return isNaN(num);// we haveto remove ! in this position to get strings
        });
       
        if((String(validNumbers))){
          messageDisplay.textContent="Collected Strings : "+ validNumbers.join("");
          messageDisplay.classList.add("green")
        }
        maintain.style="display:block"
        maintain.style="display:flex";
        maintain.style="gap:45px";

        let per = document.getElementById('perform')
        per.addEventListener("click" ,function()
        {
          let sum = validNumbers.join("");
          let result = sum.toUpperCase()
          messageDisplay.textContent=result.toUpperCase();
        });

        let perless = document.getElementById('perform1')
        perless.addEventListener("click" ,function()
        {
          operations22.style="display:block";
          operations33.style="display:block";

          let sum = validNumbers.join("");
          let result = sum.toLowerCase()
          messageDisplay.textContent=result.toLowerCase();
        });
       

        let reverse = document.getElementById('reverse');
        reverse.onclick=function(){
          let sum = validNumbers.reverse();
          // let kon = sum.split();
          // console.log(kon)
          let bon = sum.join("")
          messageDisplay.textContent=bon;
        }

        let vowel = document.getElementById('vowel');
        vowel.onclick=function(){
          submitBtn1.style="display:block";

          console.log(validNumbers)
          let sum = validNumbers.join("");
          // console.log(sum)
          let marri = sum.match(/[aeiou]/gi);
          // console.log(marri)
          messageDisplay.textContent=`${marri} are Vowels and Vowel Count: ${marri ? marri.length : 0}`;
          console.log(`Vowel Count: ${marri ? marri.length : 0}`)

          // here marri means vowels okay
                // is the condition of ternary operator if vowels not found it returns to null means 0 otherwise it calculates the length
        }
        let Result = document.getElementById('hey');
        Result.onclick=function(){
          maintain.style="display:none"
          operations22.style="display:none";
          operations33.style="display:none";
          submitBtn1.style="display:none";
          pass.value="";
          messageError.textContent=""
          messageDisplay.textContent=""
        }
          pass.value=""
}
}

maintain.append(operations2,operations3)
maintainE1.append(operations22,operations33)
other.append(paraE1,submitBtn,maintain,maintainE1,submitBtn1)

mainElement.append(main,other)
document.body.append(mainElement)

// Task 3: Word Counter
// Scenario: Count the number of words in a sentence. Task:
// Prompt the user to enter a sentence.
// Split the sentence into words and count them.
// Display the word count.
// Hint: use split and length method

let secondE1 = document.createElement('div')

let mainOne = document.createElement('div');
mainOne.classList.add("program");

let inputE1One = document.createElement('input');
inputE1One.type = "text";
inputE1One.classList.add("input-element");
inputE1One.id = "userGiven";
inputE1One.placeholder = "Enter String";

let paraOne = document.createElement('p')
paraOne.classList.add("message")
// para.textContent=""
paraOne.id="messageErrorOne"

let otherLess = document.createElement('div')
otherLess.classList.add("other")

let paraE1Less = document.createElement('p')
paraE1Less.classList.add("message")
// para.textContent=""
paraE1Less.id="messageErrorLess"

let submitBtnLess = document.createElement('button');
submitBtn.typeLess = "submit";
submitBtnLess.classList.add("submit-btn");
submitBtnLess.textContent = "Submit";

let maintainE1More = document.createElement('div');
maintainE1More.classList.add("programless")

let operations22More = document.createElement('button');
operations22More.classList.add("Addless")
operations22More.id="word"
operations22More.textContent="Word counter"


let operations33More = document.createElement('button');
operations33More.classList.add("Addless")
operations33More.id="palindrome"
operations33More.textContent="Palindrome"

let submitBtn1More = document.createElement('button');
submitBtn1More.classList.add("submit-btn");
submitBtn1More.id="love"
submitBtn1More.textContent = "Reset";

// maintainE1More.style="display:none"
operations22More.style="display:none";
operations33More.style="display:none";
submitBtn1More.style="display:none";

submitBtnLess.onclick=function(){

  let passKey = document.getElementById('userGiven')
  let passValueKey = passKey.value;
  let messageErrorKey = document.getElementById('messageErrorOne')
  let messageDisplayKey = document.getElementById('messageErrorLess')
  if(passValueKey==""){
      messageErrorKey.textContent="Invalid ! Enter a String "
      messageErrorKey.style.fontWeight="725";
      messageErrorKey.style.marginTop="10px"
  }
  else if(Number(passValueKey)){

      messageErrorKey.textContent=`Entered number ${passValueKey} ! enter string`
      messageErrorKey.style.fontWeight="725";
      messageErrorKey.style.marginTop="10px"
  }
  else if(String(passValueKey)){
    messageErrorKey.textContent=""
      var stringArray = passValueKey.split('');

      // var numberArray = stringArray.map(function(str) {
      //   var trimmedStr = str;
      //   return trimmedStr ? String(trimmedStr) : true // here remove NaN for including space as Nan !
      // });

      // var validNumbers = stringArray.filter(function(num) {
      //   return isNaN(num);// we haveto remove ! in this position to get strings
      // });
     
      if((String(stringArray))){
        messageDisplayKey.textContent="Collected Strings : "+ stringArray.join("");
        messageDisplayKey.classList.add("green")
      }
      // maintain.style="display:block"
      // maintain.style="display:flex";
      // maintain.style="gap:45px";
      // maintainE1More.style="display:block"
      operations22More.style="display:block";
      operations33More.style="display:block";
      let percen = document.getElementById('word')
      percen.addEventListener("click" ,function()
      {
        let sum = stringArray;
        let mich = sum.join('')
        // console.log(mich)
        // let end = mich.trimEnd()
        // console.log(end)
        let micha = mich.trim();
        let end = micha.split(' ');
        console.log(micha)
        console.log(end.length)
        messageDisplayKey.textContent=`Total number of words : ${end.length}`;
        // console.log(end.length)
        
  
      });

      let palindrome = document.getElementById('palindrome');
      palindrome.onclick=function(){
        submitBtn1More.style="display:block";

        let sum = stringArray;
        let mich = sum.join(''); // this join is taken bcz split will not work !
        let splitten = mich.split('');
        // console.log(splitten)
        let str1 = String(splitten);// here only we have to assign because if we take after 2-3 lines after reverse its store in normal or reverse only ! 
        let rev = splitten.reverse();
        console.log(rev)
        
        let str2 = String(rev);
        console.log(str1)
        console.log(str2)
        // for(i in str1){
        //   for(j in str2){
        if(str1===str2){
          // console.log("pali")
        messageDisplayKey.textContent=` ${sum.join("")} its a palindrome`;
        }
        else{
        messageDisplayKey.textContent=` ${sum} its not a palindrome`;

        }

      }
      let Result1 = document.getElementById('love');
      Result1.onclick=function(){
        maintainE1More.style="display:none"
        operations22More.style="display:none";
        operations33More.style="display:none";
        submitBtn1More.style="display:none";
        passKey.value="";
        messageErrorKey.textContent=""
        messageDisplayKey.textContent=""
      }
        passKey.value=""
    }
}

otherLess.append(paraE1Less,submitBtnLess)
maintainE1More.append(operations22More,operations33More)
mainOne.append(inputE1One,paraOne,otherLess,maintainE1More,submitBtn1More)
secondE1.append(mainOne)
document.body.append(secondE1)




// Task 4: Palindrome Checker

