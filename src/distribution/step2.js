 
 export const step2Page = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  step2Page.appendChild(formDiv);
  step2Page.appendChild(display);

  formDiv.innerHTML=`
    <h1 id="title">OrangeTodo</h1>
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

        <button type= "button" >Launch OrangeTodo</button>


   </form>
  
   `

   display.innerHTML=`
   <div>Step 2 of 2</div>
   <img src="" alt="">
   `