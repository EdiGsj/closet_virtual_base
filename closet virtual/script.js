let isOpen = false;

function toggleDoors() {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');

    if (isOpen) {
        leftDoor.style.transform = 'rotateY(0deg)';
        rightDoor.style.transform = 'rotateY(0deg)';
    } else {
        leftDoor.style.transform = 'rotateY(-180deg)';
        rightDoor.style.transform = 'rotateY(180deg)';
    };

    isOpen = !isOpen;
};

const modal = document.getElementsByClassName('modal')[0];
const modal_content = document.getElementsByClassName('modalContent')[0];
const image = document.getElementsByClassName('slot')[0];

image.onclick = function() {
    modal.style.display = 'block'
};

window.onclick = function(e) {
    if(e.target == modal){
        modal.style.display =  'none'
    };
};  