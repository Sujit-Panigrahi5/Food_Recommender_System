
const looseweight=document.getElementById("looseweight")
const maintainweight=document.getElementById("maintainweight")
const gainweight=document.getElementById("gainweight")
const male=document.getElementById("male")
const female=document.getElementById("female")
const weight=document.getElementById("weight")
const feet=document.getElementById("Feet")
const inch=document.getElementById("inch")
const agesection=document.getElementById("agesection")
const heightsection=document.getElementById("heightsection")
const notveryactive= document.getElementById("notveryactive")
const active=document.getElementById("active")
const veryactive=document.getElementById("veryactive")
const veg=document.getElementById("veg")
const nonveg=document.getElementById("nonveg")
const both=document.getElementById("both")




looseweight.style.animation="move 1 2s"
maintainweight.style.animation="move1 1 2s"
gainweight.style.animation="move 1 2s"
// document.querySelector("div").style.backgroundImage="./assets/bg_food.webp"


let feetcheck=false;
let feetvalue=0;




function feetchange(){

   
    if(feet.value==''){
        feetcheck=false;
        feetvalue=feet.value;

    }
    else{
        heightsection.style.border="0px"
        feetvalue=feet.value;
        feetcheck=true;
    }
    
}

let inchcheck=false;
let inchvalue=0;
function inchchange(){
    if(inch.value==''){
        inchcheck=false;
        inchvalue=feet.value;
    }
    else{
        heightsection.style.border="0px"
        inchvalue=feet.value;
        inchcheck=true;
    }
}

let weightcheck=false;
let weightvalue=0;

weight.addEventListener("keypress",()=>{
    // if(weight.value==''){
    //     agesection.style.display="none"
        
    // }
    feetchange()
    inchchange()
    if(feetcheck ==  true || inchcheck == true){
       
        weightvalue=weight.value;
        weightcheck=true;
        agesection.style.display= "block"
        agesection.style.display="flex"
        heightsection.style.border="0px"
        weight.style.borderColor="#39d4d4"
    } else{
        weightvalue=weight.value;
        agesection.style.display="none"
        heightsection.style.border="solid"
        heightsection.style.borderColor="red"
        weight.style.borderColor="red"
    }

    

    
})

let value="";
function gotoinfopage(value1){
    value=value1;
    document.getElementById("welcomsection").style.display="none"
    document.getElementById("infosection").style.display="block"
}

let gendercheck=false;
function check1(){
    female.style.backgroundColor="#4a4949"
    male.style.backgroundColor="#12bf43"
    gendercheck=true;
}
function check2(){
    female.style.backgroundColor="#12bf43"
    male.style.backgroundColor="#4a4949"
    gendercheck=true;
}

let takeactivevalue=""
function activecheck1(){
    notveryactive.style.backgroundColor="#12bf43"
    active.style.backgroundColor="#4a4949"
    veryactive.style.backgroundColor="#4a4949"
    takeactivevalue="notveryactive"
    document.getElementById("recipescatagori").style.display="block"
    document.getElementById("recipescatagori").style.display="flex"
}
function activecheck2(){
    active.style.backgroundColor="#12bf43"
    notveryactive.style.backgroundColor="#4a4949"
    veryactive.style.backgroundColor="#4a4949"
    takeactivevalue="active"
    document.getElementById("recipescatagori").style.display="flex"
}
function activecheck3(){
    veryactive.style.backgroundColor="#12bf43"
    notveryactive.style.backgroundColor="#4a4949"
    active.style.backgroundColor="#4a4949"
    takeactivevalue="veryactive"
    document.getElementById("recipescatagori").style.display="flex"
}

agesection.addEventListener("keypress",()=>{
    if(gendercheck == true){
        document.getElementById("activeinfo").style.display="block"
        document.getElementById("activeinfo").style.display="flex"
    } else{
        document.getElementById("activeinfo").style.display="none"
    }
})

let checkrecipescatagori=""

function vegcheck(){
    veg.style.backgroundColor="#12bf43"
    nonveg.style.backgroundColor="#4a4949"
    both.style.backgroundColor="#4a4949"
    checkrecipescatagori="veg"
    document.getElementById("seeitem").style.display="block"
}

function nonvegcheck(){
    nonveg.style.backgroundColor="#12bf43"
    veg.style.backgroundColor="#4a4949"
    both.style.backgroundColor="#4a4949"
    checkrecipescatagori="nonveg"
    document.getElementById("seeitem").style.display="block"
}

function bothcheck(){
    both.style.backgroundColor="#12bf43"
    veg.style.backgroundColor="#4a4949"
    nonveg.style.backgroundColor="#4a4949"
    checkrecipescatagori="both"
    document.getElementById("seeitem").style.display="block"
}


function backpage(){
    console.log("sujit")
 document.getElementById("infosection").style.display="none"
 document.getElementById("welcomsection").style.display="block"
 document.getElementById("welcomsection").style.display="flex"
   
}


function showbar(idofbar){
    if(idofbar == "recipesbar"){
        document.getElementById(idofbar).style.display="block"
        document.getElementById(idofbar).style.animation="showbar 1 0.3s"
    }
    document.getElementById(idofbar).style.display="block"
    document.getElementById(idofbar).style.animation="showbar1 1 0.3s"
}

function donnotshowbar(idofbar){
    document.getElementById(idofbar).style.display="none"
}


let color=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]
function colorchange(){
    let finalcolor="#"
    for(let i=0;i<6;i++){
        finalcolor+= color[setcolor()]
    }
    document.getElementById("edit").style.borderColor=finalcolor
  document.getElementById("foodrecommender").style.color=finalcolor;


  document.getElementById("searchdiv").style.borderColor=finalcolor;
  return finalcolor;

}

function setcolor(){
    
    return Math.floor(Math.random()*color.length);

}
setInterval(colorchange,2000)

let vegitem=[
    "./assets/looseweight/above10year/veg/cauliflower-dajita-skillet.webp",

    "./assets/looseweight/above10year/veg/chickpea-pesto-burgers.webp",

    "./assets/looseweight/above10year/veg/chipotle-tofu-tacos.webp",


    "./assets/looseweight/above10year/veg/easy-peanut-noodles.webp",

    "./assets/looseweight/above10year/veg/lentil_Blwls_with Fried Eggs and Greens.webp",

    "./assets/looseweight/above10year/veg/mushroom-french-dip.webp",

    "./assets/looseweight/above10year/veg/pasta-and-white-bean-soup.webp",

    "./assets/looseweight/above10year/veg/roasted-brussels-sprouts-pasta-with-lemon.webp",

    "./assets/looseweight/above10year/veg/sweet-potato-black-bean-tacos.webp",

    "./assets/looseweight/above10year/veg/vegetarian-mushroom-paprikash.webp"

]

function puporalitem(){

}

