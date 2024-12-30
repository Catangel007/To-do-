const step1Page = document.querySelector("body");

  const formDiv = document.createElement("div");
  const display = document.createElement("div")

  step1Page.appendChild(formDiv);
  step1Page.appendChild(display);

  formDiv.innerHTML=`
    <h1 id="title">OrangeTodo</h1>
    <h2>How do you plan to use OrangeTodo?</h2>
    <p>Choose all that apply.</p>
   <form action="" method="post">
        <input type="checkbox" id="choices" name="choices" value="Personal">
        <input type="checkbox" id="choices" name="choices" value="Work">
        <input type="checkbox" id="choices" name="choices" value="Education">
       
        <button type= "button" >Launch OrangeTodo</button>


   </form>
  
   `

   display.innerHTML=`
   <div>Step 2 of 2</div>
   <img src="" alt="">
   `