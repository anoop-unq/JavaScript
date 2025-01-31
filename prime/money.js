function collectNumbers() {
    var user = document.getElementById('num');
    var userInput = user.value;
    let exam = document.getElementById('result');
    let nextResult = document.getElementById('nextResult');
          // Get the input value
   if(userInput===""){
   
      exam.textContent = 'Enter a number :';
      exam.classList.add("red-color");
   }
   else if(userInput==="0"){
    exam.textContent=userInput +" is not a prime number :";
    nextResult.textContent="";
    nextResult.classList.remove("input-element-box");

   }
   else if(userInput=="1"){
    exam.textContent=userInput +" is not a prime number :";
    nextResult.textContent="";
    nextResult.classList.remove("input-element-box");

   }
   else if(Number((userInput))){
    var arr =[];
    let userInputratio = parseInt(userInput);
    for(i=0;i<=userInputratio;i++){
    Number(arr.push(i));
      }
     console.log(arr);
     exam.textContent="";
     nextResult.textContent=arr;
     nextResult.classList.add("input-element-box");

    //  let oneMan = document.createElement('div');
    //  oneMan.classList.add("input-element-1");
    //  oneMan.id = "star";
     
     let breakE3 = document.createElement('br');
     result.appendChild(breakE3);

     let displayResult72 = document.createElement('h5');
     displayResult72.classList.add("head-00");
      exam.appendChild(displayResult72)

     let twoMan = document.createElement('button');
     twoMan.classList.add("button-1");
     twoMan.textContent = "Check Prime";
     twoMan.id = "comparisonResults";
     exam.appendChild(twoMan);

     let displayResult7285 = document.createElement('h5');
     displayResult7285.classList.add("head-00");
      exam.appendChild(displayResult7285);
    

      let Man = document.createElement('button');
      Man.classList.add("btn");
      Man.textContent = "Reset";
      Man.id = "comparison";
      exam.appendChild(Man);
      
    //  oneMan.appendChild(breakE3);
    // oneMan.appendChild(twoMan);
    // oneMan.appendChild(selectOperator);
    // oneMan.appendChild(displayResult7285);
    // exam.appendChild(oneMan);
    
    comparisonResults.onclick=function(){
    displayResult7285.innerHTML="";  
// 
for (let i of arr) {  // Iterate over values, not indices
    if (arr[i] < 2) {  // Numbers less than 2 are not prime
        // console.log(i + " Not Prime");
        // displayResult72.textContent="sdjj";
        continue;
    }

    let isPrime = true;
    
    for (let j = 2; j <= Math.sqrt(i); j++) {  // Efficient check using square root
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        // for(j=1;j<=arr.length;j++){
            let selectOperator = document.createElement('ol');
            selectOperator.classList.add("list-item");
            const listItem = document.createElement("li");
            listItem.textContent = i+" is a prime number";
           
            
            selectOperator.appendChild(listItem);
            displayResult7285.appendChild(selectOperator);
            
            
            
            // displayResult7285.textContent="Prime"+i;
        // }

    
    } 

    

    else {
      
        console.log(i + " Not Pme");
    }
}
    

}
comparison.onclick=function(){
    collectNumbers();
    nextResult.textContent="";
    nextResult.classList.remove("input-element-box");
}
    
    }  
 else{
     
    console.log("dsf")
    exam.textContent="Entered String :"+userInput;
}
user.value="";
// displayResult7285="";
}
