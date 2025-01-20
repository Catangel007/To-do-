
import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";

export function addTaskPage(){

 const content = document.querySelector("body");


  const taskBox = document.querySelector("#container");
 taskBox.setAttribute("class","task-box");

taskBox.innerHTML =`
<form>
<input type="text" name="chores" id="chores" placeholder="Send Homework by Thursday at 6pm">
<input type="text" name="description" id="description" placeholder="Description">
<p>
<button><img src="${today}"> Today <img src="${close}"></button>
<button><img src="${flag}"> Priority </button>
<button><img src="${alarm}"> Reminders </button>
<button><img src="${hidden}"></button>
</p><hr>
<p>
<button><img src="${inbox}"> inbox <img src="${arrowDown}"></button>
<p>
<button type="reset">Cancel</button>
<button type="button">Add Task</button>
</p>
</p>

</form>



`


}