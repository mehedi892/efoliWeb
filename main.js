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


/// People say slider
const reviewData = data.data;
console.log(reviewData[0].img);
let id = 0;
let id1 = 1;
let id2 = 2;
let id3 = 3;
let id4 =4;


function loadReview (){
 
    const reviewDiv = document.querySelector('.clientReviewDiv1GridCmn');
    reviewDiv.innerHTML = `<div>
    <img src="${reviewData[id].img}" alt="" class="clientReviewDiv1GridCmnImg" id="img1">
</div>



<div>
    <img src="${reviewData[id1].img}" alt="" class="clientReviewDiv1GridCmnImg" id="img2">
</div>



<div>
    <img src="${reviewData[id2].img}" alt="" class="clientReviewDiv1GridCmnImg" id="img3">
   
</div>



<div>
    <img src="${reviewData[id3].img}" alt="" class="clientReviewDiv1GridCmnImg" id="img4">
</div>



<div>
    <img src="${reviewData[id4].img}" alt="" class="clientReviewDiv1GridCmnImg" id="img5">
</div>
`



}

loadReview();

function slideRight (){
    id = id + 1;
    id1 = id1 + 1;
    id2 = id2 + 1;
    id3 = id3 + 1;
    id4 = id4 + 1;
   
    if(reviewData.length-5<id4){
        id4 = id4 -4;
        if(id4>0){
          id4= 0;
        }
    }

    else if(reviewData.length-4<id3){
        id4 = id4 -3;
    }
    console.log(id,id1,id2,id3,id4);
   
    loadReview();

   
}
