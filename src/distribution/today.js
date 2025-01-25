

import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";

export  function todayPage (){

    const content = document.querySelector("body");


    const todayBox = document.querySelector("#container");

   todayBox.innerHTML =`
   <dialog open class="modal">
   <form>
   <input type="text" name="chores" id="chores" placeholder="Send Homework by Thursday at 6pm"></input>
   <input type="text" name="description" id="description" placeholder="Description"></input>
   <p id="section">
   <button><img src="${today}" alt="today icon"> Today <img src="${close}" alt="close icon"></button>
   <button><img src="${flag}" alt="flag icon"> Priority </button>
   <button><img src="${alarm}" alt="alarm icon"> Reminders </button>
   <button><img src="${hidden}" alt="hidden icon"></button>
   </p><hr>
   <div class="close-section">
   <button><img src="${inbox}" alt="inbox icon"> inbox <img src="${arrowDown}" alt="arrowDown icon"></button>
   <div>
   <button class="cancel-btn "type="reset">Cancel</button>
   <button class="add-btn" type="submit">Add Task</button>
   </div>
   </div>
   
   </form>
   
   </dialog>
   
   `
content.appendChild(todayBox);
}