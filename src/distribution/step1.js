

import orange from "../images/orange.png";
import backdrop from "../images/desk-supplies.jpg";
import toggleOff from "../images/toggle_off.svg";
import toggleOn from "../images/toggle_on.svg";
import check from "../images/check.svg";



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
    <h2>Create your Profile</h2>
   <form action="" method="post">
        <input type="E-mail" id="e-mail" placeholder="Name@example.com" name="e-mail"></input>
        <input type="text" id="first-name" placeholder="Your Name e.g Jane zest" name="first-name"></input>
        <p id="word-count">0/255</p>
        <div id="question">I want to use OrangeTodo with my Team<img id="toggle" src="${toggleOff}"></div>
        <button id="continue-btn" type= "submit" >Continue</button>


   </form>
  </div>
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
   })
  
  
  //toggle of and  on functionality

  const toggleImg = document.querySelector("#toggle");

  toggleImg.addEventListener("click",()=>{
    if (toggleImg.textContent=toggleOff){
    toggleImg.textContent = toggleOn;
  }else{toggleImg.textContent=toggleOff};

  })
  
  
  
  
  }