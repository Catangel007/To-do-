

import orange from "../images/orange.png";
import backdrop from "../images/Coming your way.png";

import {step2Page} from "./step2.js";
 

   export function step1Page(){
    const content = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  content.appendChild(formDiv);
  content.appendChild(display);

  formDiv.setAttribute("class","formDiv");
  display.setAttribute("class","display");

  formDiv.innerHTML=`
    <h1 id="title"><img src="${orange}" alt="happy orange icon">OrangeTodo</h1>
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
   <img <img src="${backdrop}" alt="">
   `


   const continueBtn = document.querySelector("#continue-btn");
   continueBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    content.innerHTML = "";
    
     step2Page();
   })}