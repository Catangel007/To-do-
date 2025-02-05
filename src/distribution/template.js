import template from "../images/template.svg";
import close from "../images/close.svg";



export function templatePage() {
    // Create the modal
    const modal = document.createElement('dialog');
    modal.className = 'modal';
    
    // Set modal content
    modal.innerHTML = `
        <div>
        <h1>Browse Templates  <img id="close-modal" src="${close}" alt="close image"></h1>
       
            <img src="${template}" alt="template image">
        </div>
    `;
     // Add modal to body
     document.body.appendChild(modal);
    
     // Show the modal
     modal.showModal();
    
    
    // Optional: Add close functionality
    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener('click', modal.close());

   
}
