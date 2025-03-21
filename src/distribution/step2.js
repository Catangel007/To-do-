 
 
 import orange from "../images/orange.png";
 import person from "../images/person.svg";
 import business from "../images/briefcase.svg";
 import lightbulb from "../images/lightbulb.svg";
 import backdrop from "../images/undraw_before-dawn_8wuh.svg";

 import { homePage } from "./home.js";

 
    export function step2Page(){
      const content = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  content.appendChild(formDiv);
  content.appendChild(display);

  formDiv.setAttribute("class","formDiv2");
  display.setAttribute("class","display2");

  formDiv.innerHTML=`
    <h1 id="title"><img src="${orange}" alt="">OrangeTodo</h1>
    <h2>How do you plan to use OrangeTodo?</h2>
    <p>Choose all that apply.</p>
   <form action="" method="post">
      <div>
      <img src="${person}">
        <label for="choices">Personal</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="choices" name="choices" value="Personal">
      </div>

      <div>
      <img src="${business}">
        <label for="choices">Work</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="choices" name="choices" value="Work">
      </div>

      <div>
      <img src="${lightbulb}">
        <label for="choices">Education</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" id="choices" name="choices" value="Education">
      </div>

        <button id="launch-btn" type= "button" >Launch OrangeTodo</button>


   </form>
  
   `

   display.innerHTML=`
   <div id="page-count">Step 2 of 2</div>
    <img src="${backdrop}" alt="backdrop image">
   `

   const launchBtn = document.querySelector("#launch-btn");
   launchBtn.addEventListener("click", ()=>{
     content.innerHTML="";
     homePage();
   })
  }
