import {template} from "../images/undraw_web-devices_i15y.svg"

export function templatePage(){
    const content = document.querySelector("body");


    const templateBox = document.querySelector("#container");
    

    content.innerHTML =`
   <dialog class="modal"> 

            <div>
            <img src="${template}" alt="template image ">
            </div> 
      </dialog>
    `
}
