const number = document.getElementById("num");
const result = document.getElementById("result");

function more(){
    let numless = number.value;
    if(numless==="")
        {
        result.textContent="Please Enter a day !";
    }
    else if(numless==="Monday" || numless === "Mon" || numless === "mon" || numless === "MONDAY" || numless === "monday" || numless === "MON"){
        result.textContent="Own your ";
        result.classList.add("text-me");
        let spanE1 = document.createElement('span');
        spanE1.style.color="blue";
        spanE1.textContent = "Monday";
        result.appendChild(spanE1);
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gym";

       

        itemList.textContent = "Begin the week with focus and clarity";
        itemList1.textContent = "Exercise, organize, and stay focused";
        itemList2.textContent = "Check and organize your schedule.";
        itemList3.textContent = "Go to the GYM (Chest-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.appendChild(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Tuesday" || numless === "Tue" || numless === "tue" || numless === "TUESDAY" || numless === "tuesday" || numless === "TUE"){
        result.textContent="Take charge of Tuesday";
        result.classList.add("text-me");
 
        result.style.color="blue";
       
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gym";

       

        itemList.textContent = "Keep building on yesterday’s progress";
        itemList1.textContent = "Plan smart, act decisively.";
        itemList2.textContent = "Tackle tasks with efficiency and purpose";
        itemList3.textContent = "Go to the GYM (Back-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Wednesday" || numless === "Wed" || numless === "wed" || numless === "WEDNESDAY" || numless === "wednesday" || numless === "WED"){
        result.textContent="Work it out Wednesday";
        result.classList.add("text-me");

        result.style.color="green";
       
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gymGreen";

       

        itemList.textContent = "Refine your efforts for greater impact";
        itemList1.textContent = "Refine strategy, achieve goals";
        itemList2.textContent = "Refine strategy, achieve goals.";
        itemList3.textContent = "Go to the GYM (Shoulder-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Thursday" || numless === "Thurs" || numless === "thurs" || numless === "thursday" || numless === "thursday" || numless === "THURSDAY"){
        result.textContent="Seize your Thursday";
        result.classList.add("text-me");
    
        result.style.color="black";
        
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gym";

       

        itemList.textContent = "Stay disciplined, stay ahead.";
        itemList1.textContent = "Progress continues with purpose";
        itemList2.textContent = "Keep the momentum going";
        itemList3.textContent = "Go to the GYM (Bieceps-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Friday" || numless === "Fri" || numless === "fri" || numless === "Fri" || numless === "friday" || numless === "FRIDAY"){
        result.textContent="Own your Friday, lead the way.";
        result.classList.add("text-me");
        
     
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gym";

       

        itemList.textContent = "Focus sharpens, success follows";
        itemList1.textContent = "Stay consistent, progress steadily";
        itemList2.textContent = "Wrap up and recharg.";
        itemList3.textContent = "Go to the GYM (Triceps-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Saturday" || numless === "Sat" || numless === "sat" || numless === "SAT" || numless === "saturday" || numless === "SATURDAY"){
        result.textContent="Seize the Saturday";
        result.classList.add("text-me");
     
        result.style.color="red";
       
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gym";

       

        itemList.textContent = "Embrace the weekend with focus.";
        itemList1.textContent = "Wrap up the week, prepare for the next.";
        itemList2.textContent = "Push through, the weekend is near.";
        itemList3.textContent = "Go to the GYM (leg-Day !)";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter another Day !";
        }

       

      
    }
    else if(numless==="Sunday" || numless === "Sun" || numless === "sun" || numless === "sunday" || numless === "SUN" || numless === "SUNDAY"){
        result.textContent="Sunday is your day to reset";
        result.classList.add("text-me");
        result.style.color="green";
        // result.appendChild(spanE1);
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);
        // let breakE2 = document.createElement('br');
        // result.appendChild(breakE2);
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");

        oneMan.id = "star";
        
        let selectOperator = document.createElement('ul');
        selectOperator.classList.add("list-item");

        let itemList = document.createElement('li');
        let itemList1 = document.createElement('li');
        let itemList2 = document.createElement('li');
        let itemList3 = document.createElement('li');
       

        itemList.classList.add("list-items-1");
        itemList1.classList.add("list-items-1");
        itemList2.classList.add("list-items-1");
        itemList3.classList.add("list-items-1");
        itemList3.id = "gymGreen";

       

        itemList.textContent = "Spend time with family or friends for quality bonding.";
        itemList1.textContent = "Find peace in the stillness";
        itemList2.textContent = "Pause, breathe, and enjoy the day";
        itemList3.textContent = "Rest today, renew for tomorrow.";

        selectOperator.appendChild(itemList);
        selectOperator.appendChild(itemList1);
        selectOperator.appendChild(itemList2);
        selectOperator.appendChild(itemList3);

        oneMan.appendChild(selectOperator);
        result.append(oneMan);

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        result.appendChild(displayText);
        
        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        result.appendChild(displayText1);
        
        comparisonResult.onclick = function(){
            more();
            result.textContent="Please Enter Other Day !";
        }

       

      
    }
    else{
        result.textContent="Please enter days only !";
    }
    number.value="";
}