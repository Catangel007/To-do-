import {template} from "../images/undraw_web-devices_i15y.svg"

export function templatePage() {
    // Create the modal
    const modal = document.createElement('dialog');
    modal.className = 'modal';
    
    // Set modal content
    modal.innerHTML = `
        <div>
            <img src="${template}" alt="template image">
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Show the modal
    modal.showModal(); // or modal.show() for non-modal dialog
    
    // Optional: Add close functionality
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
}
