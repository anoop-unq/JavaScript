let main = document.getElementById("main");

let head1 = document.createElement("h3");
head1.textContent="Padkanti Anoop";
head1.style.marginTop="10px";
head1.classList.add("head-00");
main.append(head1);

let containerE1 = document.createElement("div");
containerE1.classList.add("details");

let locationE1 = document.createElement("p");
locationE1.classList.add("detail-text");
locationE1.textContent="Hyderabad";


containerE1.appendChild(locationE1);

let phone = document.createElement('p');
phone.classList.add("details-text");
phone.textContent="6302447010";
containerE1.appendChild(phone);


main.appendChild(containerE1);

let containerE2 = document.createElement("div");
containerE2.classList.add("details-1");

let mailus = document.createElement("p");
mailus.classList.add("detail-text");
mailus.textContent="padkantianoop7@gmail.com";
containerE2.appendChild(mailus);

let mailus1 = document.createElement("p");
mailus1.classList.add("detail-text");
mailus1.textContent="https://github.com/anoop-unq";
containerE2.appendChild(mailus1);

main.appendChild(containerE2);

let section = document.createElement('div');
section.classList.add("section-items")


let profile = document.createElement('h2');
profile.classList.add("profile");
profile.textContent="Profile";

let hr = document.createElement("hr");
hr.classList.add("line");
profile.appendChild(hr);

let summary = document.createElement('p');
summary.classList.add("summary");
summary.textContent="A highly skilled Full Stack Developer with a strong foundation in front-end technologies, crafting seamless and responsive user experiences. Passionate about design and development, adept at bridging the gap between UI/UX and backend logic. Proficient in modern frameworks, ensuring efficient and scalable web solutions. Constantly evolving to master full-stack innovation. ";

let technologies = document.createElement('h2');
technologies.classList.add("profile");
technologies.textContent="Technologies";

let hr1 = document.createElement("hr");
hr1.classList.add("line");
profile.appendChild(hr1);

let flex = document.createElement("div");
flex.classList.add("details-small");

let smallHead = document.createElement('h3');
smallHead.classList.add("small");
smallHead.textContent="Programming Languages :";

let learn = document.createElement('p');
learn.textContent="C, C++, Python [Basics]";
learn.classList.add("lan")

flex.append(smallHead,learn);

let flex1 = document.createElement("div");
flex1.classList.add("details-small");

let smallHead1 = document.createElement('h3');
smallHead1.classList.add("small");
smallHead1.textContent="Web Design :";

let learn1 = document.createElement('p');
learn1.textContent="HTML, CSS, JS, BOOTSTRAP";
learn1.classList.add("lan")

flex1.append(smallHead1,learn1);

let projects = document.createElement('h2');
projects.classList.add("profile");
projects.textContent="Projects";

let hr2 = document.createElement("hr");
hr2.classList.add("line");
projects.appendChild(hr2);

let list = document.createElement('ul');
list.classList.add("list");

let listE = document.createElement('li');
listE.classList.add("listE");
listE.textContent="I have developed a highly responsive Mahabharat website using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless experience across all devices. The website features an interactive and animated design, bringing the epic to life with smooth transitions and engaging visual effects. Using Bootstrap, I have optimized the layout for responsiveness, while JavaScript animations enhance user interactions. Key sections include character details, battle highlights, and the Bhagavad Gita, presented with a modern yet traditional aesthetic. This project showcases my front-end development skills, combining design, responsiveness, and storytelling for an immersive user experience";

let listE1 = document.createElement('li');
listE1.classList.add("listE");
listE1.textContent="I have developed a Wikipedia Search Application using HTML, CSS, JavaScript, and API integration. The app allows users to search Wikipedia articles in real-time, displaying article summaries and images dynamically. With a responsive design, the application works seamlessly across devices, and JavaScript handles live search functionality for a smooth and interactive experience. This project showcases my skills in API integration and front-end development.";

list.append(listE,listE1);

let Education = document.createElement('h2');
Education.classList.add("profile");
Education.textContent="Education";

let hr3 = document.createElement("hr");
hr3.classList.add("line");
Education.appendChild(hr3);

let flex3 = document.createElement("div");
flex3.classList.add("details");

let smallHead00 = document.createElement('h3');
smallHead00.classList.add("small");
smallHead00.textContent="Nizam College, Hyderabad";

let learn00 = document.createElement('p');
learn00.textContent="[2021 - 2024]";
learn00.classList.add("lan")

flex3.append(smallHead00,learn00);

let flex4 = document.createElement("div");
flex4.classList.add("details");

let smallHead000 = document.createElement('h3');
smallHead000.classList.add("small");
smallHead000.textContent="Bachelor of Computer Applications [BCA]";

let learn000 = document.createElement('p');
learn000.textContent="6.5 CGPA";
learn000.classList.add("lan")

flex4.append(smallHead000,learn000);

let flex5 = document.createElement("div");
flex5.classList.add("details");

let smallHead0000 = document.createElement('h3');
smallHead0000.classList.add("small");
smallHead0000.textContent="Sree Chaitanya Junior College, Karimanagr";

let learn0000 = document.createElement('p');
learn0000.textContent="[2019 - 2021]";
learn0000.classList.add("lan")

flex5.append(smallHead0000,learn0000);

let flex55 = document.createElement("div");
flex55.classList.add("details");

let smallHead00000 = document.createElement('h3');
smallHead00000.classList.add("small");
smallHead00000.textContent="[M P C]";

let learn00000 = document.createElement('p');
learn00000.textContent="96.6 %";
learn00000.classList.add("lan")

flex55.append(smallHead00000,learn00000);

section.append(profile,hr,summary,technologies,hr1,flex,flex1,projects,list,Education,flex3,flex4,flex5,flex55);

main.appendChild(section);