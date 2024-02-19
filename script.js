let controlar = new ScrollMagic.Controller();


// js for head image.

let scene1 = new ScrollMagic.Scene({
    triggerElement:'.TRIGGER'
})
.addTo(controlar);
scene1.setClassToggle('.AA', 'show1');

let scene2 = new ScrollMagic.Scene({
    triggerElement:'.TRIGGER'
})
.addTo(controlar);
scene2.setClassToggle('.EPC','show2');

let scene3 = new ScrollMagic.Scene({
    triggerElement:'.TRIGGER'
}).addTo(controlar);
scene3.setClassToggle('.HDAG','show3');


// js for footer

// for left to right reveal
function revealElement(){
    let sidereveal = document.querySelectorAll('.reveal');

    sidereveal.forEach(function(revelElem){
        let revealPos = revelElem.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let x = (10/100)*windowHeight;

        
        if(revealPos < (windowHeight-x)){
            revelElem.classList.add('revealed');
    
    
        }
        else{
            revelElem.classList.remove('revealed');
    
        }
    });
}

// for down to up reveal
function revealElement2(){
    let upreveal = document.querySelectorAll('.reveal2');

    upreveal.forEach(function(revelElem){
        let revealPos = revelElem.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let x = (20/100)*windowHeight;

        
        if(revealPos < (windowHeight-x)){
            revelElem.classList.add('revealed');
    
    
        }
        else{
            revelElem.classList.remove('revealed');
    
        }
    });
}


window.addEventListener('scroll', revealElement);

window.addEventListener('scroll', revealElement2);



