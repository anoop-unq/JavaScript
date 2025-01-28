const number = document.getElementById("num");
const result = document.getElementById("result");
var disappear = document.getElementById('disappear');
function more(){
    
    
    let numless = number.value;

    if(numless==="")
        {
            // console.log("dfgg")
            // disappear.textContent="";
        result.textContent="Please Enter Bill Amount !";
    }
    else if(numless<0){
        disappear.textContent="";
        result.textContent="Please Enter Bill Amount in +(ve) Numbers to get disount";
        result.classList.add("result-class");
    }
    else if(numless>=100000){
        disappear.textContent="";
        result.textContent="Out of range amount entered correct the bill amount !";
    }
    else if(numless<=999){
        disappear.textContent="";
        result.textContent="Opps No Discount Puchase above ";
        result.classList.add("result");
        result.id = "byr";
        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "$ 1000";
        result.appendChild(spanE1);
        // let breakEl = document.createElement('br');
        // result.appendChild(breakEl);

    }
    else if(numless<=99999 && numless>=1000){
        disappear.textContent="";
        result.textContent="Flat 20% ";
        result.id = "bye";
        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = " Disount";
        spanE1.classList.add("discount-less");
        result.appendChild(spanE1);
        let breakEl = document.createElement('br');
        result.appendChild(breakEl);

        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let displayText = document.createElement('h4');
        displayText.id="displayResult";
        oneMan.appendChild(displayText);

        let displayText1 = document.createElement('h4');
        displayText1.id="displayResultItem";
        oneMan.appendChild(displayText1);
        
        let displayText2 = document.createElement('h4');
        displayText2.id="displayResultItem";
        oneMan.appendChild(displayText2);

        // displayText.textContent="Hi";
        
       
       

        let billValue = parseInt(numless);
       
        let discountPrice = 20;
        let dsp = parseInt(discountPrice);
        let total = (billValue * dsp) / 100;
        let grand = billValue-total;
        
        oneMan.appendChild(displayText);

        displayText.textContent ="Bill Amount : " + billValue;
        displayText.style.color="blue";
        oneMan.appendChild(displayText);

        displayText1.textContent ="Discount Amount : " + total;
        displayText1.style.color="red";
        oneMan.appendChild(displayText1);
        
        displayText2.textContent ="Total Amount : " + grand;
        displayText2.style.color="green";
        oneMan.appendChild(displayText2);
        result.appendChild(oneMan);

        // let billAmount = parseInt(billAmountElValue);
        // let percentageTip = parseInt(percentageTipElValue);

        // let calculatedTip = (percentageTip / 100) * billAmount;
        // let calculatedTotal = billAmount + calculatedTip;

        // tipAmountEl.value = calculatedTip;
        // totalAmountEl.value = calculatedTotal;

        let twoMan = document.createElement('button');
        twoMan.classList.add("button-00");
        twoMan.textContent = "Back"
        twoMan.id = "comparisonResult";
        result.appendChild(twoMan);
        comparisonResult.onclick = function(){
            more();
            result.textContent="Thank You ! Enter The Next Bill !";
            // result.id="";
           
            // let spanE1 = document.createElement('span');
            // spanE1.style.color="red";
            // spanE1.textContent = " Disount";
            // spanE1.classList.add("discount");

            // let spanE2 = document.createElement('span');
            // spanE2.style.color="red";
            // spanE2.textContent = " based on your bill amount";
            // spanE2.classList.remove("discount");



            // result.append(spanE1);
            // result.appendChild(spanE2); 
            // result.append(disappear);
           
        }  
    }
    number.value="";


}