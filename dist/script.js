
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

