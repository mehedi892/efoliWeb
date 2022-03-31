//Navbar Responsive

let mobileMenuIcon = document.querySelector('.mobileMenuIcon');
let mainMenuDiv = document.getElementById('navMenu');

mobileMenuIcon.addEventListener('click', () =>{
    mainMenuDiv.classList.toggle("mobile");
});

///Slider Our Valuable Clients
let divGrid= document.getElementById('valueClientDiv1GridId');

let divAll = divGrid.getElementsByClassName('valueClientDiv1GridDivCmn');


let rightArrow = document.getElementById('arrow-right');
let leftArrow = document.getElementById('arrow-left');


rightArrow.addEventListener('click', function(){
    
    divGrid.scrollLeft += 125;
});

leftArrow.addEventListener('click', function(){
    divGrid.scrollLeft -= 125;
    
});

let maxScrollLeft = divGrid.scrollWidth - divGrid.clientWidth;
function autoPlay(){
    if(divGrid.scrollLeft > (maxScrollLeft - 1)){
        divGrid.scrollLeft -= maxScrollLeft;

    }
    else{
        divGrid.scrollLeft += 1;
    }
}

///Slider Our Valuable Clients end