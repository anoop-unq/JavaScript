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
        // messageError.textContent=`Enter`
        // messageError.style.fontWeight="725";
        // let seperate = passValue.split(0-9);
        // let check = [];
        // check = Number[seperate];
        // console.log(check)
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

// Task 3: take prompt and Reverse a String
// hints: use split and reverse and join method
// Task 4: take prompt and Count the number of vowels in a string--
// hints use match method
