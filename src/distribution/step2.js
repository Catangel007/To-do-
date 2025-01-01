 
 import orange from "./images/orange.png";


    import {homePage} from "./distribution/home.js";
 

 export const step2Page = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  step2Page.appendChild(formDiv);
  step2Page.appendChild(display);

  formDiv.setAttribute("class","formDiv");
  display.setAttribute("class","display");

  formDiv.innerHTML=`
    <h1 id="title"><img src="./images/orange.png" alt="">OrangeTodo</h1>
    <h2>How do you plan to use OrangeTodo?</h2>
    <p>Choose all that apply.</p>
   <form action="" method="post">
      <div>
        <label for="choices">Personal</label>
        <input type="radio" id="choices" name="choices" value="Personal">
      </div>

      <div>
        <label for="choices">Work</label>
        <input type="radio" id="choices" name="choices" value="Work">
      </div>

      <di>
        <label for="choices">Education</label>
        <input type="radio" id="choices" name="choices" value="Education">
      </div>

        <button id="launch-btn" type= "button" >Launch OrangeTodo</button>


   </form>
  
   `

   display.innerHTML=`
   <div id="page-count">Step 2 of 2</div>
    <img src="./images/Coming your way.png" alt="backdrop image">
   `

   const launchBtn = document.querySelector("#launch-btn");
   continueBtn.addEventListener("click", ()=>{
     document.textContent = homePage;
   })

