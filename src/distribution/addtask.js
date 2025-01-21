
import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";

export function addTaskPage(){

 const content = document.querySelector("#container");


  const taskBox = document.createElement("div");
 taskBox.setAttribute("class","task-box");
//  content.showPopover(taskBox);
taskBox.innerHTML =`
<form>
<input type="text" name="chores" id="chores" placeholder="Send Homework by Thursday at 6pm">
<input type="text" name="description" id="description" placeholder="Description">
<p id="section">
<button><img src="${today}" alt="today icon"> Today <img src="${close}" alt="close icon"></button>
<button><img src="${flag}" alt="flag icon"> Priority </button>
<button><img src="${alarm}" alt"alarm icon"> Reminders </button>
<button><img src="${hidden}" alt="hidden icon"></button>
</p><hr>
<p id="close-section">
<button><img src="${inbox}" alt="inbox icon"> inbox <img src="${arrowDown}" alt="arrowDown icon"></button>
<p>
<button class="cancel-btn "type="reset">Cancel</button>
<button class"add-btn" type="button">Add Task</button>
</p>
</p>

</form>



`
content.appendChild(taskBox);


}