
        let a = document.createElement('div');
        a.classList.add("hello");
        var mainImg = document.createElement('img');
        mainImg.id="hi"
        mainImg.src="vishnu11.webp";
        mainImg.classList.add("vishnu-image");

        a.append(mainImg);

        let main = document.createElement('div');
        main.classList.add("image-path");

        let btn1 = document.createElement('button');;
        btn1.textContent="Matsya Avatar";
        btn1.classList.add("Add");

        let btn2 = document.createElement('button');
        btn2.textContent="Kurma Avatar";
        btn2.classList.add("Add");

    
        let btn3 = document.createElement('button');
        btn3.textContent="Varaha Avatar";
        btn3.classList.add("Add");


        let btn4 = document.createElement('button');;
        btn4.textContent="Narasimaha Avatar";
        btn4.classList.add("Add");

        let btn5 = document.createElement('button');
        btn5.textContent="Vamana Avatar";
        btn5.classList.add("Add");
       

        let btn6 = document.createElement('button');
        btn6.textContent="Parushurama Avatar";
        btn6.classList.add("Add");
    


        let btn7 = document.createElement('button');;
        btn7.textContent="Ram Avatar";
        btn7.classList.add("Add");
      

        let btn8 = document.createElement('button');
        btn8.textContent="Krishna Avatar";
        btn8.classList.add("Add");


        let btn9 = document.createElement('button');
        btn9.textContent="Buddha Avatar";
        btn9.classList.add("Add");
       


        let btn10 = document.createElement('button');
        btn10.textContent="Kalki Avatar";
        btn10.classList.add("Add");


        btn1.onclick=function(){
            var hii = document.getElementById('hi');
            hii.src="V1matsya.jpg.webp";
            hii.classList.add("scale-in-center");
            btn1.classList.add("vishnu-image");
            a.append(hii);
        }
        btn2.onclick=function(){
            let hii = document.getElementById('hi');
            hii.src="V2kurma.jpg.webp";
            hii.classList.add("scale-in-center");
            btn2.classList.add("vishnu-image");
            a.append(hii);
        }
        btn3.onclick=function(){
            let hii = document.getElementById('hi');
            hii.classList.add("scale-in-center");
            hii.src="varaha.jpg";
            btn3.classList.add("vishnu-image");
            a.append(hii);
        }

        btn4.onclick=function(){
            var hii = document.getElementById('hi');
            hii.classList.add("scale-in-center");
            hii.src="V4narasimha.webp";
            btn4.classList.add("vishnu-image");
            a.append(hii);
        }
        btn5.onclick=function(){
            let hii = document.getElementById('hi');
            hii.classList.add("scale-in-center");
            hii.src="a6e3b92b16d13a0c156bc9a53c0dab5d.jpg";
            btn5.classList.add("vishnu-image");
            a.append(hii);
        }
        btn6.onclick=function(){
            let hii = document.getElementById('hi');
            hii.src="V6parushurama.jpg.webp";
            hii.classList.add("scale-in-center");
            btn6.classList.add("vishnu-image");
            a.append(hii);
        }

        btn7.onclick=function(){
            var hii = document.getElementById('hi');
            hii.src="V8Ram.webp";
            hii.classList.add("scale-in-center");
            btn7.classList.add("vishnu-image");
            a.append(hii);
        }
        btn8.onclick=function(){
            let hii = document.getElementById('hi');
            hii.src="V9krishna.webp";
            hii.classList.add("scale-in-center");
            btn8.classList.add("vishnu-image");
            a.append(hii);
        }
        btn9.onclick=function(){
            let hii = document.getElementById('hi');
            hii.src="budha.jpg";
            btn9.classList.add("vishnu-image");
            hii.classList.add("scale-in-center");
            a.append(hii);
        }

        btn10.onclick=function(){
            let hii = document.getElementById('hi');
            hii.src="kalki.jpg";
            hii.classList.add("scale-in-center");
            btn10.classList.add("vishnu-image");
            a.append(hii);
        }

            document.body.append(a);
            main.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10);
            document.body.append(main)
// <!-- 2) Event handling: Write a script that adds a click event listener to a button that changes the text of a paragraph when clicked. -->
        let section = document.createElement('div');
        section.classList.add("space");
        
        let sectionE1 = document.createElement('div');
        sectionE1.classList.add("spaceless");

        let textArea = document.createElement('textarea');
        textArea.classList.add("textArea")
        textArea.ariaHidden="true"
        textArea.placeholder="Enter Text 1";
        textArea.id = "ans";

        let para = document.createElement('p');
        para.classList.add("para");
        para.textContent="Please enter text for a change";

        let buttonE1 = document.createElement('button')
        buttonE1.classList.add("Addless");
        buttonE1.textContent="Change";
        buttonE1.onclick=function(){
            let text = document.getElementById('ans');
            let lol = document.querySelector(".para");
            let textValue = text.value;
            if(textValue===""){
                lol.textContent="Invalid";
            }
            else{
                lol.textContent=text.value+" Changed";
            }
        }


        sectionE1.append(textArea,para,buttonE1);
        section.append(sectionE1)

        document.body.appendChild(section)

// <!-- 3) Dynamic class manipulation: Write a function that adds or removes a class from an element when a button is clicked. -->
        let section1 = document.createElement('div');
        section1.classList.add("space");

        let sectionE12 = document.createElement('div');
        sectionE12.classList.add("spaceless");



        let a1 = document.createElement('div');
        a1.classList.add("hitman");
        var mainImg121 = document.createElement('img');
        mainImg121.id="hey"
        mainImg121.src="V8Ram.webp";
        mainImg121.classList.add("vishnu-image");
        
     

        let btn100 = document.createElement('button');
        btn100.textContent="Class Change";
        btn100.classList.add("Add1");
        a1.append(mainImg121,btn100);

        btn100.onclick=function(){
            var hey = document.getElementById('hey');
            hey.classList.add("scale-in-center-11") 
        }
        document.body.append(a1)
        // document.body.append(btn100)
      
// <!-- 4) Toggle visibility: Create a button that toggles the visibility of an element by showing/hiding it on each click. -->
        let section1947 = document.createElement('div');
        section1947.classList.add("space");

        let sectionE120 = document.createElement('div');
        sectionE120.classList.add("spaceless");



        let darkmode = document.createElement('button')
        darkmode.textContent="Dark"
        darkmode.classList.add("dark")
        c = true;
        darkmode.onclick=function(){
            // document.body.style.background="black";
            
            if(document.body.classList.toggle("black")){
              darkmode.textContent="Light"
              darkmode.style.background="#fff"
              darkmode.style.color="black"
              c = false;
            }
            else{
                darkmode.textContent="Dark" 
                // darkmode.textContent="Light"
                darkmode.style.background="black"
                darkmode.style.fontWeight="458"
                darkmode.style.color="#fff"
            }
            // console.log("sdhc")
        }


        // let lightmode = document.createElement('button')
        // lightmode.textContent="Light"
        // lightmode.classList.add("light")
        // console.log(lightmode)
        // // console.log(darkmode)
        // lightmode.onclick=function(){
        //     document.body.style.background="#fff";
        // }
        sectionE120.append(darkmode);
        section1947.append(sectionE120);
        document.body.append(section1947);

