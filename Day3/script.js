const number = document.getElementById("num");
const result = document.getElementById("result");

function more(){
    let numless = number.value;
    if(numless==="")
        {
        result.textContent="Please enter a number";
    }
    else if(numless==="1"){
        result.textContent="Comparison Operator";
        result.classList.add("text-me");
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        let numberone = document.createElement('label');
        numberone.textContent="Enter first number";
        numberone.classList.add('label');
        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "inputNumber1";
        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);
        let numberTwo = document.createElement('label');
        numberTwo.textContent="Enter second number";
        numberTwo.classList.add('label');
        let inputElement1 = document.createElement('input');
        inputElement1.type = "number";
        inputElement1.classList.add("compare-class");
        inputElement1.id = "inputNumber2";
        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        oneMan.appendChild(numberTwo);
        oneMan.appendChild(inputElement1);
        result.appendChild(oneMan);

        let zeroMan = document.createElement('div');
        zeroMan.classList.add("zero-level");
        zeroMan.id = "zeroStar";
        let sigmaMan = document.createElement('div');
        sigmaMan.classList.add("input-element-1");
        let headZero = document.createElement('h3');
        headZero.textContent = "Enter a number between (1-6) !"
        headZero.classList.add("head-00");

        let userInput = document.createElement('input');
        userInput.classList.add('compare-class');
        userInput.type = "number";
        userInput.id = "userSelection";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
       

        itemList.textContent = "== Operator";
        itemList1.textContent = ">/< Operator";
        itemList2.textContent = ">= /<=Operator";
        itemList3.textContent = "!= Operator";
       
        // zeroMan.appendChild(headZero);
        // zeroMan.appendChild(userInput);
        sigmaMan.appendChild(headZero);
        sigmaMan.appendChild(userInput);
        zeroMan.appendChild(sigmaMan);

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);
       

        zeroMan.appendChild(selectOperator);
        result.append(zeroMan);
        
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
        
        comparisonResult.onclick = function()
        {
            let userSelection00 = document.getElementById('userSelection');
            let userSelection000 = userSelection00.value;
            let inputNumber111 = document.getElementById('inputNumber1');
            let inputNumber222 = document.getElementById('inputNumber2');
            let inputuserValue1 = inputNumber111.value;
            let inputuserValue2 = inputNumber222.value;

           
        //    let displayResult00 = displayResult0.value;
        let displayResult0 = document.getElementById('displayResult');
        let displayResult1 = document.getElementById('displayResultItem');
           
           if(userSelection000 === ""){
            displayResult0.textContent = "Choose an operator to Enter !"
            displayResult0.classList.add("head-44");
           }
           else if(userSelection000 === "1"){
            // displayResult0.textContent = "Please Ente000r !"

           
               if(inputuserValue1 ===""  && inputuserValue2==="")
                 {
           
                displayResult0.textContent = "Please Enter the above two numbers to perform an operator"

               }
            
                else if(inputuserValue1 == inputuserValue2) {
                    //     console.log("sdffs");

                   
                    // displayResult1.textContent = "hbhbh";


                    let secondE1 = document.createElement('div');
                    secondE1.classList.add("secondSection");

                    let headOne = document.createElement('h3');
                    headOne.textContent = "Double Operator Selected !";
                    headOne.classList.add("head-00");

                    let resultOne = document.createElement('h6');
                    resultOne.textContent =  inputuserValue1 + " is Equal to " + inputuserValue2;
                    resultOne.classList.add("result-one");
                    displayResult0.textContent ="";
                    // console.log(inputuserValue1);
                    secondE1.appendChild(headOne);
                    secondE1.appendChild(resultOne);
                    displayText.appendChild(secondE1);
                    result.appendChild(displayText);
                    // result.appendChild(secondE1);
                                       
               
                }
                else{
                    let headOne = document.createElement('h3');
                    headOne.textContent = "Double Operator Selected !";
                    headOne.classList.add("head-00");

                    let resultTwo = document.createElement('h6');
                    resultTwo.textContent = inputuserValue1 + " is not equal to " + inputuserValue2;
                    resultTwo.classList.add("result-two");
                    displayResult0.textContent ="";
                    displayText.appendChild(headOne);
                    displayText.appendChild(resultTwo);
                    // result.removeChild(displayText);
                // secondE1.appendChild(headOne);
                // secondE1.appendChild(resultOne);
                // displayText.appendChild(secondE1);
                // result.appendChild(displayText);
                }

                userSelection00.value="";
                inputNumber111.value="";
                inputNumber222.value="";
           }
           else if(userSelection000 === "2"){
            if(inputuserValue1 ===""  && inputuserValue2==="")
                {
          
               displayResult0.textContent = "Please Enter the above two numbers to perform an operator"

              }
              else if(inputuserValue1 > inputuserValue2) {
                //     console.log("sdffs");

               
                // displayResult1.textContent = "hbhbh";


                let secondE1 = document.createElement('div');
                secondE1.classList.add("secondSection");

                let headOne = document.createElement('h3');
                headOne.textContent = "Greater / Lesser Operator Selected !";
                headOne.classList.add("head-00");

                let resultOne = document.createElement('h6');
                resultOne.textContent =  inputuserValue1 + " is Greater than " + inputuserValue2;
                resultOne.classList.add("result-one");
                displayResult0.textContent ="";
                // console.log(inputuserValue1);
                secondE1.appendChild(headOne);
                secondE1.appendChild(resultOne);
                displayText.appendChild(secondE1); // This code for single time button Action (Button).
                result.appendChild(displayText); // This code for single time button Action (Button).
                // result.appendChild(secondE1); 
                                   
           
            }
            else{
                let headOne = document.createElement('h3');
                headOne.textContent = "Greater / Lesser Operator Selected !";
                headOne.classList.add("head-00");

                let resultTwo = document.createElement('h6');
                resultTwo.textContent = inputuserValue1 + " is Less than " + inputuserValue2;
                resultTwo.classList.add("result-two");
                displayResult0.textContent ="";
                displayText.appendChild(headOne);
                displayText.appendChild(resultTwo);
                // result.removeChild(displayText);
            // secondE1.appendChild(headOne);
            // secondE1.appendChild(resultOne);
            // displayText.appendChild(secondE1);
            // result.appendChild(displayText);
            }
            userSelection00.value="";
            inputNumber111.value="";
            inputNumber222.value="";
           }  
           else if(userSelection000 === "3"){
            if(inputuserValue1 ===""  && inputuserValue2==="")
                {
          
               displayResult0.textContent = "Please Enter the above two numbers to perform an operator"

              }
              else if(inputuserValue1 > inputuserValue2) {
                //     console.log("sdffs");

               
                // displayResult1.textContent = "hbhbh";


                let secondE1 = document.createElement('div');
                secondE1.classList.add("secondSection");

                let headOne = document.createElement('h3');
                headOne.textContent = ">= /<= Operator Selected !";
                headOne.classList.add("head-00");

                let resultOne = document.createElement('h6');
                resultOne.textContent =  inputuserValue1 + " is Greater than (or) equal to" + inputuserValue2;
                resultOne.classList.add("result-one");
                displayResult0.textContent ="";
                // console.log(inputuserValue1);
                secondE1.appendChild(headOne);
                secondE1.appendChild(resultOne);
                displayText.appendChild(secondE1);
                result.appendChild(displayText);
                // result.appendChild(secondE1);
                                   
           
            }
            else{
                let headOne = document.createElement('h3');
                headOne.textContent = ">= /<= Operator Selected !";
                headOne.classList.add("head-00");

                let resultTwo = document.createElement('h6');
                resultTwo.textContent = inputuserValue1 + " is Less than (or) equal to" + inputuserValue2;
                resultTwo.classList.add("result-two");
                displayResult0.textContent ="";
                displayText.appendChild(headOne);
                displayText.appendChild(resultTwo);
                // result.removeChild(displayText);
            // secondE1.appendChild(headOne);
            // secondE1.appendChild(resultOne);
            // displayText.appendChild(secondE1);
            // result.appendChild(displayText);
            }
            userSelection00.value="";
            inputNumber111.value="";
            inputNumber222.value="";
           }  
           else if(userSelection000 === "4"){
            if(inputuserValue1 ===""  && inputuserValue2==="")
                {
          
               displayResult0.textContent = "Please Enter the above two numbers to perform an operator"

              }
              else if(inputuserValue1 != inputuserValue2) {
                //     console.log("sdffs");

               
                // displayResult1.textContent = "hbhbh";


                let secondE1 = document.createElement('div');
                secondE1.classList.add("secondSection");

                let headOne = document.createElement('h3');
                headOne.textContent = "Not equal Operator Selected !";
                headOne.classList.add("head-00");

                let resultOne = document.createElement('h6');
                resultOne.textContent =  inputuserValue1 + " is not equal to " + inputuserValue2;
                resultOne.classList.add("result-two");
                displayResult0.textContent ="";
                // console.log(inputuserValue1);
                secondE1.appendChild(headOne);
                secondE1.appendChild(resultOne);
                displayText.appendChild(secondE1);
                result.appendChild(displayText);
                // result.appendChild(secondE1);
                                   
           
            }
            else{
                let headOne = document.createElement('h3');
                headOne.textContent = "Not equal Operator Selected !";
                headOne.classList.add("head-00");

                let resultTwo = document.createElement('h6');
                resultTwo.textContent = inputuserValue1 + " is equal to" + inputuserValue2;
                resultTwo.classList.add("result-one");
                displayResult0.textContent ="";
                displayText.appendChild(headOne);
                displayText.appendChild(resultTwo);
                // result.removeChild(displayText);
            // secondE1.appendChild(headOne);
            // secondE1.appendChild(resultOne);
            // displayText.appendChild(secondE1);
            // result.appendChild(displayText);
            }
            userSelection00.value="";
            inputNumber111.value="";
            inputNumber222.value="";
           }
           else{
                displayResult0.textContent = "Wrong Number Entered ! Enter number from the above operators only !";
                displayResult0.classList.add("head-444");
           } 
        }

       

      
    }
    else if(numless==="2"){
       
            result.textContent="ELigible to vote";
            let breakEl = document.createElement('br');
            result.appendChild(breakEl);
            // let breakE2 = document.createElement('br');
            // result.appendChild(breakE2);
            let oneMan = document.createElement('div');
            oneMan.classList.add("input-element-1");
            oneMan.id = "star";
            let numberone = document.createElement('label');
            numberone.textContent="Enter your age !";
            numberone.classList.add('label');
            let inputElement = document.createElement('input');
            inputElement.type = "number";
            inputElement.classList.add("compare-class");
            inputElement.id = "age";

            let breakE3 = document.createElement('br');
            result.appendChild(breakE3);

            oneMan.appendChild(numberone);
            oneMan.appendChild(inputElement);
            result.appendChild(oneMan);

            let twoMan = document.createElement('button');
            twoMan.classList.add("button-1");
            twoMan.textContent = "Check";
            twoMan.id = "comparisonResults";
            result.appendChild(twoMan);


            let displayText = document.createElement('h4');
            displayText.id="displayResult";
            result.appendChild(displayText);

            comparisonResults.onclick = function()
            {
                let userSelection00 = document.getElementById('userSelection');
                // let userSelection000 = userSelection00.value;
                let ageless = document.getElementById('age');
                let agee = ageless.value;

                let displayResult0 = document.getElementById('displayResult');
                if(agee === ""){
                    displayResult0.textContent = "Please Enter Age !"
                    displayResult0.classList.add("head-44");
                   }
                else if(agee>=18 && agee<=125){
                    displayResult0.textContent = "Candidate is Eligible to vote";
                    displayResult0.classList.add("result-one");
                }
                else if(agee>=126){
                    displayResult0.textContent = "Too Old You Cant' Live !";
                    displayResult0.classList.add("result-two");
                }
                else{
                    displayResult0.textContent = "Candidate is not Eligible to vote";
                    displayResult0.classList.add("result-two");
                }
            ageless.value="";

    }
    }
    else if(numless === "3"){
       
        result.textContent="Check the grade";
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        let numberone = document.createElement('label');
        numberone.textContent="Enter your Percentage (%)";
        numberone.classList.add('label');
        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "age";

        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);

        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-1");
        twoMan.textContent = "Check";
        twoMan.id = "comparisonResults";
        result.appendChild(twoMan);


        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);

        comparisonResults.onclick = function()
        {
            let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            let ageless = document.getElementById('age');
            let agee = ageless.value;

            let displayResult0 = document.getElementById('displayResult');
            if(agee === ""){
                displayResult0.textContent = "Please Enter Your Percentage!"
                displayResult0.classList.add("head-44");
               }
            else if(agee<=100 && agee>=75){
                displayResult0.textContent = "Passed out with A grade !";
                displayResult0.classList.add("result-one");
            }
            else if(agee<=75 && agee>=55){
                displayResult0.textContent = "Passed out with B grade !";
                displayResult0.classList.add("result-one");
            }
            else if(agee<=55 && agee>=25){
                displayResult0.textContent = "Passed out with C grade !";
                displayResult0.classList.add("result-one");
            }
            else if(agee>=101)
            {
                displayResult0.textContent = "Your Percentage : " + agee +" is more than 100 !";
                let observe = document.createElement('h5');
                observe.classList.add("add-code");
                observe.textContent="Enter correct !";
                displayText.appendChild(observe);
                displayResult0.classList.add("result-two");
            }
            else{
                displayResult0.textContent = "Failed";
                displayResult0.classList.add("result-two");

                let observe = document.createElement('h5');
                observe.classList.add("add-code");
                observe.textContent="Not a Problem it's Exam not a life win in your life !";
                displayText.appendChild(observe);
            }
            ageless.value="";
}
    }
    else if(numless === "4"){
       
        result.textContent="Check the temperature";
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        let numberone = document.createElement('label');
        numberone.textContent="Enter your climate temperature ";
        numberone.classList.add('label');
        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "age";

        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);

        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-1");
        twoMan.textContent = "Check";
        twoMan.id = "comparisonResults";
        result.appendChild(twoMan);


        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);

        comparisonResults.onclick = function()
        {
            let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            let ageless = document.getElementById('age');
            let agee = ageless.value;

            let displayResult0 = document.getElementById('displayResult');
            if(agee === ""){
                displayResult0.textContent = "Please Enter Your Temperature!"
                displayResult0.classList.add("head-44");
               }
            else if(agee<=59 && agee>=37){
                displayResult0.textContent = "Too Hot !";
                displayResult0.style.color="red";
                displayResult0.classList.add("result-two");
            }
            else if(agee>=26 && agee<=36){
                displayResult0.textContent = "Normal Temperature";
                displayResult0.style.color="rgb(117, 117, 118)";
                displayResult0.classList.add("result-normal");
            }
            else if(agee>=10 && agee<=25){
                displayResult0.textContent = "Cool";
                displayResult0.style.color="blue";
                displayResult0.classList.add("result-blue");
            }
            else if(agee>=0 && agee<=9){
                displayResult0.textContent = "Extreme Cool";
                displayResult0.style.color="blue";
                displayResult0.classList.add("result-blue");
            }
            else if(agee>=60)
            {
                displayResult0.textContent = "Your Temperature : " + agee +" is more than 60 !";
                let observe = document.createElement('h5');
                displayResult0.style.color="red";
                observe.classList.add("add-code");
                observe.textContent="You can't live !";
                displayText.appendChild(observe);
                displayResult0.classList.add("result-two");
            }
            else{
                displayResult0.textContent = "Your Temperature : " + agee +" is less than 0 !";
                displayResult0.classList.add("result-two");
                displayResult0.style.color="blue";
                let observe = document.createElement('h5');
                observe.classList.add("add-code");
                observe.textContent="Its Extreme Cold How You are Surviving !";
                displayText.appendChild(observe);
            }
            ageless.value="";
    }
    }
    else if(numless === "5"){
       
        result.textContent="Check the temperature";
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        let numberone = document.createElement('label');
        numberone.textContent="Enter age :";
        numberone.classList.add('label');
        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "age";

        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);

        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-1");
        twoMan.textContent = "Check";
        twoMan.id = "comparisonResults";
        result.appendChild(twoMan);


        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);

        comparisonResults.onclick = function()
        {
            let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            let ageless = document.getElementById('age');
            let agee = ageless.value;

            let displayResult0 = document.getElementById('displayResult');
            if(agee === ""){
                displayResult0.textContent = "Please Enter Your Temperature!"
                displayResult0.classList.add("head-44");
               }
            else if(agee<=125 && agee>=51){
                displayResult0.textContent = "Old Adult";
                displayResult0.style.color="red";
                displayResult0.classList.add("result-two");
            }
            else if(agee<=50 && agee>=26){
                displayResult0.textContent = "Regular Adult";
                displayResult0.style.color="rgb(117, 117, 118)";
                displayResult0.classList.add("result-normal");
            }
            else if(agee<=25 && agee>=18){
                displayResult0.textContent = "Young Adult";
                displayResult0.style.color="blue";
                displayResult0.classList.add("result-blue");
            }
            else if(agee<=17 && agee>=13){
                displayResult0.textContent = "Older Kid";
                displayResult0.style.color="blue";
                displayResult0.classList.add("result-blue");
            }
            else if(agee<=13 && agee>=0)
            {
                displayResult0.textContent = "Older Kid";
                displayResult0.style.color="blue";
                displayResult0.classList.add("result-blue");

                // let observe = document.createElement('h5');
                // displayResult0.style.color="red";
                // observe.classList.add("add-code");
                // observe.textContent="You can't live !";
                // displayText.appendChild(observe);
                // displayResult0.classList.add("result-two");
            }
            else if(agee<0)
                {
                    displayResult0.textContent = "You are not born";
                    displayResult0.style.color="blue";
                    displayResult0.classList.add("result-blue");
    
                    let observe = document.createElement('h5');
                    displayResult0.style.color="red";
                    observe.classList.add("add-code");
                    observe.textContent="Enter proper age";
                    displayText.appendChild(observe);
                    displayResult0.classList.add("result-two");
                }
            else{
                displayResult0.textContent = "Your age : " + agee +" is more than 125 !";
                displayResult0.classList.add("result-two");
                displayResult0.style.color="blue";
                let observe = document.createElement('h5');
                observe.classList.add("add-code");
                observe.textContent="Have a Peace !";
                displayText.appendChild(observe);
            }
            ageless.value="";
    }
    }
    else if(numless === "6"){
       
        result.textContent="Check the number Even (or) Odd";
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        let numberone = document.createElement('label');
        numberone.textContent="Enter Number :";
        numberone.classList.add('label');
        let inputElement = document.createElement('input');
        inputElement.type = "number";
        inputElement.classList.add("compare-class");
        inputElement.id = "age";

        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);

        oneMan.appendChild(numberone);
        oneMan.appendChild(inputElement);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-1");
        twoMan.textContent = "Check";
        twoMan.id = "comparisonResults";
        result.appendChild(twoMan);


        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);

        comparisonResults.onclick = function()
        {
            let userSelection00 = document.getElementById('userSelection');
            // let userSelection000 = userSelection00.value;
            let ageless = document.getElementById('age');
            let agee = ageless.value;

            let displayResult0 = document.getElementById('displayResult');
            if(agee === ""){
                displayResult0.textContent = "Please enter a number "
                displayResult0.classList.add("head-44");
               }
            else if(agee%2==0){
                displayResult0.textContent = agee + " is a Even Number ";
                displayResult0.style.color="red";
                displayResult0.classList.add("result-one");
            }
            
            else{
                displayResult0.textContent = agee + " is a odd Number ";
                displayResult0.style.color="rgb(117, 117, 118)";
                displayResult0.classList.add("result-normal");
            }
            ageless.value="";
    }
    }
    else{
        result.textContent="Please Enter a number from (1-5) !";
    }
    number.value="";
}
more();