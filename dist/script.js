
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



looseweight.style.animation="move 1 2s"
maintainweight.style.animation="move1 1 2s"
gainweight.style.animation="move 1 2s"
// document.querySelector("div").style.backgroundImage="./assets/bg_food.webp"


let feetcheck=false;
let feetvalue=0;

// feet.addEventListener("keypress",()=>{
//     // if(feet.value==''){
//     //     feetcheck=false;
//     //     console.log("sujit")
//     //     console.log(feet.value)
//     // } else{
//     //     console.log("panigrahi")
//     // feetvalue=feet.value;
//     // feetcheck=true;
//     // }


    
// })
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

weight.addEventListener("keypress",(e)=>{
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


function check1(){
    female.style.backgroundColor="#4a4949"
    male.style.backgroundColor="#12bf43"
}
function check2(){
    female.style.backgroundColor="#12bf43"
    male.style.backgroundColor="#4a4949"
}





