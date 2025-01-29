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
    else if(numless<0){
        // disappear.textContent="";
        result.textContent="Please enter number in +(ve) to get multipls from (1 - 50)";
        result.classList.add("result-class");
        result.style.color = "green";
    }
    else if(numless>=26){
        result.textContent="Please enter numbers up to (1 - 25)";
        result.classList.add("result-class");
        result.style.color = "red";
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%1==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%2==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%3==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%4==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%5==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%6==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%7==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%8==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%9==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%10==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%11==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%12==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%13==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%14==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
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
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%15==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="16"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%16==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="17"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%17==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="18"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%18==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="19"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%19==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="20"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%20==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="21"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%21==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="22"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%22==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="23"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%23==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="24"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%24==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="25"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiple of "+ numless +" from";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-50)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        for( i; i<=50;i++){
            if(i%25==0) {
                const listItem = document.createElement("li");
                listItem.textContent = i;
                selectOperator.appendChild(listItem); 
            }
        }
         oneMan.appendChild(displayText);
         result.appendChild(oneMan);  
         number.value="";
    }
    else{
        result.textContent="Invalid Try Again !";
        result.classList.add("result-class");
        result.style.color = "red";
        number.value="";
    }
    
}