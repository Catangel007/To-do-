
import search from "../images/search.svg";
import bedtime from "../images/dark_mode.svg";
import close from "../images/close.svg";
import events from "../images/calendar_add.svg";
import view from "../images/tune.svg";


export  function searchPage () {

    const content = document.querySelector("body");


    const searchBox = document.querySelector("#container");

   
    searchBox.innerHTML =`
    <dialog open class="box">
    
         
            
             <input type="text" name="search" id="search" img="${search}"placeholder="Search Items">
            


         
             
           
      </dialog>
      `
}


