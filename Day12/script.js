let oneman = document.getElementById('oneMan')
let twoman = document.getElementById('twoMan')
let thirdman = document.getElementById('thirdMan')

let mainE1 = document.getElementById('main');

let mainElement = document.createElement('div');
mainElement.classList.add("program");

let inputE1 = document.createElement('input');
inputE1.type = "text";
inputE1.classList.add("input-element");
inputE1.id = "userValue";
inputE1.placeholder = "Enter Username";

let para = document.createElement('p')
para.classList.add("message")
// para.textContent=""
para.id="message-error"

let inputE2 = document.createElement('input');
inputE2.type = "password";
inputE2.classList.add("input-element");
inputE2.id = "userPassword";
inputE2.placeholder = "Enter Password";


let paraE1 = document.createElement('p')
paraE1.classList.add("message")
// para.textContent=""
paraE1.id="message-error1"

let other = document.createElement('div')
other.classList.add("other")

let submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.classList.add("submit-btn");
submitBtn.textContent = "Submit";

let submitBtn1 = document.createElement('button');
submitBtn1.classList.add("submit-btn");
submitBtn1.id="hey"
submitBtn1.textContent = "Reset";

mainE1.addEventListener("click",function(e){
    e.preventDefault();
    let a = document.forms[0][0].value;
    let b = document.forms[0][1].value;
    let msd = document.getElementById('message-error');
    let msd1 = document.getElementById('message-error1');
    if(a.length==0){
        msd.textContent="Required*"
        // return false;
        // msd1.textContent="Required*"
    }
    else if(b.length==0){
        msd1.textContent="Required*"
    }
    else{
    msd.textContent=""
        // msd.textContent="";
        // msd1.textContent="";
        if(b.length<4){
            msd1.textContent="Password is too weak !"
            msd1.style.color="red"
        }
        else if(b.length>=4 && b.length<8){
            msd1.textContent="Password is Medium"
            msd1.classList.add("medium")
        }
        else if(b.length>=8 && b.length<=13){
            msd1.textContent="Password is Strong"
            msd1.style.fontSize="20px"
            msd1.style.fontWeight="575"
            msd1.style.color="green"

        }
        else if(b.length>=15){
            msd1.textContent="Password is too strong"
            msd1.style.fontSize="20px"
            msd1.style.fontWeight="575"
        }
        // else{
        //     msd1.textContent="Invalid"
        // }
    }
    let heyy = document.getElementById('hey');
    heyy.onclick=function(){
        userValue.value=""
        userPassword.value=""
        msd.textContent=""
        msd1.textContent=""
    }
})


mainElement.append(inputE1,para, inputE2,paraE1);
other.append(submitBtn,submitBtn1)
mainElement.append(other)
mainE1.append(mainElement);
oneman.appendChild(mainE1)



let mainE111 = document.getElementById('mainone');
let another = document.createElement('div');

another.classList.add("program1");

let inputE22 = document.createElement('input');
inputE22.type = "password";
inputE22.classList.add("input-element");
inputE22.id = "userP";
inputE22.placeholder = "Enter Password";


let paraE11 = document.createElement('p')
paraE11.classList.add("message")
// para.textContent=""
paraE11.id="message"

let inputE33 = document.createElement('input');
inputE33.type = "password";
inputE33.classList.add("input-element");
inputE33.id = "userPass";
inputE33.placeholder = "Enter Password";


let paraE111 = document.createElement('p')
paraE111.classList.add("message")
// para.textContent=""
paraE111.id="message1"

let otherE1 = document.createElement('div')
otherE1.classList.add("other")

let submitBtnE11 = document.createElement('button');
submitBtnE11.type = "button";
submitBtnE11.classList.add("submit-btn");
submitBtnE11.textContent = "Submit";

let submitBtn105 = document.createElement('button');
submitBtn105.classList.add("submit-btn");
submitBtn105.type="button"
submitBtn105.id="hii"
submitBtn105.textContent = "Reset";

submitBtnE11.onclick=function(){
    // e.preventDefault();
let userP = document.getElementById('userP');
let userPass = document.getElementById('userPass');
let c = userP.value;
let d = userPass.value;
let messageError = document.getElementById('message')
let messageErrorone = document.getElementById('message1')
        if(c.length==0){
            messageError.textContent="Required*"
            // return false;
            // msd1.textContent="Required*"
        }
        else if(d.length==0){
            messageErrorone.textContent="Required*"
            messageError.textContent=""
        }
        else{
        messageError.textContent=""
            // msd.textContent="";
            // msd1.textContent="";
            if(c===d){
                messageErrorone.textContent="Password  matched!"
                messageErrorone.style.color="green"
            }
            else{
                messageErrorone.textContent="Password does'nt match!"
            }
        }
        let heyyy = document.getElementById('hii');
        heyyy.onclick=function(){
        userP.value="";
        userPass.value="";
        messageError.textContent="";
        messageErrorone.textContent="";
    }

}

another.append(inputE22,paraE11,inputE33,paraE111)
otherE1.append(submitBtnE11,submitBtn105)
another.append(otherE1)
mainE111.append(another)
twoman.append(mainE111)

let section = document.createElement('div')
section.classList.add("calculator");

let inputA1 = document.createElement('input');
inputA1.type = "number";
inputA1.classList.add("input-element-11");
inputA1.id = "userNumber";
inputA1.placeholder = "Enter Value 1";

let inputA2 = document.createElement('input');
inputA2.type = "number";
inputA2.classList.add("input-element-11");
inputA2.id = "userNumberTwo";
inputA2.placeholder = "Enter Value 2";


let seperateE1 = document.createElement('div')
seperateE1.classList.add("seperate")

let result = document.createElement('div');
result.id="resultless";

let second = document.createElement('div');
second.classList.add("second");

let operations = document.createElement('button');
operations.classList.add("Add")
operations.textContent="+"


operations.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;
    if(ii =="" && jj==""){
        resultMain.textContent="Enter Values";
        resultMain.classList.add("white")
    }
    else if(ii == ""){
        resultMain.textContent="Enter first value";
        resultMain.classList.add("white")
    }   
    else if(jj == ""){
        resultMain.textContent="Enter second value";
        resultMain.classList.add("white")
    } 
    else{
        let str = Number(ii);
        let str1 = Number(jj)
        let store = str+str1
        resultMain.textContent=store;
        resultMain.classList.add("white")
    }
    i.value="";
    j.value=""
}

let operations1 = document.createElement('button');
operations1.classList.add("Add")
operations1.textContent="-"
operations1.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;
    if(ii =="" && jj==""){
        resultMain.textContent="Enter Values";
        resultMain.classList.add("white")
    }
    else if(ii == ""){
        resultMain.textContent="Enter first value";
        resultMain.classList.add("white")
    }   
    else if(jj == ""){
        resultMain.textContent="Enter second value";
        resultMain.classList.add("white")
    } 
    else{
        let str = Number(ii);
        let str1 = Number(jj)
        let store = str-str1
        resultMain.textContent=store;
        resultMain.classList.add("white")
    }
    i.value="";
    j.value=""
}

let operations2 = document.createElement('button');
operations2.classList.add("Add")
operations2.textContent="/"
operations2.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;
    if(ii =="" && jj==""){
        resultMain.textContent="Enter Values";
        resultMain.classList.add("white")
    }
    else if(ii == ""){
        resultMain.textContent="Enter first value";
        resultMain.classList.add("white")
    }   
    else if(jj == ""){
        resultMain.textContent="Enter second value";
        resultMain.classList.add("white")
    } 
    else{
        let str = Number(ii);
        let str1 = Number(jj)
        let store = str/str1
        resultMain.textContent=store;
        resultMain.classList.add("white")
    }
    i.value="";
    j.value=""
}

let operations3 = document.createElement('button');
operations3.classList.add("Add")
operations3.textContent="*"
operations3.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;
    if(ii =="" && jj==""){
        resultMain.textContent="Enter Values";
        resultMain.classList.add("white")
    }
    else if(ii == ""){
        resultMain.textContent="Enter first value";
        resultMain.classList.add("white")
    }   
    else if(jj == ""){
        resultMain.textContent="Enter second value";
        resultMain.classList.add("white")
    } 
    else{
        let str = Number(ii);
        let str1 = Number(jj)
        let store = str*str1
        resultMain.textContent=store;
        resultMain.classList.add("white")
    }
    i.value="";
    j.value=""
}

let operations4 = document.createElement('button');
operations4.classList.add("Add")
operations4.textContent="%"
operations4.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;
    if(ii =="" && jj==""){
        resultMain.textContent="Enter Values";
        resultMain.classList.add("white")
    }
    else if(ii == ""){
        resultMain.textContent="Enter first value";
        resultMain.classList.add("white")
    }   
    else if(jj == ""){
        resultMain.textContent="Enter second value";
        resultMain.classList.add("white")
    } 
    else{
        let str = Number(ii);
        let str1 = Number(jj)
        let store = str%str1
        resultMain.textContent=store;
        resultMain.classList.add("white")
    }
    i.value="";
    j.value=""
}



let seperate = document.createElement('div')
seperate.classList.add("seperate")


let operationsClear = document.createElement('button')
operationsClear.classList.add("sub")
operationsClear.textContent="Clear"
seperate.append(operationsClear)
operationsClear.onclick=function(){
    let resultMain = document.getElementById('resultless')
    let i = document.getElementById('userNumber')
    let j = document.getElementById('userNumberTwo')
    let ii = i.value;
    let jj = j.value;

    resultMain.textContent=""
    ii.textContent=""
    jj.textContent=""
    // if(ii =="" && jj==""){
    //     resultMain.textContent="Enter Values";
    //     resultMain.classList.add("white")
    // }
    // else if(ii == ""){
    //     resultMain.textContent="Enter first value";
    //     resultMain.classList.add("white")
    // }   
    // else if(jj == ""){
    //     resultMain.textContent="Enter second value";
    //     resultMain.classList.add("white")
    // } 
    // else{
    //     let str = Number(ii);
    //     let str1 = Number(jj)
    //     let store = str+str1
    //     resultMain.textContent=store;
    //     resultMain.classList.add("white")
    // }
    i.value="";
    j.value=""
}

section.append(inputA1,inputA2)
seperateE1.append(result)
section.append(seperateE1)
second.append(operations,operations1,operations2,operations3,operations4)
seperate.append(operationsClear)
section.append(second,seperate)
thirdman.append(section)