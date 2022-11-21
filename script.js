const block = document.querySelector(".block");
const empties = document.querySelectorAll(".empty");

block.addEventListener('dragstars' , dragStart);
block.addEventListener('dragend' , dragEnd);

for(const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart() {
    this.className += 'hold';
    setTimeout(() => (this.className = 'invisible') , 0);
}

function dragEnd() {
    this.className = 'block';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = "empty";
    this.append(block);
}

