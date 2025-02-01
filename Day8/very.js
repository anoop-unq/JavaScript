const number = document.getElementById("num");
const result = document.getElementById("result");

function more(){
    let numless = number.value;
    if(numless==="")
        {
        result.textContent="Please enter a number";

    }
    else if(numless==="1"){
        result.textContent="Square operation selected";
        result.classList.add("text-me");
       
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        let numberone = document.createElement('label');
        numberone.textContent="Enter a number";
        numberone.classList.add('label');

        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "inputNumber1";
        
        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-1");
        twoMan.textContent = "Action"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);

        let reset = document.createElement('button');
        reset.classList.add("btn-1");
        reset.textContent = "Reset"
        reset.id = "comparisonRest";
        result.appendChild(reset);
        // 
        comparisonResult.onclick = function()
        {
            // let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            // let displayResult1 = document.getElementById('displayResultItem');
            let inputNumber111 = document.getElementById('inputNumber1');
           
            let inputuserValue1 = inputNumber111.value;
               
    
               
            //    let displayResult00 = displayResult0.value;
            let displayResult0 = document.getElementById('displayResult');

               if(inputuserValue1 ==="")
                 {
           
                displayResult0.textContent = "Please enter a number"

               }
            else if(Number(inputuserValue1)){
                let multi = inputuserValue1*inputuserValue1;
                displayResult0.textContent=multi;
            }
               
                else
                    {
                    let resultTwo = document.createElement('h6');
                    resultTwo.textContent = "String selected";
                    resultTwo.classList.add("result-two");
                    displayResult0.textContent ="";
                    displayText.appendChild(headOne);
                    displayText.appendChild(resultTwo);
                }

     
               inputNumber111.value="";
               
           
            }
            comparisonRest.onclick=function(){
              more();
              // displayResult0.textContent="";
              result.textContent="Click the button for an action !";
              result.classList.add("greenColor");
             }
          number.value="";
        
        }
    else if(numless==="2"){
            result.textContent="Average operation selected";
            result.classList.add("text-me");
           
            let oneMan = document.createElement('div');
            oneMan.classList.add("input-element-1");
            oneMan.id = "star";
    
            let numberone = document.createElement('label');
            numberone.textContent="Enter a number";
            numberone.classList.add('label');
    
            let inputElement = document.createElement('input');
            inputElement.type = "text";
            inputElement.placeholder="Enter numbers seperated by comma ,";
            inputElement.classList.add("compare-limit");
            inputElement.id = "inputNumber1";
            
            oneMan.appendChild(numberone);
            oneMan.appendChild(inputElement);
            result.appendChild(oneMan);

           
            
            let twoMan = document.createElement('button');
            twoMan.classList.add("button-1");
            twoMan.textContent = "Action"
            twoMan.id = "comparisonResult";
            result.appendChild(twoMan);
    
            let displayText = document.createElement('h4');
            displayText.id="displayResult";
            result.appendChild(displayText);
            
            let displayText1 = document.createElement('h4');
            displayText1.id="displayResultItem";
            result.appendChild(displayText1);

            let blueMan = document.createElement('div');
            blueMan.classList.add("input-element-1");
            blueMan.id = "star";
            result.appendChild(blueMan);
            // 
            comparisonResult.onclick = function()
            {
                // let userSelection00 = document.getElementById('userSelection');
                // let userSelection000 = userSelection00.value;
                // let displayResult1 = document.getElementById('displayResultItem');
                let inputNumber111 = document.getElementById('inputNumber1');
               
                let inputuserValue1 = inputNumber111.value;
                   
        
                   
                //    let displayResult00 = displayResult0.value;
                let displayResult0 = document.getElementById('displayResult');
                let displayResult111 = document.getElementById('displayResultItem');
    
                   if(inputuserValue1 ==="")
                     {
               
                    displayResult0.textContent = "Please enter a number"
    
                   }
             else{
                    var stringArray = inputuserValue1.split(',');

                    // Convert the substrings to numbers
                    var numberArray = stringArray.map(function(str) {
                      var trimmedStr = str.trim();
                      return trimmedStr ? Number(trimmedStr) : NaN;
                    });
              
                    // Filter out any NaN values resulting from invalid inputs
                    var validNumbers = numberArray.filter(function(num) {
                      return !isNaN(num);
                    });
                   
                    if(!(String(validNumbers))){
                     displayResult0.textContent = 'Entered Characters :' + stringArray.join(', ');
                      displayResult0.classList.add("red-color");
                      console.log('Collected numbers:', validNumbers);
                      displayResult111.textContent="Enter Numbers only";
                      displayResult111.classList.add("head-00");
                      result.appendChild(displayResult111);
                      // let hello = document.createElement('h5');
                      // hello.classList.add("head-00");
                      // hello.textContent="Enter Numbers only Try Again !";
                      // result.appendChild(hello);
                    //   let displayResult728596 = document.createElement('h5');
                    //   displayResult728596.textContent="Enter Numbers only Try Again !";
                    // //   displayResult111.classList.add("head-00");
                    //   displayResult728596.classList.add("head-00");
                    // //   displayResult111.appendChild(displayResult728596);
                    // //   result.appendChild(displayResult111);
                   
                    }
                    else{
                     blueMan.innerHTML=""; // blueman used for not to repeat the buttons more time its helpfull
                     
                    // Display the resulting array
                    displayResult111.textContent="";
                    displayResult111.classList.remove("head-00");
                    result.appendChild(displayResult111);
                    displayResult0.textContent = 'Collected numbers: ' + validNumbers.join(', ');
                    displayResult0.classList.add("green-color");
                        
                    console.log('Collected numbers:', validNumbers);
              
                    
                    
                   
                    // let breakE3 = document.createElement('br');
                    // result.appendChild(breakE3);
                    
                    let accessValue = document.createElement('p');
                    accessValue.id="Result";  
                    // accessValue=validNumbers.value;
                    // accessValue.textContent=validNumbers;
                    console.log(accessValue);
              
                    let whiteMan = document.createElement('button');
                    whiteMan.classList.add("btn");
                    whiteMan.textContent = "Sum";
                    whiteMan.id = "comparisonSum";
                    
                    let displayResult7285 = document.createElement('h5');
                    displayResult7285.classList.add("head-00");
                    
                    let avgMan = document.createElement('button');
                    avgMan.classList.add("btn-1");
                    avgMan.textContent = "Average";
                    avgMan.id = "comparisonAvg";


                    let displayResult6302 = document.createElement('h5');
                    displayResult6302.classList.add("head-00");


                    let reset = document.createElement('button');
                    reset.classList.add("button-1");
                    reset.textContent = "Reset";
                    reset.id = "comparisonReset";
                    blueMan.appendChild(reset);

                    blueMan.appendChild(accessValue);
                    blueMan.appendChild(whiteMan);
                    blueMan.appendChild(displayResult7285);
                    blueMan.appendChild(avgMan);
                    blueMan.appendChild(displayResult6302);
                    blueMan.appendChild(reset);
                 
                    // result.appendChild(blueMan);
                   
                    const total = validNumbers.reduce((sum, validNumbers) => sum + validNumbers, 0);
                    let avg = total/validNumbers.length;


                    comparisonSum.onclick=function(){
                    
                      displayResult7285.textContent="Total Sum : "+total;          
                    }
                    comparisonAvg.onclick=function(){
                      displayResult6302.textContent="Average : "+avg;
                    }
                    comparisonReset.onclick=function() {
                      more();
                      displayResult0.textContent="";
                      result.textContent="Click the button for an action !";
                      result.classList.add("greenColor");
                    }
              
                }
                inputNumber111.value="";
            }
          
                    // else
                    //     {
                    //     let resultTwo = document.createElement('h6');
                    //     resultTwo.textContent = "String selected";
                    //     resultTwo.classList.add("result-two");
                    //     displayResult0.textContent ="";
                    //     // displayText.appendChild(headOne);
                    //     // displayText.appendChild(resultTwo);
                    // }
                  
                }
              number.value="";
            
        }
    else if(numless==="3"){
          result.textContent="Vowel operation selected";
          result.classList.add("text-me");
         
          let oneMan = document.createElement('div');
          oneMan.classList.add("input-element-1");
          oneMan.id = "star";
  
          let numberone = document.createElement('label');
          numberone.textContent="Enter String";
          numberone.classList.add('label');
  
          let inputElement = document.createElement('input');
          inputElement.type = "text";
          inputElement.classList.add("compare-limit");
          inputElement.placeholder="Enter string";
          inputElement.id = "inputNumber1";
          
          oneMan.appendChild(numberone);
          oneMan.appendChild(inputElement);
          result.appendChild(oneMan);

         
          
          let twoMan = document.createElement('button');
          twoMan.classList.add("button-1");
          twoMan.textContent = "Action"
          twoMan.id = "comparisonResult";
          result.appendChild(twoMan);
  
          let displayText = document.createElement('h4');
          displayText.id="displayResult";
          result.appendChild(displayText);
          
          let displayText1 = document.createElement('h4');
          displayText1.id="displayResultItem";
          result.appendChild(displayText1);

          let blueMan = document.createElement('div');
          blueMan.classList.add("input-element-1");
          blueMan.id = "star";
          result.appendChild(blueMan);
          // 
          comparisonResult.onclick = function()
          {
              // let userSelection00 = document.getElementById('userSelection');
              // let userSelection000 = userSelection00.value;
              // let displayResult1 = document.getElementById('displayResultItem');
              let inputNumber111 = document.getElementById('inputNumber1');
             
              let inputuserValue1 = inputNumber111.value;
                 
      
                 
              //    let displayResult00 = displayResult0.value;
              let displayResult0 = document.getElementById('displayResult');
              let displayResult111 = document.getElementById('displayResultItem');
  
                 if(inputuserValue1 ==="")
                   {
             
                  displayResult0.textContent = "Please enter a string"
  
                 }
           else{
                  var stringArray = inputuserValue1.split('');

                  // Convert the substrings to numbers
                  var numberArray = stringArray.map(function(str) {
                    var trimmedStr = str.trim();
                    return trimmedStr ? String(trimmedStr) : NaN;
                  });
            
                  // Filter out any NaN values resulting from invalid inputs
                  var validNumbers = numberArray.filter(function(num) {
                    return !isNaN(num);
                  });
                 
                  if((String(validNumbers))){
                   displayResult0.textContent = 'Entered Numbers :' + stringArray.join(' ');
                    displayResult0.classList.add("red-color");
                    console.log('Collected numbers:', validNumbers);
                    displayResult111.textContent="Enter string only";
                    displayResult111.classList.add("head-00");
                    result.appendChild(displayResult111);
                    // let hello = document.createElement('h5');
                    // hello.classList.add("head-00");
                    // hello.textContent="Enter Numbers only Try Again !";
                    // result.appendChild(hello);
                  //   let displayResult728596 = document.createElement('h5');
                  //   displayResult728596.textContent="Enter Numbers only Try Again !";
                  // //   displayResult111.classList.add("head-00");
                  //   displayResult728596.classList.add("head-00");
                  // //   displayResult111.appendChild(displayResult728596);
                  // //   result.appendChild(displayResult111);
                 
                  }
                  else{
                   blueMan.innerHTML=""; // blueman used for not to repeat the buttons more time its helpfull
                   
                  // Display the resulting array
                  displayResult111.textContent="";
                  displayResult111.classList.remove("head-00");
                  result.appendChild(displayResult111);
                  displayResult0.textContent = 'Collected String: ' + stringArray.join('');
                  displayResult0.classList.add("green-color");
                      
                  console.log('Collected numbers:', validNumbers);
            
                  
                  
                 
                  // let breakE3 = document.createElement('br');
                  // result.appendChild(breakE3);
                  
                 
                  let whiteMan = document.createElement('button');
                  whiteMan.classList.add("btn");
                  whiteMan.textContent = "Result";
                  whiteMan.id = "comparisonSum";
                  
                  let displayResult7285 = document.createElement('h5');
                  displayResult7285.classList.add("head-00");
                  
                  // let avgMan = document.createElement('button');
                  // avgMan.classList.add("button-1");
                  // avgMan.textContent = "Average";
                  // avgMan.id = "comparisonAvg";


                  // let displayResult6302 = document.createElement('h5');
                  // displayResult6302.classList.add("head-00");


                  let reset = document.createElement('button');
                  reset.classList.add("btn-1");
                  reset.textContent = "Reset";
                  reset.id = "comparisonReset";
                  // blueMan.appendChild(reset);

                  // blueMan.appendChild(accessValue);
                  blueMan.appendChild(whiteMan);
                  blueMan.appendChild(displayResult7285);
                  // blueMan.appendChild(avgMan);
                  // blueMan.appendChild(displayResult6302);
                  blueMan.appendChild(reset);
               
                  // result.appendChild(blueMan);
                 
                  // const total = validNumbers.reduce((sum, validNumbers) => sum + validNumbers, 0);
                  // let avg = total/validNumbers.length;


                  comparisonSum.onclick=function(){
                    console.log("sdfh")
                    // let a = [];
                     a =  stringArray;
                   
               // from the source of Kallpaannmmm !  
    let vowels = "aeiouAEIOU";
    let foundVowels = [];
    
    for (let char of a) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }
    
    if (foundVowels.length > 0) {
        displayResult7285.textContent = `The string has ${foundVowels.length} vowels: ${foundVowels.join(', ')}`;
    } else {
        displayResult7285.textContent = "The string does not contain vowels.";
    }
    // from the source of kalpaaannnn !
                   

                    // displayResult7285.textContent="Total Sum : "+total;          
                  }
                  // comparisonAvg.onclick=function(){
                  //   displayResult6302.textContent="Average : "+avg;
                  // }
                  comparisonReset.onclick=function() {
                    more();
                    result.textContent="Click the button for an action !";
                    result.classList.add("greenColor");
                  }
            
              }
              inputNumber111.value="";
          }
        
                  // else
                  //     {
                  //     let resultTwo = document.createElement('h6');
                  //     resultTwo.textContent = "String selected";
                  //     resultTwo.classList.add("result-two");
                  //     displayResult0.textContent ="";
                  //     // displayText.appendChild(headOne);
                  //     // displayText.appendChild(resultTwo);
                  // }
                
              }
            number.value="";
          
      }
      else if(numless==="4"){
        result.textContent="Temperature operation selected";
        result.classList.add("text-me");
       
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        let numberone = document.createElement('label');
        numberone.textContent="Enter a number";
        numberone.classList.add('label');

        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-limit");
        inputElement.placeholder="Enter temperature";
        inputElement.id = "inputNumber1";
        
        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("btn");
        twoMan.textContent = "Action"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);

        let radio = document.createElement('div');
        radio.classList.add("input-element-111");
        radio.id = "radioSolve";
        result.appendChild(radio);

        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);

        let displayText22 = document.createElement('h4');
        displayText22.id="displayResultText";
        result.appendChild(displayText22);

        let heroMan = document.createElement('button');
        heroMan.classList.add("btn-1");
        heroMan.textContent = "Reset"
        heroMan.id = "comparisonReset";
        result.appendChild(heroMan);
        // 
        comparisonResult.onclick = function()
        {   
            
            // let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            let displayResult1 = document.getElementById('displayResultItem');
            let inputNumber111 = document.getElementById('inputNumber1');
           
            let inputuserValue1 = inputNumber111.value;
               

               
            //    let displayResult00 = displayResult0.value;
            let displayResult0 = document.getElementById('displayResult');
            let radioProven = document.getElementById('radioSolve');
            let displayResultTextSpeech = document.getElementById('displayResultText');
            
               if(inputuserValue1 ==="")
                 {
           
                displayResult0.textContent = "Please enter a number";
                
               }
            else if(Number(inputuserValue1)){
              displayResult0.textContent="";
                radio.innerHTML="";
                displayText1.innerHTML="";
                // let multi = inputuserValue1*inputuserValue1;
                // displayResult0.textContent=multi;

                let radioHi = document.createElement('div');
                radioHi.classList.add("input-element-anoop");
                radioHi.id = "radioHi";
                // result.appendChild(radio);

                let radioBtn = document.createElement('input');
                radioBtn.type="radio"
                // radioBtn.textContent="celscious";
                radioBtn.value="Celsicious";
                radioBtn.name="operation";
                radioBtn.id="calsiciousTemp"
                radioBtn.classList.add("input-zero")
                radioHi.appendChild(radioBtn);

                let numberone = document.createElement('label');
                numberone.textContent="Celsicious";
                numberone.classList.add('label');
                radioHi.appendChild(numberone);

                

                let radioBtn1 = document.createElement('input');
                radioBtn1.type="radio"
                // radioBtn.textContent="celscious";
                radioBtn1.value="Celsicious";
                radioBtn1.name="operation";
                radioBtn1.id="fahrenheitTemp";
                radioBtn1.classList.add("input-zero")
                radioHi.appendChild(radioBtn1);

                let numberone1 = document.createElement('label');
                numberone1.textContent="Fahrenheit";
                numberone1.classList.add('label');
                radioHi.appendChild(numberone1);


                radioProven.appendChild(radioHi);

                let radioHey = document.createElement('div');
                radioHey.classList.add("input-element-anoop");
                radioHey.id = "radioHey";

                let heroMan = document.createElement('button');
                heroMan.classList.add("button-1");
                heroMan.textContent = "Check"
                heroMan.id = "comparisonRadio";
                radioHey.appendChild(heroMan);
                displayResult1.appendChild(radioHey);

                
                comparisonRadio.onclick=function(){
                  
                  if(calsiciousTemp.checked===true){
                    // formula for celscious (temp - 32) * 5/9
                    let temp = (inputuserValue1 - 32) * 5/9;
                    displayResultTextSpeech.textContent=temp+"C";
                  }
                  else if(fahrenheitTemp.checked===true){
                    // (temp * 9/5) + 32
                    let meet = (inputuserValue1 * 9/5) + 32;
                    displayResultTextSpeech.textContent=meet+"F";
                  }
                  else{
                    displayResultTextSpeech.textContent="Not selected radio buttons !";
                  }
               }
                // radioProven.appendChild(numberone);
                // // radioProven.appendChild(breakE55);
                // radioProven.appendChild(radioBtn1);
                // radioProven.appendChild(numberone1);
                // let labelRadio = document.createElement('input');
                // labelRadio.
            }
               
                else
                    {
                    let resultTwo = document.createElement('h6');
                    resultTwo.textContent = "String selected";
                    resultTwo.classList.add("result-two");
                    displayResult0.textContent ="";
                    displayText.appendChild(headOne);
                    displayText.appendChild(resultTwo);
                }
               
     
               inputNumber111.value="";
               
           
            }
            comparisonReset.onclick=function(){
              more();
            }
          number.value="";
        
        }
        else if(numless>=5){
          result.textContent="please select up to 1-4 numbers only !";
          number.value="";
        }
       
        else if(numless<0){
          result.textContent="Negative Numbers Entered !";
          number.value="";

        }
        else if(numless==="0"){
          result.textContent="Entered Zero !";
          number.value="";

        }
        else{
          result.textContent="Invalid";
          number.value="";

        }
    }