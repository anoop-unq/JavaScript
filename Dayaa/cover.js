const number = document.getElementById("num");
const result = document.getElementById("result");
var disappear = document.getElementById('disappear');
function more(){
    
    
    let numless = number.value;

    if(numless==="")
        {
            // console.log("dfgg")
            // disappear.textContent="";
        result.textContent="Please enter a number !";
    }
    else if(numless==0){
        // disappear.textContent="";
        result.textContent="Anything can be multipied with 0 is 0 ";
        result.classList.add("result-class");
        result.style.color = "red";
        number.value="";
    }
    else if(numless<0){
        // disappear.textContent="";
        result.textContent="Please enter number in +(ve) to get multipls from (1 - 10)";
        result.classList.add("result-class");
        result.style.color = "green";
        number.value="";
    }
    else if(numless>=16){
        result.textContent="Please enter numbers up to (1 - 10)";
        result.classList.add("result-class");
        result.style.color = "blue";
        number.value="";
    }
    else if(numless==="15"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="14"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="13"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="12"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="11"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="10"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="9"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="8"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="7"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="6"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="5"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="4"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="3"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="2"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    if (n > 1) { // Only add '*' if it's not the last number
        expression += " * ";
    }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    else if(numless==="1"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Factorial of "+ numless +"";
        displayText000.classList.add("light-color");

        let spanE1 = document.createElement('span');
        spanE1.style.color="green";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        // oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
        let resultM = 1;
        let expression = "";
        for( n=i; n>=1;n--){
           
                // const listItem = document.createElement("li");
               
                resultM *= n;

                expression += n; // Append number
    // if (n > 1) { // Only add '*' if it's not the last number
    //     expression += " * ";
    // }
                // listItem.textContent = n;
                // selectOperator.appendChild(listItem); 
        }
       
        const listItem = document.createElement("li");
        // listItem.textContent = `${expression} = `;
        selectOperator.appendChild(listItem);
        
         oneMan.appendChild(displayText);
         result.appendChild(oneMan); 
         spanE1.textContent = resultM;
         oneMan.appendChild(spanE1);
         number.value="";
    }
    // else if(numless==="15"){
    //     result.textContent="";
    //     let oneMan = document.createElement('div');
    //     oneMan.classList.add("input-element-1");
    //     oneMan.id = "star";

    //     disappear.textContent="";
    //     let displayText000 = document.createElement('h4');
    //     displayText000.id="displayResult";
    //     displayText000.textContent="Factorial of "+ numless +"";
    //     displayText000.classList.add("light-color");

    //     let spanE1 = document.createElement('span');
    //     spanE1.style.color="green";
    //     spanE1.classList.add("discount-less");
    //     oneMan.appendChild(displayText000);   
    //     // oneMan.appendChild(spanE1);

    //     let displayText = document.createElement('h4');
    //     displayText.id="displayResult";

    //     let selectOperator = document.createElement('ol');
    //     selectOperator.classList.add("list-item");
       
    //     displayText.appendChild(selectOperator);
    //     // let breakEl = document.createElement('br');
    //     // oneMan.appendChild(breakEl);

       
    //     // result.appendChild(oneMan);
        
    //     var i = parseInt(numless);
    //     var n;
    //     let resultM = 1;
    //     let expression = "";
    //     for( n=i; n>=1;n--){
           
    //             // const listItem = document.createElement("li");
               
    //             resultM *= n;

    //             expression += n; // Append number
    // if (n > 1) { // Only add '*' if it's not the last number
    //     expression += " * ";
    // }
    //             // listItem.textContent = n;
    //             // selectOperator.appendChild(listItem); 
    //     }
       
    //     const listItem = document.createElement("li");
    //     listItem.textContent = `${expression} = `;
    //     selectOperator.appendChild(listItem);
        
    //      oneMan.appendChild(displayText);
    //      result.appendChild(oneMan); 
    //      spanE1.textContent = resultM;
    //      oneMan.appendChild(spanE1);
    //      number.value="";
    // }

   
    else{
        result.textContent="Invalid Try Again !";
        result.classList.add("result-class");
        result.style.color = "red";
    }

}