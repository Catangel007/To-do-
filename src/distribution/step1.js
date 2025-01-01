import orange from "./images/orange.png";

import {step2Page} from "./distribution/step2.js";
 

   export const step1Page = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  step1Page.appendChild(formDiv);
  step1Page.appendChild(display);

  formDiv.setAttribute("class","formDiv");
  display.setAttribute("class","display");

  formDiv.innerHTML=`
    <h1 id="title"><img src="./images/orange.png" alt="">OrangeTodo</h1>
    <h1>Create your Profile</h1>
   <form action="" method="post">
        <input type="E-mail" id="e-mail" placeholder="name@example.com" name="e-mail"></input>
        <input type="text" id="first-name" placeholder="Your Name /n E.g Jane zest" name="first-name"></input>
        <p id="word-count">0/255</p>
        <input type="radio" id="question" placeholder="I want to use OrangeTodo with my Team" name="question"></input>
        <button id="continue-btn" type= "submit" >Continue</button>


   </form>
  
   `

   display.innerHTML=`
   <div id="page-count">Step 1 of 2</div>
   <img src="./images/Coming your way.png" alt="backdrop image">
   `


   const continueBtn = document.querySelector("#continue-btn");
   continueBtn.addEventListener("click", ()=>{
     document.textContent = step2Page;
   })