 
 
 import orange from "../images/orange.png";
 import person from "../images/person.svg";
 import business from "../images/briefcase.svg";
 import lightbulb from "../images/lightbulb.svg";
 import backdrop from "../images/57380.jpg";

    import {homePage} from "./home.js";
 
    export function step2Page(){
      const content = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  content.appendChild(formDiv);
  content.appendChild(display);

  formDiv.setAttribute("class","formDiv");
  display.setAttribute("class","display");

  formDiv.innerHTML=`
    <h1 id="title"><img src="${orange}" alt="">OrangeTodo</h1>
    <h2>How do you plan to use OrangeTodo?</h2>
    <p>Choose all that apply.</p>
   <form action="" method="post">
      <div>
      <img src="${person}">
        <label for="choices">Personal</label>
        <input type="radio" id="choices" name="choices" value="Personal">
      </div>

      <div>
      <img src="${business}">
        <label for="choices">Work</label>
        <input type="radio" id="choices" name="choices" value="Work">
      </div>

      <div>
      <img src="${lightbulb}">
        <label for="choices">Education</label>
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
   continueBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    content.innerHTML="";
     homePage();
   })
  }
