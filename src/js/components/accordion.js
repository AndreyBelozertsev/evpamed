const buttonList = document.getElementsByClassName('accordion-button');

if(buttonList){
    for(let button of buttonList) {
        button.addEventListener('click', function(event){
            let id = button.getAttribute('data-accordion-button');
            let documentBox = document.querySelector('[data-accordion-box='+ id + ']');
            let img =button.querySelector('img');
            documentBox.classList.toggle("hidden");
            img.classList.toggle("rotate-180deg");
        })
    }
}