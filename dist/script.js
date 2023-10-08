
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
const age=document.getElementById("age")




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

function showhomepage(){
    document.getElementById("manusection").style.display="block";
    document.getElementById("infosection").style.display="none";
    addallid();

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
  document.getElementById("poopularRecipis").style.color=finalcolor;


  document.getElementById("searchdiv").style.borderColor=finalcolor;
  return finalcolor;

}

function setcolor(){
    
    return Math.floor(Math.random()*color.length);

}
setInterval(colorchange,2000)

// let vegitem=[
//     "./assets/looseweight/above10year/veg/cauliflower-dajita-skillet.webp",

//     "./assets/looseweight/above10year/veg/chickpea-pesto-burgers.webp",

//     "./assets/looseweight/above10year/veg/chipotle-tofu-tacos.webp",


//     "./assets/looseweight/above10year/veg/easy-peanut-noodles.webp",

//     "./assets/looseweight/above10year/veg/lentil_Blwls_with Fried Eggs and Greens.webp",

//     "./assets/looseweight/above10year/veg/mushroom-french-dip.webp",

//     "./assets/looseweight/above10year/veg/pasta-and-white-bean-soup.webp",

//     "./assets/looseweight/above10year/veg/roasted-brussels-sprouts-pasta-with-lemon.webp",

//     "./assets/looseweight/above10year/veg/sweet-potato-black-bean-tacos.webp",

//     "./assets/looseweight/above10year/veg/vegetarian-mushroom-paprikash.webp",



// ]

let cookitem=[
    // looseweight item
    [
        //  1 to 10 year
        [
            // item store start of veg
            [

            
                {
                    name:"Baked Fish with Quinoa and Steamed Broccoli",
                    itemimg:"./assets/looseweight/1to6year/veg/Baked Fish with Quinoa and Steamed Broccoli.jpeg",
                    ingredients:"Fish fillets (e.g., tilapia, cod, or salmon),Quinoa,Broccoli florets,Olive oil,Lemon juice,Garlic,Salt and pepper",
                    instruction:"Preheat the oven to 375°F (190°C),Season the fish fillets with olive oil, lemon juice, minced garlic, salt, and pepper.,Place the fish fillets on a baking sheet and bake for 15-20 minutes or until they are cooked through.Meanwhile, cook quinoa according to package instructions.Steam the broccoli until tender.Serve the baked fish over a bed of quinoa with steamed broccoli on the side."
                },

                {
                    name:"Baked Salmon with Roasted Veggies",
                    itemimg:"./assets/looseweight/1to6year/veg/Baked Salmon with Roasted Veggies.jpg",
                    ingredients:"Salmon fillets,Assorted vegetables (e.g., bell peppers, zucchini, carrots),Olive oil,Garlic powde,Paprika,Salt and pepper",
                    instruction:"Preheat the oven to 400°F (200°C).Toss the vegetables with olive oil, garlic powder, paprika, salt, and pepper.Place the salmon fillets and seasoned vegetables on a baking sheet.Bake for 15-20 minutes or until the salmon is cooked through and the veggies are tender."
                },


                {
                    name:"big_malai_paneer_dill_balls",
                    itemimg:"./assets/looseweight/1to6year/veg/big_malai_paneer_dill_balls,.jpg",
                 
                    ingredients:"Paneer (Indian cottage cheese),Fresh dill leaves,Cream (malai),Cornflour,Salt and pepper,Oil for frying",
                    instruction:"Grate the paneer and mix it with finely chopped dill leaves, cream, cornflour, salt, and pepper.Shape the mixture into small balls.Heat oil in a pan and deep-fry the paneer balls until they turn golden brown.Serve hot with your favorite dipping sauce."
                },

                {
                    name:"Grilled Shrimp Skewers with Whole Wheat Pasta Salad",
                    itemimg:"./assets/looseweight/1to6year/veg/Grilled Shrimp Skewers with Whole Wheat Pasta Salad.jpg",
                  
                    ingredients:"Shrimp,Whole wheat pasta,Cherry tomatoes,Cucumber,Red onion,Olive oil,Lemon juice,Fresh basil,Salt and peppe",
                    instruction:"Thread shrimp onto skewers and grill until they turn pink and opaque.Cook the whole wheat pasta according to package instructions and let it cool.Combine pasta with halved cherry tomatoes, diced cucumber, sliced red onion, olive oil, lemon juice, fresh basil, salt, and pepper.Serve the grilled shrimp skewers over the pasta salad."
                },

                {
                    name:"Papaya-Pear-and-Yoghurt-Smoothie",
                    itemimg:"./assets/looseweight/1to6year/veg/Papaya-Pear-and-Yoghurt-Smoothie.jpeg",
                 
                    ingredients:"1 cup ripe papaya, peeled, seeded, and cubed ,1 ripe pear, peeled, cored, and chopped,1 cup plain yogurt (you can use Greek yogurt for added creaminess),1/2 cup milk (you can use dairy or non-dairy milk like almond or soy),2 tablespoons honey or maple syrup (adjust to taste),1/2 teaspoon vanilla extract (optional), Ice cubes (optional, for a colder smoothie)",
                    instruction:"Prepare the Fruits.Blend the Fruits and Yogurt.Add Sweetener and Flavor (Optional).Blend Until Smooth.Taste and Adjust.Serve.Enjoy."
                },

                {
                    name:"Grilled-Chicken-Tenders",
                    itemimg:"./assets/looseweight/1to6year/veg/Grilled-Chicken-Tenders.jpg",
                    
                    ingredients:"1 pound (about 450g) chicken tenders or boneless, skinless chicken breasts cut into strips,2 tablespoons olive oil,2 cloves garlic, minced,1 teaspoon paprika,1/2 teaspoon dried thyme (or use fresh thyme if available),1/2 teaspoon dried oregano,1/2 teaspoon salt (adjust to taste),1/4 teaspoon black pepper (adjust to taste,),Lemon wedges (for serving, optional).",
                    instruction:"Prepare the Marinade.,Marinate the Chicken.,Preheat the Grill.,Grill the Chicken.,Serve."
                },

                {
                    name:"Healthy Chicken Burrito Bowls",
                    itemimg:"./assets/looseweight/1to6year/veg/Healthy Chicken Burrito Bowls.jpg",
                 
                    ingredients:"1 pound (about 450g) boneless, skinless chicken breasts, cut into bite-sized pieces,1 tablespoon olive oil,1 teaspoon chili powder,1/2 teaspoon ground cumin,1/2 teaspoon garlic powder,Salt and pepper to taste,1 cup long-grain brown rice (or your choice of rice),2 cups water or chicken broth for cooking the rice,1 lime, juiced,Fresh cilantro, chopped (for garnish),1 can (15 ounces) black beans, drained and rinsed,1/2 teaspoon ground cumin,Salt to taste,1 cup diced tomatoes (fresh or canned),1/2 cup diced red onion,1/2 cup diced bell peppers (any color),1/4 cup chopped fresh cilantro,Juice of 1 lime,Salt and pepper to taste,Shredded lettuce or spinach,Sliced avocado or guacamole,Grated cheese,Greek yogurt or sour cream",

                    instruction:"Cook the Rice.,Prepare the Chicken.,Prepare the Black Beans.,Prepare the Salsa.,Assemble the Burrito Bowls.,Serve.,"
                },

                {
                    name:"Lean Beef and Veggie Tacos",
                    itemimg:"./assets/looseweight/1to6year/veg/Lean Beef and Veggie Tacos.jpg",
                    
                    ingredients:"1 pound (about 450g) lean ground beef (90% lean or higher),1 small onion, finely chopped,2 cloves garlic, minced,1 teaspoon chili powder,1/2 teaspoon ground cumin,1/2 teaspoon paprika,Salt and pepper to taste,1 tablespoon olive oil (for cooking),Bell peppers (red, green, or yellow), thinly sliced,Red onion, thinly sliced,Tomatoes, diced,Avocado slices or guacamole,Fresh cilantro leaves, chopped,Shredded lettuce or spinach,Salsa (store-bought or homemade),Lime wedges (for garnish),8-10 small tortillas (corn or whole wheat)",
                    instruction:"Prepare the Beef Filling.,Prepare the Veggie Toppings.,Warm the Tortillas.,Assemble the Tacos.,Add Veggie Toppings.,Salsa and Lime Wedges.,Serve.,"
                },

                {
                    name:"paneer tika",
                    itemimg:"./assets/looseweight/1to6year/veg/paneer tika.jpg",
                    
                    ingredients:"250 grams of paneer (Indian cottage cheese), cut into cubes or rectangles,1/2 cup thick yogurt (Greek yogurt or hung curd works well),1 tablespoon ginger-garlic paste,1 tablespoon red chili powder (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon garam masala powder,1 teaspoon ground coriander (coriander powder),1 teaspoon ground cumin (cumin powder),1 tablespoon lemon juice,Salt to taste,1-2 tablespoons vegetable oil,Skewers (wooden or metal, if using wooden skewers, soak them in water for 30 minutes before using),Cooking oil or cooking spray for grilling,Sliced bell peppers, onions, and tomatoes (optional, for skewering with paneer)",
                    instruction:"Prepare the Marinade.,Marinate the Paneer.,Skewer the Paneer and Veggies (Optional).,Preheat the Grill.,Grill the Paneer.,Serve.,"
                },

                {
                    name:"Paneer-Pasanda",
                    itemimg:"./assets/looseweight/1to6year/veg/Paneer-Pasanda.jpg",
                    ingredients:"250 grams of paneer (Indian cottage cheese),2 tablespoons grated paneer,2 tablespoons finely chopped cashews,1 tablespoon raisins,1/2 teaspoon garam masala powder,Salt to taste,A pinch of black pepper,1 tablespoon fresh coriander leaves, chopped,1 tablespoon fresh cream or malai,2 large tomatoes, blanched and pureed,1/2 cup onion, finely chopped,2 tablespoons fresh cream or malai,1 tablespoon yogurt,1 tablespoon ginger-garlic paste,1/2 teaspoon red chili powder (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon coriander powder,1/2 teaspoon garam masala powder,1/2 teaspoon sugar,2 tablespoons cooking oil or ghee (clarified butter),Salt to taste,Fresh coriander leaves for garnish,Slivered almonds and cashews for garnish (optional)",
                    
                    instruction:"For Paneer Filling.,For the Gravy.,For Assembling Paneer Pasanda.,For Assembling Paneer Pasanda.,"
                }
            ],

            // item store start of non veg

            [

            
                {
                    name:"Chettinad_Muttai_Masala",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Chettinad_Muttai_Masala_Recipe.jpg",
                    ingredients:"4-6 boiled eggs (for kids, you can use fewer eggs),2 tablespoons oil,1 large onion, finely chopped,2-3 tomatoes, finely chopped,1-2 green chilies, slit (adjust to your child's spice preference),1 sprig curry leaves,1 teaspoon ginger-garlic paste,1/4 teaspoon turmeric powder,1/2 teaspoon mild red chili powder (adjust to your child's spice preference),1 teaspoon coriander powder,1/4 teaspoon cumin powder,A pinch of garam masala (optional),Salt to taste,Fresh coriander leaves for garnish",

                    instruction:"Follow the same instructions as provided earlier for Chettinad Muttai Masala, but use milder spices to suit the taste of children aged 1 to 6."
                },

                {
                    name:"1to6year/nonveg/Chicken and Vegetable Stir-Fry",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Chicken and Vegetable Stir-Fry.jpeg",
                    ingredients:"1/2 cup boneless chicken pieces, diced,1/2 cup mixed vegetables (carrots, peas, bell peppers), finely chopped,1/2 teaspoon ginger-garlic paste,1/4 teaspoon turmeric powder,1/4 teaspoon mild chili powder (adjust to your child's spice preference),1/2 teaspoon soy sauce (optional),1 tablespoon oil,Salt to taste",
                    instruction:"Heat oil in a pan or skillet over medium heat. Add ginger-garlic paste and sauté for a minute. Add chicken pieces and cook until they are no longer pink.Add mixed vegetables, turmeric powder, mild chili powder, and salt. Stir-fry for a few minutes until the vegetables are tender. If using soy sauce, add it and stir well.Serve this mild and nutritious stir-fry to your child."
                },


                {
                    name:"Fish_fry_original",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Fish_fry_original.jpg",
                    ingredients:"4-6 fish fillets (choose a white fish like tilapia or cod),1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Oil for frying",
                    instruction:"Mix red chili powder, turmeric powder, cumin powder, coriander powder, and salt to make a spice rub.Rub the spice mix evenly on both sides of the fish fillets.Heat oil in a frying pan over medium-high heat.Fry the fish fillets until they are crispy and golden brown on both sides. Drain excess oil on paper towels before serving."
                },

                {
                    name:"Goan_Lady_Fish_Curry",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Goan_Lady_Fish_Curry.jpg",
                    ingredients:"500 grams ladyfish (mackerel or similar small fish),1 onion, finely chopped,2 tomatoes, finely chopped,2-3 green chilies, slit (adjust to your spice preference),1/2 cup coconut milk,1 teaspoon ginger-garlic paste,1/2 teaspoon turmeric powder,1 teaspoon mild red chili powder (adjust to your spice preference),1 teaspoon coriander powder,1/4 teaspoon cumin powder,1-2 tablespoons oil,Salt to taste,Fresh coriander leaves for garnish",
                    instruction:"Clean the ladyfish and marinate it with a mixture of turmeric powder, mild red chili powder, coriander powder, and salt. Set it aside for 15-20 minutes.Heat oil in a pan or skillet over medium heat. Add chopped onions and sauté until they turn translucent. Add ginger-garlic paste and cook for a few minutes until the raw smell disappears. Add tomatoes, green chilies, turmeric powder, and cumin powder. Cook until the tomatoes become soft.Add the marinated fish and gently stir. Pour in the coconut milk and let it simmer until the fish is cooked through.Garnish with fresh coriander leaves and serve with steamed rice."
                },

                {
                    name:"Grilled Chicken Breast with Lemon and Herbs",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Grilled Chicken Breast with Lemon and Herbs.jpeg",
                    ingredients:"2 boneless, skinless chicken breasts,2 tablespoons olive oil,2 cloves garlic, minced,1 lemon, juiced,1 teaspoon dried thyme,Salt and pepper to taste",
                    instruction:"Preheat your grill or grill pan.In a bowl, mix olive oil, minced garlic, lemon juice, dried thyme, salt, and pepper.Brush the chicken breasts with the marinade.Grill the chicken for 6-8 minutes per side or until cooked through."
                },

                {
                    name:"Grilled Tandoori Chicken",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Grilled Tandoori Chicken.jpeg",
                    ingredients:"4 boneless, skinless chicken thighs,1/2 cup plain Greek yogurt,2 tablespoons tandoori spice mix,Juice of 1 lemon,Salt to taste",
                    instruction:" In a bowl, mix yogurt, tandoori spice mix, lemon juice, and salt. Coat chicken thighs with the marinade. Grill for about 6-8 minutes per side or until fully cooked."
                },

                {
                    name:"Grilled Tofu and Vegetable Skewers with Chicken",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Grilled Tofu and Vegetable Skewers with Chicken.jpeg",
                    ingredients:"Firm tofu, cubed,Bell peppers, zucchini, cherry tomatoes, and mushrooms,Marinade: olive oil, balsamic vinegar, garlic, salt, and pepper,hicken breast, cubed (optional)",
                    instruction:" Soak wooden skewers in water for 30 minutes.Thread tofu, vegetables, and chicken onto skewers.Brush with marinade.Grill for about 10-15 minutes until veggies are tender and chicken (if used) is cooked through."
                },

                {
                    name:"Lean Beef and Broccoli Stir-Fry",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Lean Beef and Broccoli Stir-Fry.jpeg",
                    ingredients:"1 pound lean beef strips,2 cups broccoli florets,2 cloves garlic, minced,1/4 cup low-sodium soy sauce,2 tablespoons olive oil",
                    instruction:"Heat olive oil in a skillet or wok over medium-high heat. Add garlic and beef, stir-fry until browned.Add broccoli and soy sauce, cook for an additional 5-7 minutes."
                },

                {
                    name:"Lemon Garlic Shrimp and Asparagus",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Lemon Garlic Shrimp and Asparagus.jpeg",
                    ingredients:"1 pound large shrimp, peeled and deveined,1 bunch asparagus, trimmed,3 cloves garlic, minced,2 tablespoons olive oil,Juice of 1 lemon,Salt and pepper to taste",
                    instruction:" Preheat oven to 400°F (200°C).In a baking dish, toss asparagus, shrimp, garlic, olive oil, lemon juice, salt, and pepper. Bake for 10-15 minutes until shrimp are pink and asparagus is tender."
                },

                {
                    name:"Shrimp Stir-Fry.jpeg",
                    itemimg:"./assets/looseweight/1to6year/nonveg/Shrimp Stir-Fry.jpeg",
                    ingredients:"1 pound large shrimp, peeled and deveined,2 cups mixed vegetables (e.g., bell peppers, broccoli, carrots),2 cloves garlic, minced,1 tablespoon ginger, minced,2 tablespoons low-sodium soy sauce,1 tablespoon olive oil",
                    instruction:"Heat olive oil in a skillet or wok over medium-high heat.Add garlic and ginger, sauté for 30 seconds. Add shrimp and cook until pink, about 3-4 minutes.Add vegetables and soy sauce, stir-fry until tender, about 5-7 minutes."
                }
            ]


        ],
        
        // above10year
        [
            // veg
            [
                
                {
                    name:"cauliflower-dajita-skille",
                    itemimg:"./assets/looseweight/above10year/veg/cauliflower-dajita-skillet.webp",
                    ingredients:"1 medium cauliflower, cut into florets,1 bell pepper, thinly sliced,1 onion, thinly sliced,2 cloves garlic, minced,1 tablespoon olive oil,2 teaspoons fajita seasoning,Salt and pepper to taste,Optional toppings: grated cheese, salsa, sour cream, guacamole",
                    instruction:"Heat olive oil in a large skillet over medium-high heat.Add onion, bell pepper, and garlic. Sauté until softened.Add cauliflower florets and fajita seasoning. Cook until cauliflower is tender and slightly charred.Season with salt and pepper to taste.Serve in tortillas or over rice with your choice of toppings."
                },

                {
                    name:"chickpea-pesto-burgers",
                    itemimg:"./assets/looseweight/above10year/veg/chickpea-pesto-burgers.webp",
                    ingredients:"2 cans (15 oz each) chickpeas, drained and rinsed,1/2 cup pesto sauce (store-bought or homemade),1/2 cup breadcrumbs,1 egg (or a flax egg for a vegan version),Salt and pepper to taste,Burger buns and toppings of your choice",
                    instruction:"In a food processor, blend chickpeas until mostly smooth but with some texture remaining.Transfer the chickpea mixture to a bowl and add pesto, breadcrumbs, egg, salt, and pepper. Mix until well combined.Form the mixture into burger patties.Heat a grill or skillet over medium heat and cook the patties until golden brown on both sides.Serve on burger buns with your favorite toppings."
                },

                {
                    name:"chipotle-tofu-tacos",
                    itemimg:"./assets/looseweight/above10year/veg/chipotle-tofu-tacos.webp",
                    ingredients:"1 block extra-firm tofu, pressed and cubed,2 tablespoons chipotle sauce (adjust to your spice preference),1 tablespoon olive oil,Taco shells or tortillas,Toppings: lettuce, diced tomatoes, avocado, salsa, sour cream,",
                    instruction:"In a bowl, mix tofu cubes with chipotle sauce and olive oil.Heat a skillet over medium-high heat and cook tofu until browned and slightly crispy.Assemble tacos with tofu and your choice of toppings."
                },

                {
                    name:"easy-peanut-noodles",
                    itemimg:"./assets/looseweight/above10year/veg/easy-peanut-noodles.webp",
                    ingredients:"8 oz noodles (such as spaghetti or udon),1/2 cup peanut butter,3 tablespoons soy sauce,2 tablespoons rice vinegar,2 tablespoons honey or maple syrup,2 cloves garlic, minced,1 teaspoon grated ginger,Crushed red pepper flakes (optional),Chopped green onions and peanuts for garnish",
                    instruction:"Cook noodles according to package instructions, then drain and set aside.In a bowl, whisk together peanut butter, soy sauce, rice vinegar, honey, garlic, ginger, and red pepper flakes if using.Toss the cooked noodles with the peanut sauce.Serve garnished with chopped green onions and peanuts."
                },

                {
                    name:"lentil_Blwls_with Fried Eggs and Greens",
                    itemimg:"./assets/looseweight/above10year/veg/lentil_Blwls_with Fried Eggs and Greens.webp",
                    ingredients:"1 cup dried green or brown lentils,3 cups vegetable broth or water,1 bay leaf,Salt and pepper to taste,4 cups fresh greens (such as spinach, kale, or Swiss chard), washed and chopped,2 cloves garlic, minced,1 tablespoon olive oil,Salt and pepper to taste,4 large eggs,2 tablespoons olive oil,Salt and pepper to taste,Grated Parmesan cheese,Hot sauce,Red pepper flakes,Sliced avocado,Salsa",
                    instruction:"Cook the Lentils.,Sauté the Greens.,Fry the Eggs.,Assemble the Lentil Bowls.,Add Optional Toppings.,Serve.,"
                },

                {
                    name:"mushroom-french-dip",
                    itemimg:"./assets/looseweight/above10year/veg/mushroom-french-dip.webp",
                    ingredients:"1 pound mushrooms, sliced,1 onion, thinly sliced,4 cloves garlic, minced,2 tablespoons olive oil,4 cups vegetable broth,2 tablespoons soy sauce,1 teaspoon dried thyme,Salt and pepper to taste,4 French rolls or baguettes,Swiss or provolone cheese slices (optional),Au jus for dipping (extra vegetable broth with soy sauce)",
                    instruction:"In a large skillet, heat olive oil over medium heat. Add mushrooms, onions, and garlic. Sauté until mushrooms are browned and onions are caramelized.Stir in vegetable broth, soy sauce, thyme, salt, and pepper. Simmer for about 10-15 minutes.Slice the rolls and fill them with the mushroom mixture and cheese if desired.Serve with a side of au jus for dipping."
                },

                {
                    name:"pasta-and-white-bean-soup",
                    itemimg:"./assets/looseweight/above10year/veg/pasta-and-white-bean-soup.webp",
                    ingredients:"8 oz pasta (any shape),2 cans (15 oz each) white beans, drained and rinsed,4 cups vegetable broth,1 onion, diced,2 carrots, diced,2 celery stalks, diced,2 cloves garlic, minced,1 teaspoon dried thyme,Salt and pepper to taste,Grated Parmesan cheese (optional)",
                    instruction:"In a large pot, sauté the onion, carrots, celery, and garlic in a bit of olive oil until softened.Add vegetable broth, white beans, thyme, salt, and pepper. Bring to a simmer.Stir in the pasta and cook until pasta is tender.Serve hot with a sprinkle of grated Parmesan cheese if desired."
                },


                {
                    name:"roasted-brussels-sprouts-pasta-with-lemon",
                    itemimg:"./assets/looseweight/above10year/veg/roasted-brussels-sprouts-pasta-with-lemon.webp",
                    ingredients:"12 oz Brussels sprouts, trimmed and halved,8 oz pasta,3 tablespoons olive oil,Zest and juice of 1 lemon,2 cloves garlic, minced,Red pepper flakes (optional),Grated Parmesan cheese,Salt and pepper to taste",
                    instruction:"Preheat the oven to 425°F (220°C).Toss Brussels sprouts with 2 tablespoons of olive oil, salt, and pepper. Roast for about 20-25 minutes or until browned and crispy.Cook pasta according to package instructions, then drain.In a large skillet, heat the remaining olive oil over medium heat. Add garlic and red pepper flakes (if using) and sauté briefly.Toss the cooked pasta with the roasted Brussels sprouts, lemon zest, and lemon juice.Serve with grated Parmesan cheese."
                },

                {
                    name:"sweet-potato-black-bean-tacos",
                    itemimg:"./assets/looseweight/above10year/veg/sweet-potato-black-bean-tacos.webp",
                    ingredients:"2 medium sweet potatoes, peeled and diced,can (15 oz) black beans, drained and rinsed,1 teaspoon chili powder,1/2 teaspoon cumin,Salt and pepper to taste,8 small tortillas,Toppings: avocado, salsa, shredded lettuce, sour cream, cheese",
                    instruction:"Preheat the oven to 400°F (200°C).Toss sweet potatoes with olive oil, chili powder, cumin, salt, and pepper. Roast for about 25-30 minutes or until tender.Heat the black beans in a saucepan over low heat.Warm the tortillas.Assemble tacos with roasted sweet potatoes, black beans, and your choice of toppings."
                },

                {
                    name:"vegetarian-mushroom-paprikash",
                    itemimg:"./assets/looseweight/above10year/veg/vegetarian-mushroom-paprikash.webp",
                    ingredients:"1 pound mushrooms, sliced,1 onion, diced,2 cloves garlic, minced,2 tablespoons olive oil,2 tablespoons sweet paprika,1 cup vegetable broth,1 cup sour cream (or a non-dairy alternative),Salt and pepper to taste,Chopped fresh parsley for garnish,Cooked egg noodles or rice for serving",
                    instruction:"In a large skillet, heat olive oil over medium heat. Add onions and garlic and sauté until softened.Add mushrooms and cook until they release their moisture and become tender.Stir in sweet paprika, vegetable broth, and sour cream. Simmer for a few minutes until the sauce thickens.Season with salt and pepper.Serve over cooked egg noodles or rice, garnished with chopped fresh parsley."
                }
            ],

            // nonveg
            [
                
                {
                    name:"Chettinad_Muttai_Masala_Recipe",
                    itemimg:"./assets/looseweight/above10year/nonveg/Chettinad_Muttai_Masala_Recipe.jpg",
                    ingredients:"4 eggs,2 onions, finely chopped,2 tomatoes, finely chopped,1/2 cup coconut milk,2-3 green chilies, slit,1/2 teaspoon turmeric powder,1 teaspoon red chili powder,1 teaspoon coriander powder,1/2 teaspoon cumin seeds,1/2 teaspoon mustard seeds,2-3 tablespoons oil,Salt to taste,Fresh coriander leaves for garnish",
                    instruction:"Heat oil in a pan and add cumin seeds and mustard seeds. Let them splutter.Add chopped onions and green chilies. Sauté until the onions turn translucent.Add the chopped tomatoes and cook until they become soft and the oil starts to separate.Add turmeric powder, red chili powder, coriander powder, and salt. Mix well.Pour in the coconut milk and simmer for a few minutes.Carefully break the eggs into the pan, one at a time. Cover and cook until the egg whites are set but the yolks are still runny.Garnish with fresh coriander leaves and serve hot with rice or roti."
                },

                {
                    name:"Fish_fry_original",
                    itemimg:"./assets/looseweight/above10year/nonveg/Fish_fry_original.jpg",

                    ingredients:"4 fish fillets (any white fish like cod or tilapia),1 cup all-purpose flour,2 teaspoons red chili powder,1 teaspoon turmeric powder,1 teaspoon cumin powder,Salt to taste,Oil for frying",

                    instruction:"In a bowl, mix the all-purpose flour, red chili powder, turmeric powder, cumin powder, and salt.Coat each fish fillet with this spice mixture evenly.Heat oil in a frying pan or deep fryer.Fry the fish fillets in hot oil until they are golden brown and crispy on both sides.Remove from oil and place them on a paper towel to drain excess oil.Serve hot with your choice of dipping sauce or chutney."
                },

                {
                    name:"Goan_Lady_Fish_Curry",
                    itemimg:"./assets/looseweight/above10year/nonveg/Goan_Lady_Fish_Curry.jpg",
                    ingredients:"500g ladyfish or any firm white fish,1 onion, finely chopped,2 tomatoes, chopped,1/2 cup coconut milk,1/2 teaspoon turmeric powder,1 teaspoon red chili powder,1 teaspoon cumin seeds,1 teaspoon mustard seeds,2-3 cloves garlic, minced,1-inch piece of ginger, minced,2-3 green chilies, slit,2 tablespoons oil,Salt to taste,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan and add cumin seeds and mustard seeds. Let them splutter.,Add chopped onions, green chilies, garlic, and ginger. Sauté until the onions turn translucent.,Add turmeric powder, red chili powder, and salt. Mix well.,Add the chopped tomatoes and cook until they become soft and the oil starts to separate.,Pour in the coconut milk and simmer for a few minutes.,Add the fish fillets and cook until they are cooked through.,Garnish with fresh cilantro leaves and serve hot with steamed rice."
                },

                {
                    name:"keema_balls",
                    itemimg:"./assets/looseweight/above10year/nonveg/keema_balls.jpg",
                    ingredients:"500g minced meat (chicken, lamb, or beef),1 onion, finely chopped,2-3 cloves garlic, minced,1-inch piece of ginger, minced,1/2 cup breadcrumbs,1 egg,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,Salt to taste,Oil for frying",

                    instruction:"In a mixing bowl, combine the minced meat, chopped onion, minced garlic, minced ginger, breadcrumbs, egg, red chili powder, turmeric powder, garam masala, and salt.Mix everything well until it forms a uniform mixture.Shape the mixture into small balls or patties.Heat oil in a frying pan.Fry the keema balls until they are golden brown and cooked through.Drain excess oil on a paper towel.Serve hot with your choice of chutney or sauce."
                },

                {
                    name:"Keema_Bhindi_Masala_Recipe",
                    itemimg:"./assets/looseweight/above10year/nonveg/Keema_Bhindi_Masala_Recipe.jpg",
                    ingredients:"250g minced meat (chicken, lamb, or beef),250g okra (bhindi), washed and chopped,1 onion, finely chopped,2 tomatoes, chopped,2 tablespoons oil,1 teaspoon cumin seeds,1 teaspoon ginger-garlic paste,1/2 teaspoon turmeric powder,1 teaspoon red chili powder,1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan and add cumin seeds. Let them splutter.,Add chopped onions and ginger-garlic paste. Sauté until the onions turn translucent.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Add turmeric powder, red chili powder, coriander powder, garam masala, and salt. Mix well.,Add the minced meat and cook until it's browned and cooked through.,In a separate pan, sauté the chopped okra until they are slightly crispy.,Add the sautéed okra to the meat mixture and mix well.,Garnish with fresh cilantro leaves and serve hot with rice or roti."
                },


                {
                    name:"/MEEN_VARUTHATHU__FISH_FRY__KERALA",
                    itemimg:"./assets/looseweight/above10year/nonveg/MEEN_VARUTHATHU__FISH_FRY__KERALA.jpg",
                    ingredients:"4 fish fillets (any white fish),2 tablespoons red chili powder,1/2 teaspoon turmeric powder,1 teaspoon black pepper powder,Salt to taste,Oil for frying",

                    instruction:"Mix red chili powder, turmeric powder, black pepper powder, and salt to make a spice rub.,Coat each fish fillet evenly with the spice rub.,Heat oil in a frying pan.,Fry the fish fillets until they are golden brown and crispy on both sides.,Remove from oil and place them on a paper towel to drain excess oil.,Serve hot with steamed rice or as a side dish."
                },

                {
                    name:"Sprouted_ragi_chicken_cutlet_recipe",
                    itemimg:"./assets/looseweight/above10year/nonveg/Sprouted_ragi_chicken_cutlet_recipe.jpg",
                    ingredients:"1 cup sprouted ragi (finger millet),250g ground chicken,1 onion, finely chopped,2 green chilies, finely chopped,1/2 teaspoon ginger-garlic paste,1/2 teaspoon garam masala,Salt to taste,Oil for shallow frying",

                    instruction:"Steam the sprouted ragi until it's soft and cooked.,In a mixing bowl, combine the cooked ragi, ground chicken, chopped onion, chopped green chilies, ginger-garlic paste, garam masala, and salt.,Mix everything well and shape the mixture into small patties.,Heat oil in a pan and shallow fry the patties until they are golden brown on both sides and cooked through.,Serve hot with ketchup or chutney."
                },

                {
                    name:"Stove_Top_Grilled__Smoked_Tandoori",

                    itemimg:"./assets/looseweight/above10year/nonveg/Stove_Top_Grilled__Smoked_Tandoori.jpg",
                    
                    ingredients:" chicken breasts or thighs,1 cup yogurt,2 tablespoons tandoori masala,1 tablespoon ginger-garlic paste,1 tablespoon lemon juice,Salt to taste,Oil for grilling",


                    instruction:"n a bowl, mix yogurt, tandoori masala, ginger-garlic paste, lemon juice, and salt to make a marinade.,Coat the chicken pieces with the marinade and let them marinate for at least 2 hours in the refrigerator.Heat a grill pan or a regular pan on the stove.Drizzle a little oil and grill the chicken pieces until they are cooked through and have grill marks.Serve hot with naan or rice."
                },

                {
                    name:"Tamil_Nadu_Style_Spicy_Egg_Fry_Recipe",
                    itemimg:"./assets/looseweight/above10year/nonveg/Tamil_Nadu_Style_Spicy_Egg_Fry_Recipe.jpg",
                    ingredients:"4 hard-boiled eggs, peeled,1 onion, finely chopped,2 tomatoes, chopped,2 tablespoons oil,1 teaspoon mustard seeds,1/2 teaspoon cumin seeds,1/2 teaspoon turmeric powder,1 teaspoon red chili powder,1 teaspoon coriander powder,Salt to taste,Fresh curry leaves for garnish",

                    instruction:"Heat oil in a pan and add mustard seeds and cumin seeds. Let them splutter.Add chopped onions and sauté until they turn golden brown.Add chopped tomatoes and cook until they become soft.Add turmeric powder, red chili powder, coriander powder, and salt. Mix well.Cut the hard-boiled eggs in half and add them to the pan, cut side down.Fry the eggs until they are slightly browned on the cut side.Garnish with fresh curry leaves and serve as a side dish or with rice."
                },

                {
                    name:"Tawa_Fry_Crispy_Pomfret_edited",

                    itemimg:"./assets/looseweight/above10year/nonveg/Tawa_Fry_Crispy_Pomfret_edited.jpg",

                    ingredients:"2 whole pomfrets, cleaned and gutted,1 tablespoon ginger-garlic paste,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,2 tablespoons rice flour,2 tablespoons besan (gram flour),Oil for frying,Fresh coriander leaves for garnish (optional),Lemon wedges for serving",

                    instruction:"In a mixing bowl, combine ginger-garlic paste, red chili powder, turmeric powder, cumin powder, coriander powder, and salt to make a marinade.Make two to three deep slits on each side of the pomfrets. This helps the marinade penetrate and the fish to cook evenly.Apply the marinade generously over the pomfrets, making sure to get it inside the slits as well. Let the fish marinate for at least 30 minutes in the refrigerator.In a shallow plate or dish, mix the rice flour and besan together.Heat a tawa (griddle) or a frying pan on medium-high heat. Add enough oil to shallow fry the pomfrets.Dredge each marinated pomfret in the rice flour and besan mixture, ensuring they are evenly coated. Shake off any excess flour.Carefully place the coated pomfrets on the hot tawa with the skin side down. You can cook two pomfrets at a time if your tawa is large enough.Fry the pomfrets for about 4-5 minutes on each side or until they turn crispy and golden brown. Adjust the cooking time depending on the size of the pomfrets.Once the pomfrets are cooked through and crispy on both sides, remove them from the tawa and place them on a plate lined with paper towels to drain excess oil.Garnish with fresh coriander leaves if desired and serve hot with lemon wedges."
                }
            ]
        ]
    ],

    // maintainweight item
    [
        //  1 to 10 year
        [
            // veg 
            [
                {
                    name:"Banana and Nut Butter Sandwich",
                    itemimg:"./assets/maintainweight/1to10years/veg/Banana and Nut Butter Sandwich.jpeg",

                    ingredients:"2 slices of whole-grain bread,1 ripe banana,2 tablespoons of your favorite nut butter (such as peanut butter or almond butter),Honey or maple syrup (optional),Cinnamon (optional)",

                    instruction:"Start by toasting the slices of whole-grain bread until they're golden brown.,While the bread is toasting, peel the ripe banana and slice it into thin rounds.,Once the bread is toasted, spread a tablespoon of nut butter on each slice.,Arrange the banana slices evenly on one of the slices of bread.,If desired, drizzle a bit of honey or maple syrup over the banana for added sweetness and sprinkle some cinnamon on top.,Place the other slice of bread on top to form a sandwich.,Slice the sandwich in half diagonally if you prefer, and it's ready to eat!"
                },

                {
                    name:"Cheesy Baked Broccoli",
                    itemimg:"./assets/maintainweight/1to10years/veg/Cheesy Baked Broccoli",

                    ingredients:"1 head of broccoli, cut into florets,1 cup shredded cheddar cheese,2 tablespoons olive oil,Salt and pepper to taste",
                   
                    instruction:"Preheat your oven to 400°F (200°C).,Place the broccoli florets on a baking sheet and drizzle with olive oil. Toss to coat them evenly.,Sprinkle salt and pepper over the broccoli to season.,Sprinkle the shredded cheddar cheese evenly over the broccoli.,Bake in the preheated oven for about 15-20 minutes or until the broccoli is tender and the cheese is melted and bubbly.,Remove from the oven and serve immediately."
                },

                {
                    name:"Homemade Veggie Pizza",
                    itemimg:"./assets/maintainweight/1to10years/veg/Homemade Veggie Pizza.jpeg",
                    ingredients:"Pizza dough (store-bought or homemade),Tomato sauce or pizza sauce,Mozzarella cheese, shredded,Assorted veggies (e.g., bell peppers, onions, mushrooms, spinach, olives),Olive oil,Italian seasoning (optional),Red pepper flakes (optional)",
                    
                    instruction:"Preheat your oven according to the pizza dough instructions (usually around 450°F or 230°C).,Roll out the pizza dough on a floured surface to your desired thickness.,Transfer the dough to a pizza pan or baking sheet.,Spread a layer of tomato or pizza sauce over the dough.,Sprinkle a generous amount of shredded mozzarella cheese over the sauce.,Add your favorite veggies and any additional toppings you like.,Drizzle a little olive oil over the top and sprinkle with Italian seasoning and red pepper flakes if desired.,Bake in the preheated oven for about 12-15 minutes, or until the crust is golden and the cheese is bubbly and lightly browned.,Slice and serve your homemade veggie pizza!"
                },

                {
                    name:"Mashed Sweet Potatoes",
                    itemimg:"./assets/maintainweight/1to10years/veg/Mashed Sweet Potatoes.jpeg",
                    ingredients:"4 medium sweet potatoes,2 tablespoons butter,1/4 cup milk (or non-dairy alternative),Salt and pepper to taste",

                    instruction:"Peel the sweet potatoes and cut them into chunks.,Place the sweet potato chunks in a pot of boiling water and cook until they are tender (about 15-20 minutes).Drain the sweet potatoes and return them to the pot.Add the butter, milk, salt, and pepper to the pot.Use a potato masher or a hand mixer to mash the sweet potatoes until smooth and creamy.,Adjust the seasoning and milk to your taste and consistency preferences.,Serve the mashed sweet potatoes hot."
                },

                {
                    name:"Quinoa Salad",
                    itemimg:"./assets/maintainweight/1to10years/veg/Quinoa Salad.jpeg",
                    ingredients:"1 cup quinoa,2 cups water or vegetable broth,1 cucumber, diced,1 bell pepper, diced,1 cup cherry tomatoes, halved,1/2 red onion, finely chopped,1/4 cup fresh parsley, chopped,1/4 cup olive oil,2 tablespoons lemon juice,Salt and pepper to taste",

                    instruction:"Rinse the quinoa thoroughly under cold water.In a saucepan, bring 2 cups of water or vegetable broth to a boil. Add the quinoa, reduce the heat to low, cover, and simmer for about 15-20 minutes or until the liquid is absorbed and the quinoa is cooked.Fluff the cooked quinoa with a fork and let it cool.In a large bowl, combine the cooled quinoa, diced cucumber, diced bell pepper, cherry tomatoes, chopped red onion, and fresh parsley.In a small bowl, whisk together the olive oil and lemon juice to create the dressing.Drizzle the dressing over the salad and toss to coat all the ingredients evenly.Season with salt and pepper to taste.Serve the quinoa salad chilled or at room temperature."
                },

                {
                    name:"fruit Smoothie",
                    itemimg:"./assets/maintainweight/1to10years/veg/ruit Smoothie.jpeg",
                    ingredients:"1 cup mixed fresh or frozen fruits (e.g., bananas, berries, mangoes),1/2 cup yogurt (Greek yogurt or a dairy-free alternative),1/2 cup milk (dairy or non-dairy),1 tablespoon honey or maple syrup (optional),Ice cubes (optional)",

                    instruction:"Place all the ingredients in a blender.Blend until smooth and creamy.Taste and add honey or maple syrup for sweetness if needed.If you prefer a thicker consistency, add ice cubes and blend again.Pour the smoothie into a glass and serve immediately."
                },

                {
                    name:"Spinach and Cheese Stuffed Pasta Shells",
                    itemimg:"./assets/maintainweight/1to10years/veg/Spinach and Cheese Stuffed Pasta Shells.jpeg",
                    ingredients:"16 jumbo pasta shells,2 cups ricotta cheese,1 cup shredded mozzarella cheese,1/2 cup grated Parmesan cheese,1 cup fresh spinach, chopped,1 teaspoon Italian seasoning,Salt and pepper to taste,2 cups marinara sauce",

                    instruction:"Cook the pasta shells according to the package instructions until al dente. Drain and set aside.n a mixing bowl, combine ricotta cheese, mozzarella cheese, Parmesan cheese, egg, chopped spinach, Italian seasoning, salt, and pepper.Preheat your oven to 350°F (175°C).Stuff each cooked pasta shell with the cheese and spinach mixture.Spread a thin layer of marinara sauce on the bottom of a baking dish.Arrange the stuffed shells in the baking dish.Pour the remaining marinara sauce over the top.Cover with aluminum foil and bake for about 25-30 minutes, until heated through.Remove the foil and bake for an additional 10-15 minutes until the cheese is bubbly and slightly browned.Serve hot."
                },

                {
                    name:"Vegetable and Cheese Quesadillas",
                    itemimg:"./assets/maintainweight/1to10years/veg/Vegetable and Cheese Quesadillas.webp",
                    ingredients:"4 large flour tortillas,1 cup shredded cheddar cheese,1 cup diced mixed vegetables (bell peppers, onions, mushrooms, etc.),1 tablespoon olive oil,Optional toppings: sour cream, salsa, guacamole",

                    instruction:"Heat olive oil in a skillet over medium heat.Add the diced vegetables and sauté until they are tender, about 5-7 minutes.Lay out one tortilla and sprinkle a quarter of the shredded cheese evenly over half of it.Add a quarter of the sautéed vegetables on top of the cheese.Fold the other half of the tortilla over to cover the cheese and vegetables.Repeat this process for the remaining tortillas.Heat a clean skillet or griddle over medium-high heat.Cook each quesadilla for about 2-3 minutes on each side, or until the tortilla is crispy and the cheese is melted.Remove from heat, slice into wedges, and serve with your choice of toppings."
                },

                {
                    name:"Vegetable and Lentil Soup",
                    itemimg:"./assets/maintainweight/1to10years/veg/Vegetable and Lentil Soup.jpeg",
                    ingredients:"1 cup dried lentils (green or brown), rinsed and drained,8 cups vegetable broth,2 carrots, diced2 celery stalks, diced,1 onion, chopped,2 cloves garlic, minced,1 cup diced tomatoes (canned or fresh),1 cup diced mixed vegetables (e.g., zucchini, bell peppers),1 teaspoon dried thyme,1 teaspoon dried oregano,Salt and pepper to taste,Olive oil for sautéing (optional)",

                    instruction:"In a large pot, heat olive oil over medium heat (or use a bit of vegetable broth to sauté if oil-free).Add the chopped onion, carrots, and celery. Sauté for about 5 minutes until the vegetables begin to soften.Add the minced garlic and sauté for an additional minute until fragrant.Pour in the vegetable broth and add the lentils, diced tomatoes, mixed vegetables, dried thyme, and dried oregano.Season with salt and pepper to taste.Bring the soup to a boil, then reduce the heat to a simmer.Cover and cook for about 25-30 minutes, or until the lentils and vegetables are tender.Taste and adjust seasoning if needed.Serve hot."
                },

                {
                    name:"Vegetable Stir-Fry",
                    itemimg:"./assets/maintainweight/1to10years/veg/Vegetable Stir-Fry.jpeg",
                    ingredients:"2 cups mixed vegetables (e.g., broccoli, bell peppers, carrots, snap peas),1 tablespoon vegetable oil,2 cloves garlic, minced,1-inch piece of ginger, minced,1/4 cup soy sauce or stir-fry sauce,2 tablespoons honey or maple syrup (optional for sweetness),Cooked rice or noodles for serving",

                    instruction:"Heat the vegetable oil in a large skillet or wok over high heat.,Add the minced garlic and ginger and stir-fry for about 30 seconds until fragrant.Add the mixed vegetables to the skillet and stir-fry for about 3-5 minutes until they are tender-crisp.In a small bowl, whisk together the soy sauce and honey (if using).Pour the sauce over the vegetables and stir-fry for an additional 2 minutes to coat the vegetables evenly.Remove from heat.Serve the vegetable stir-fry over cooked rice or noodles."
                }
            ],

            // nonveg
            [
                {
                    name:"Baked Chicken Tenders",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Baked Chicken Tenders.jpeg",
                    ingredients:"1 pound chicken tenders or boneless, skinless chicken breasts, cut into strips,1 cup breadcrumbs (seasoned or plain),1/2 cup grated Parmesan cheese,1 teaspoon paprika,1/2 teaspoon garlic powder,1/2 teaspoon onion powder,Salt and pepper to taste,2 eggs, beaten",
                    instruction:"Preheat your oven to 400°F (200°C) and grease a baking sheet.In a shallow dish, combine the breadcrumbs, grated Parmesan cheese, paprika, garlic powder, onion powder, salt, and pepper.Dip each chicken strip into the beaten eggs, allowing any excess to drip off.Roll the chicken strip in the breadcrumb mixture, pressing the breadcrumbs onto the chicken to adhere.Place the coated chicken strips on the greased baking sheet.Bake in the preheated oven for about 15-20 minutes or until the chicken is cooked through and the coating is golden brown and crispy.Serve the baked chicken tenders with your favorite dipping sauce."
                },

                {
                    name:"nonveg/Baked Cod with Herbs",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Baked Cod with Herbs.jpeg",
                    ingredients:"4 cod fillets,2 tablespoons olive oil,2 cloves garlic, minced,1 lemon, thinly sliced,2 tablespoons fresh herbs (such as parsley, thyme, or dill), chopped,Salt and pepper to taste",

                    instruction:"Preheat your oven to 375°F (190°C).Place the cod fillets in a baking dish.Drizzle olive oil over the cod fillets and sprinkle minced garlic, chopped fresh herbs, salt, and pepper on top.Lay lemon slices over the cod fillets.Cover the baking dish with aluminum foil.Bake in the preheated oven for about 15-20 minutes, or until the cod flakes easily with a fork and is cooked through.Serve the baked cod with the lemon slices and herbs as a garnish."
                },

                {
                    name:"nonveg/Beef and Vegetable Stir-Fry",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Beef and Vegetable Stir-Fry.jpeg",
                    ingredients:"1 pound beef sirloin or flank steak, thinly sliced,2 tablespoons vegetable oil,2 cloves garlic, minced,1-inch piece of ginger, minced,2 cups mixed vegetables (e.g., bell peppers, broccoli, carrots, snap peas),1/4 cup soy sauce,2 tablespoons oyster sauce (optional),1 tablespoon brown sugar,Cooked rice for serving",

                    instruction:"In a bowl, combine the soy sauce, oyster sauce (if using), and brown sugar. Stir until the sugar is dissolved.Heat the vegetable oil in a large skillet or wok over high heat.Add the minced garlic and ginger and stir-fry for about 30 seconds until fragrant.Add the thinly sliced beef and stir-fry for 2-3 minutes until it's no longer pink. Remove the beef from the skillet and set it aside.In the same skillet, add the mixed vegetables and stir-fry for about 3-5 minutes until they are tender-crisp.Return the cooked beef to the skillet and pour the sauce over the beef and vegetables.Stir-fry for an additional 2 minutes to heat everything through and coat with the sauce.Serve the beef and vegetable stir-fry over cooked rice."
                },

                {
                    name:"Chicken and Vegetable Skewers",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Chicken and Vegetable Skewers.jpeg",
                    ingredients:"1 pound boneless, skinless chicken breasts, cut into cubes,2 bell peppers (red, yellow, or green), cut into chunks,1 red onion, cut into chunks,8-10 wooden skewers, soaked in water for 30 minutes,2 tablespoons olive oil,1 teaspoon paprika,1 teaspoon garlic powder,Salt and pepper to taste",
                    instruction:"Preheat your grill to medium-high heat.In a bowl, combine olive oil, paprika, garlic powder, salt, and pepper.Thread the chicken cubes, bell pepper chunks, and onion chunks alternately onto the soaked wooden skewers.Brush the skewers with the olive oil mixture.Grill the skewers for about 8-10 minutes, turning occasionally, until the chicken is cooked through and the vegetables are charred and tender.Serve the chicken and vegetable skewers hot."
                },

                {
                    name:"Egg and Vegetable Omelette",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Egg and Vegetable Omelette.jpeg",
                    ingredients:"4 large eggs,2 tablespoons milk,Salt and pepper to taste,1/2 cup diced mixed vegetables (e.g., bell peppers, onions, mushrooms, spinach),1/4 cup shredded cheese (such as cheddar or Swiss),1 tablespoon butter or oil for cooking",

                    instruction:"In a bowl, whisk together the eggs, milk, salt, and pepper.Heat butter or oil in a non-stick skillet over medium heat.Add the diced vegetables and sauté for about 2-3 minutes until they are softened.Pour the egg mixture over the sautéed vegetables in the skillet.Cook without stirring for a few minutes until the edges of the omelette start to set.Sprinkle the shredded cheese over one half of the omelette.Carefully fold the other half of the omelette over the cheese.Continue cooking for another minute or until the cheese is melted and the omelette is cooked through.Slide the omelette onto a plate and serve hot."
                },

                {
                    name:"Grilled Salmon with Lemon",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Grilled Salmon with Lemon.jpeg",
                    ingredients:"4 salmon fillets,2 lemons, sliced,2 tablespoons olive oil,2 cloves garlic, minced,Salt and pepper to taste,Fresh herbs (such as dill or parsley) for garnish (optional)",

                    instruction:"Preheat your grill to medium-high heat.In a bowl, combine olive oil, minced garlic, salt, and pepper.Brush the salmon fillets with the olive oil mixture.Place lemon slices on top of the salmon fillets.Grill the salmon for about 4-5 minutes per side or until it flakes easily with a fork and has grill marks.Garnish with fresh herbs if desired.Serve the grilled salmon with lemon slices."
                },

                {
                    name:"Homemade Chicken Nuggets",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Homemade Chicken Nuggets.jpeg",
                    ingredients:"1 pound boneless, skinless chicken breasts, cut into bite-sized pieces,1 cup breadcrumbs (seasoned or plain),1/2 cup grated Parmesan cheese,1 teaspoon paprika,1/2 teaspoon garlic powder,1/2 teaspoon onion powder,Salt and pepper to taste,2 eggs, beaten,Cooking spray or vegetable oil for baking",

                    instruction:"Preheat your oven to 425°F (220°C) and grease a baking sheet with cooking spray or vegetable oil.In a shallow dish, combine the breadcrumbs, grated Parmesan cheese, paprika, garlic powder, onion powder, salt, and pepper.Dip each chicken piece into the beaten eggs, allowing any excess to drip off.Roll the chicken piece in the breadcrumb mixture, pressing the breadcrumbs onto the chicken to adhere.Place the coated chicken pieces on the greased baking sheet.Spray the tops of the chicken nuggets with cooking spray or lightly drizzle with vegetable oil."
                },

                {
                    name:"Pasta with Shrimp and Pesto",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Pasta with Shrimp and Pesto.jpeg",
                    ingredients:"8 oz (about 2 cups) pasta of your choice,1 pound large shrimp, peeled and deveined,1/2 cup pesto sauce (store-bought or homemade),1/2 cup cherry tomatoes, halved,1/4 cup grated Parmesan cheese,Fresh basil leaves for garnish (optional)",

                    instruction:"Cook the pasta according to the package instructions until al dente. Drain and set aside.In a skillet, cook the shrimp over medium-high heat for about 2-3 minutes per side or until they turn pink and opaque. Remove from the skillet and set aside.In the same skillet, add the cooked pasta, pesto sauce, and halved cherry tomatoes. Toss to combine and heat through.Return the cooked shrimp to the skillet and mix gently.Sprinkle grated Parmesan cheese over the pasta and shrimp.Garnish with fresh basil leaves if desired.Serve the pasta with shrimp and pesto hot."
                },


                {
                    name:"Tuna Salad Sandwich",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Tuna Salad Sandwich.jpeg",
                    ingredients:"2 cans (5 oz each) canned tuna, drained,1/4 cup mayonnaise,2 tablespoons diced celery,2 tablespoons diced red onion,1 tablespoon sweet pickle relish,Salt and pepper to taste,Lettuce leaves,Sliced bread or rolls for making sandwiches",

                    instruction:"In a bowl, combine the drained tuna, mayonnaise, diced celery, diced red onion, and sweet pickle relish.Mix until all the ingredients are well combined.Season with salt and pepper to taste.Spread the tuna salad on slices of bread or rolls.Top with lettuce leaves.Close the sandwiches and serve your tuna salad sandwiches."
                },

                {
                    name:"nonveg/Turkey and Cheese Roll-Ups",
                    itemimg:"./assets/maintainweight/1to10years/nonveg/Turkey and Cheese Roll-Ups.jpeg",

                    ingredients:"Slices of cooked turkey breast,Slices of your favorite cheese (e.g., Swiss, cheddar),Lettuce leaves,Tomato slices,Mustard or mayonnaise (optional),Toothpicks (for securing the roll-ups)",

                    instruction:"Lay a slice of turkey breast flat on a clean surface.Place a slice of cheese, lettuce leaf, and tomato slice on top of the turkey.If desired, add a small amount of mustard or mayonnaise.Roll up the turkey with the filling inside.Secure the roll-up with a toothpick.Repeat the process for each turkey and cheese roll-up.Serve your turkey and cheese roll-ups as a delicious snack or appetize"
                }
            ]
        ],
        
        // above10year
        [
            // veg 
            [
                {
                    name:"aloo_tomato_jhol",

                    itemimg:"./assets/maintainweight/above10years/veg/aloo_tomato_jhol.webp",

                    ingredients:"2 large potatoes, peeled and cubed,2 medium tomatoes, chopped,1 onion, finely chopped,2-3 cloves of garlic, minced,1-inch piece of ginger, minced,1-2 green chilies, slit,1/2 teaspoon cumin seeds,1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,2 tablespoons cooking oil,Fresh coriander leaves for garnish,Water as needed",

                    instruction:"Heat oil in a deep pan or kadai over medium heat. Add cumin seeds and let them splutter.,Add chopped onions, minced garlic, minced ginger, and green chilies. Sauté until the onions turn translucent.,Add the cubed potatoes and sauté for 3-4 minutes until they start to turn light golden.,Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes become soft and the oil begins to separate from the mixture.,Add enough water to cover the potatoes and tomatoes. Bring it to a boil, then reduce the heat to low and cover the pan. Let it simmer for about 15-20 minutes or until the potatoes are tender and the gravy thickens.,Stir in garam masala and cook for another 2 minutes.,Garnish with fresh coriander leaves."
                },

                {
                    name:"bhindi",
                    itemimg:"./assets/maintainweight/above10years/veg/bhindi.webp",

                    ingredients:"250 grams bhindi (okra), washed and chopped,1 onion, finely chopped,2 tomatoes, finely chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,1/2 teaspoon cumin seeds,1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,2 tablespoons cooking oil,Fresh coriander leaves for garnish",

                    instruction:"Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.,Add minced garlic and ginger, and sauté for a minute until fragrant.,Add chopped onions and sauté until they turn translucent.,Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes become soft and the oil starts to separate.,Add chopped bhindi and sauté for 10-12 minutes or until they become tender and slightly crispy.,Stir in garam masala and cook for another 2 minutes.,Garnish with fresh coriander leaves."
                },

                {
                    name:"Butter_paneer",
                    itemimg:"./assets/maintainweight/above10years/veg/Butter_paneer.jpg",

                    ingredients:"250 grams paneer (cottage cheese), cubed,2 tablespoons butter,1 onion, finely chopped,2 tomatoes, pureed,1/2 cup heavy cream,1/2 teaspoon ginger-garlic paste,1/2 teaspoon cumin seeds,1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Fresh coriander leaves for garnish",

                    instruction:"Heat butter in a pan over medium heat. Add cumin seeds and let them splutter.,Add chopped onions and sauté until they turn golden brown.,Add ginger-garlic paste and sauté for a minute until the raw smell disappears.,Add tomato puree, turmeric powder, red chili powder, coriander powder, and salt. Cook until the oil starts to separate from the mixture.,Add cubed paneer and cook for 2-3 minutes, allowing the paneer to absorb the flavors.,Stir in heavy cream and garam masala. Cook for another 2 minutes.,Garnish with fresh coriander leaves."
                },

                {
                    name:"Dahi_sandwich",
                    itemimg:"./assets/maintainweight/above10years/veg/Dahi_sandwich.webp",
                    ingredients:"4 slices of bread,1/2 cup yogurt (curd),1/2 cup grated cucumber,1/4 cup grated carrot,1/4 cup finely chopped onion,1/4 cup finely chopped tomatoes,1/2 teaspoon roasted cumin powder,Salt to taste,Black pepper powder to taste,Butter or ghee for toasting (optional)",

                    instruction:"In a bowl, combine yogurt, grated cucumber, grated carrot, chopped onion, chopped tomatoes, roasted cumin powder, salt, and black pepper. Mix well to make a yogurt-based filling.,Take a slice of bread and spread the yogurt filling evenly on it. Place another slice on top to make a sandwich.,Optionally, spread a little butter or ghee on the outer sides of the sandwich.,Heat a griddle or pan over medium heat. Place the sandwich on it and toast until it turns golden brown on both sides.,Remove from heat, slice, and serve your Dahi Sandwich."
                },


                {
                    name:"vegitable sandwich",
                    itemimg:"./assets/maintainweight/above10years/veg/vegitable_sandwich.webp",

                    ingredients:"8 slices of bread,1/2 cup boiled and mashed potatoes,1/2 cup boiled and mashed mixed vegetables (peas, carrots, beans),1/4 cup finely chopped onions,1/4 cup finely chopped bell peppers (capsicum),1/4 cup grated cucumber,1/4 cup grated carrot,2 tablespoons mayonnaise,2 tablespoons tomato ketchup,Salt and black pepper to taste,Butter or ghee for toasting (optional)",

                    instruction:"In a mixing bowl, combine mashed potatoes, mashed mixed vegetables, chopped onions, chopped bell peppers, grated cucumber, grated carrot, mayonnaise, tomato ketchup, salt, and black pepper. Mix well to make a vegetable filling.,Take a slice of bread and spread the vegetable filling evenly on it. Place another slice on top to make a sandwich.,Optionally, spread a little butter or ghee on the outer sides of the sandwich.,Heat a griddle or pan over medium heat. Place the sandwich on it and toast until it turns golden brown on both sides.,Remove from heat, slice, and serve your Vegetable Sandwich."
                },

                {
                    name:"fried-rice",
                    itemimg:"./assets/maintainweight/above10years/veg/fried-rice.webp",

                    ingredients:"2 cups cooked and cooled rice,1 cup mixed vegetables (carrots, peas, bell peppers, etc.), finely chopped,1/2 cup cooked and shredded chicken or tofu (optional),2 tablespoons cooking oil,2 cloves garlic, minced,1 small onion, finely chopped,2 eggs, beaten (optional),2 tablespoons soy sauce,1/2 teaspoon chili sauce (adjust to taste),Salt and pepper to taste,Spring onions for garnish (optional)",

                    instruction:"Heat oil in a large pan or wok over medium-high heat.,Add minced garlic and sauté for a minute until fragrant.,Add chopped onions and stir-fry until they become translucent.,If you're using eggs, push the onions to one side of the pan and pour the beaten eggs into the other side. Scramble the eggs until they are fully cooked.,Add the mixed vegetables and cook for a few minutes until they are tender-crisp.,Add the cooked and shredded chicken or tofu (if using) and stir-fry for a couple of minutes.,Add the cooked rice and toss everything together.,Add soy sauce, chili sauce, salt, and pepper. Mix well and cook for a few more minutes.,Garnish with spring onions if desired."
                },

                {
                    name:"kanda-bhaji",
                    itemimg:"./assets/maintainweight/above10years/veg/kanda-bhaji.webp",

                    ingredients:"2 cups thinly sliced onions,1 cup gram flour (besan),1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder (adjust to taste),Salt to taste,Oil for frying,Water as needed.",

                    instruction:"In a mixing bowl, combine thinly sliced onions, gram flour, turmeric powder, red chili powder, and salt.,radually add water and mix until you have a thick batter that coats the onions.,Heat oil in a deep pan or kadai over medium heat.,Drop spoonfuls of the onion batter into the hot oil and fry until they turn golden brown and crispy.,Remove the fried pakoras using a slotted spoon and drain excess oil on paper towels."
                },

                {
                    name:"oats_idli",
                    itemimg:"./assets/maintainweight/above10years/veg/oats_idli.webp",

                    ingredients:"1 cup rolled oats,1 cup plain yogurt (curd),1/2 cup semolina (rava),1/2 cup water,1/2 teaspoon mustard seeds,1/2 teaspoon urad dal (split black gram),1/2 teaspoon chana dal (split chickpeas),1/2 teaspoon cumin seeds,1/2 teaspoon grated ginger,1 green chili, finely chopped (optional),A few curry leaves,Salt to taste,1/2 teaspoon baking soda (optional),Oil for greasing the idli molds",

                    instruction:"Dry roast the rolled oats in a pan until they turn slightly golden. Allow them to cool.,Grind the roasted oats into a fine powder.,In a mixing bowl, combine the ground oats, plain yogurt, and semolina. Mix well and let it rest for 30 minutes.,Heat oil in a small pan and add mustard seeds. Let them splutter.,Add urad dal, chana dal, cumin seeds, grated ginger, green chili (if using), and curry leaves. Sauté until the dals turn golden.,Add this tempering to the oat mixture and mix well. Add salt and baking soda (if using) and mix again.,Grease the idli molds with a little oil and pour the batter into them.,Steam the idlis for about 15-20 minutes or until they are cooked through.,Steam the idlis for about 15-20 minutes or until they are cooked through.,Allow the idlis to cool slightly before removing them from the molds."
                },
                
                {
                    name:"potato-baked",
                    itemimg:"./assets/maintainweight/above10years/veg/potato-baked.webp",

                    ingredients:"4 large russet potatoes,2 tablespoons olive oil,Salt and pepper to taste,Optional toppings: sour cream, grated cheese, chives, bacon bits, etc.",

                    instruction:"Preheat your oven to 375°F (190°C).,Wash and scrub the potatoes to remove any dirt. Pat them dry with a paper towel.,Prick the potatoes all over with a fork.,Rub each potato with olive oil and sprinkle with salt and pepper.,Place the potatoes directly on the oven rack or on a baking sheet.,Bake for 45 minutes to 1 hour, or until the potatoes are tender when pierced with a fork.,Remove the potatoes from the oven, cut a slit in the top, and fluff the insides with a fork.,Add your favorite toppings such as sour cream, grated cheese, chives, or bacon bits."
                },

                {
                    name:"protinshake",
                    itemimg:"./assets/maintainweight/above10years/veg/protinshake.jpg",

                    ingredients:"1 scoop of your favorite protein powder (whey, plant-based, etc.),1 cup milk (dairy or non-dairy),1/2 cup Greek yogurt,1 ripe banana,1 tablespoon honey or maple syrup (optional, for sweetness),Ice cubes (optional),Fresh berries or a sprinkle of cinnamon for garnish (optional)",

                    instruction:"Add the protein powder, milk, Greek yogurt, ripe banana, and honey (if using) to a blender.,If you prefer a colder shake, you can also add a few ice cubes.,Blend until all the ingredients are well combined and the shake is smooth.,Pour the protein shake into a glass and garnish with fresh berries or a sprinkle of cinnamon if desired.,"
                }
            ],

            // nonveg
            [
                {
                    name:"butter-chicken",
                    itemimg:"./assets/maintainweight/above10years/nonveg/butter-chicken.webp",

                    ingredients:"500 grams boneless chicken pieces,1/2 cup yogurt,1 tablespoon ginger-garlic paste,1/2 teaspoon turmeric powder,1/2 teaspoon turmeric powder,1 tablespoon garam masala,Salt to taste,2 tablespoons butter,1 onion, finely chopped,2 tomatoes, pureed,1/4 cup cashew nut paste,1 teaspoon dried fenugreek leaves (kasuri methi),1/2 cup heavy cream,Salt to taste,Fresh coriander leaves for garnish",


                    instruction:"Marinate the chicken pieces in yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, and salt. Let it marinate for at least 30 minutes.,Heat butter in a pan over medium heat. Add the chopped onions and sauté until they turn golden brown.,Add the marinated chicken and cook until it is no longer pink.,Stir in the tomato puree and cook for a few minutes until the oil starts to separate.,Add cashew nut paste, dried fenugreek leaves, and heavy cream. Simmer for 5-10 minutes until the gravy thickens.Garnish with fresh coriander leaves"
                },

                {
                    name:"chicken-65",
                    itemimg:"./assets/maintainweight/above10years/nonveg/chicken-65.webp",

                    ingredients:"500 grams boneless chicken pieces, cut into bite-sized cubes,1/2 cup yogurt,1 tablespoon ginger-garlic paste,1 teaspoon red chili powder,1 teaspoon red chili powder,1 teaspoon garam masala,Salt to taste,1/2 cup cornflour,2 tablespoons rice flour,Oil for deep frying,Curry leaves and green chilies for garnish",

                    instruction:"Marinate the chicken pieces in yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt. Let it marinate for at least 30 minutes.,In a separate bowl, combine cornflour and rice flour.,Heat oil in a deep pan or kadai over medium-high heat for deep frying.,Coat the marinated chicken pieces in the cornflour and rice flour mixture.,Carefully add the coated chicken pieces to the hot oil and fry until they turn golden brown and crispy.,Remove the fried chicken using a slotted spoon and drain excess oil on paper towels.,In the same pan, add curry leaves and green chilies. Sauté for a minute.,Add the fried chicken pieces and toss them in the pan for a minute to coat them with the seasoning."
                },

                {
                    name:"egg omlette",
                    itemimg:"./assets/maintainweight/above10years/nonveg/egg.jpg",

                    ingredients:"4 eggs, hard-boiled and peeled,2 tablespoons cooking oil,1 onion, finely chopped,2 tomatoes, finely chopped,1 tablespoon ginger-garlic paste,1/2 teaspoon turmeric powder,1/2 teaspoon turmeric powder,1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Fresh coriander leaves for garnish",

                    instruction:"Heat oil in a pan over medium heat. Add chopped onions and sauté until they turn translucent.,Add ginger-garlic paste and sauté for a minute until the raw smell disappears.,Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes become soft and the oil starts to separate.,Add the hard-boiled eggs and gently stir to coat them with the masala.,Add a little water to adjust the consistency of the gravy. Simmer for a few minutes.,Stir in garam masala and garnish with fresh coriander leaves."
                },

                {
                    name:"fish_biryani",
                    itemimg:"./assets/maintainweight/above10years/nonveg/fish_biryani.webp",

                    ingredients:"500 grams fish fillets, cut into pieces,2 cups basmati rice, soaked and drained,1/2 cup yogurt,1 tablespoon ginger-garlic paste,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,Salt to taste,2 tablespoons cooking oil,1 onion, thinly sliced,2 tomatoes, chopped,1/4 cup mint leaves,1/4 cup coriander leaves,A pinch of saffron strands soaked in warm milk,Ghee for drizzling (optional)",

                    instruction:"Marinate the fish pieces in yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt. Let it marinate for at least 30 minutes.,Heat oil in a large, heavy-bottomed pan. Add the sliced onions and sauté until they turn golden brown,Add the marinated fish pieces and cook for a few minutes on each side until they are lightly browned. Remove them from the pan and set aside.,In the same pan, add chopped tomatoes and cook until they become soft.,Add mint leaves, coriander leaves, and the fish pieces back to the pan. Mix gently.,In a large pot, layer the soaked and drained rice, followed by the fish mixture. Repeat the layers.,Drizzle saffron-infused milk and ghee on top.,Cover the pot with a tight-fitting lid and cook on low heat for about 20-25 minutes, or until the rice is cooked and aromatic.,Gently fluff the biryani with a fork before serving."
                },

                {
                    name:"fried-chicken",
                    itemimg:"./assets/maintainweight/above10years/nonveg/fried-chicken.jpg",

                    ingredients:"500 grams chicken pieces, with or without bones,1 cup buttermilk,1 tablespoon hot sauce (adjust to taste),1 teaspoon paprika,1 teaspoon garlic powder,Salt and pepper to taste,1 cup all-purpose flour,1 teaspoon paprika,1 teaspoon garlic powder,Salt and pepper to taste,Oil for deep frying",

                    instruction:"n a bowl, combine buttermilk, hot sauce, paprika, garlic powder, salt, and pepper. Add the chicken pieces to the marinade and refrigerate for at least 1 hour (or overnight for better flavor."
                },
                
                {
                    name:"girlled chicken",
                    itemimg:"./assets/maintainweight/above10years/nonveg/girlled chicken.jpg",

                    ingredients:"4 boneless, skinless chicken breasts,1/4 cup olive oil,2 cloves garlic, minced,1 teaspoon dried oregano,1 teaspoon dried thyme,1 teaspoon paprika,Salt and pepper to taste,Lemon wedges for garnish (optional)",

                    instruction:"In a bowl, whisk together the olive oil, minced garlic, dried oregano, dried thyme, paprika, salt, and pepper to make the marinade.,Place the chicken breasts in a zip-top bag or shallow dish and pour the marinade over them. Seal the bag or cover the dish and refrigerate for at least 30 minutes (or longer for more flavor).,Preheat a grill to medium-high heat.,Remove the chicken from the marinade and grill for about 6-7 minutes per side, or until the internal temperature reaches 165°F (74°C) and the chicken is cooked through.,Serve with lemon wedges if desired."
                },

                {
                    name:"goat meat fry",
                    itemimg:"./assets/maintainweight/above10years/nonveg/goat meat fry.jpg",

                    ingredients:"500 grams goat meat, cut into bite-sized pieces,2 onions, finely chopped,2 tomatoes, finely chopped,1 tablespoon ginger-garlic paste,1 teaspoon turmeric powder,2 teaspoons red chili powder (adjust to taste),1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Cooking oil,Fresh coriander leaves for garnish",

                    instruction:"Heat oil in a pressure cooker or a heavy-bottomed pan over medium heat. Add chopped onions and sauté until they turn golden brown.,Add ginger-garlic paste and sauté for a minute until the raw smell disappears.,Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until the tomatoes become soft and the oil starts to separate.,Add the goat meat pieces and sauté for a few minutes until they are lightly browned.,If using a pressure cooker, add enough water to cover the meat and pressure cook for about 15-20 minutes or until the meat is tender. If using a regular pan, cover and simmer until the meat is cooked and tender, adding water as needed.,Once the meat is cooked, add garam masala and cook for another 5 minutes.,Garnish with fresh coriander leaves."
                },

                {
                    name:"grilled-chicken",
                    itemimg:"./assets/maintainweight/above10years/nonveg/grilled-chicken.webp",

                    ingredients:"4 bone-in, skin-on chicken thighs,1/4 cup olive oil,2 cloves garlic, minced,1 teaspoon dried rosemary,1 teaspoon dried thyme,1 lemon, juiced and zested,Salt and pepper to taste",

                    instruction:"In a bowl, whisk together the olive oil, minced garlic, dried rosemary, dried thyme, lemon juice, lemon zest, salt, and pepper to make the marinade.,Place the chicken thighs in a zip-top bag or shallow dish and pour the marinade over them. Seal the bag or cover the dish and refrigerate for at least 30 minutes (or longer for more flavor).,Remove the chicken from the marinade and grill for about 7-8 minutes per side, or until the internal temperature reaches 165°F (74°C) and the chicken is cooked through with crispy skin.,Serve with your favorite sides."
                },

                {
                    name:"mutton-korma",
                    itemimg:"./assets/maintainweight/above10years/nonveg/mutton-korma.webp",

                    ingredients:"500 grams mutton (goat or lamb), cut into pieces,1/2 cup yogurt,1 tablespoon ginger-garlic paste,1 teaspoon turmeric powder,1 teaspoon red chili powder,1 teaspoon garam masala,Salt to taste,2 onions, finely chopped,2 tomatoes, finely chopped,1/4 cup cashew nut paste,1/2 cup heavy cream,1/2 cup water,2 tablespoons cooking oil,Whole spices (cinnamon stick, cloves, cardamom pods),Fresh coriander leaves for garnish",

                    instruction:"Marinate the mutton pieces in yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, and salt. Let it marinate for at least 30 minutes.,Heat oil in a pressure cooker or a heavy-bottomed pan over medium heat. Add the whole spices and sauté until fragrant.,Add chopped onions and sauté until they turn golden brown.,Add chopped tomatoes and cook until they become soft.,Add the marinated mutton and sauté for a few minutes until it is lightly browned.,Stir in cashew nut paste, heavy cream, and water. Pressure cook for about 15-20 minutes (or simmer in a regular pan) until the mutton is tender and the gravy thickens.,Garnish with fresh coriander leaves."
                },

                {
                    name:"salmon fry",
                    itemimg:"./assets/maintainweight/above10years/nonveg/salmon fry.jpg",

                    ingredients:"4 salmon fillets,2 tablespoons olive oil,1 teaspoon paprika,1/2 teaspoon garlic powder,1/2 teaspoon onion powder,1/2 teaspoon dried oregano,Salt and pepper to taste,Lemon wedges for garnish (optional)",

                    instruction:"In a small bowl, mix together the olive oil, paprika, garlic powder, onion powder, dried oregano, salt, and pepper to make a spice rub.,Rub the spice mixture evenly over both sides of the salmon fillets.,Heat a skillet or pan over medium-high heat and add a little olive oil to prevent sticking.,Place the salmon fillets in the hot skillet, skin-side down, and cook for about 3-4 minutes on each side, or until the salmon is cooked to your desired level of doneness.,Serve with lemon wedges if desired."
                }
            ]
        ]
    ],

    // gainweight item

    [
        //  1 to 10 year
        [
            // veg 
            [
                {
                    name:"Avocado",
                    itemimg:"./assets/gainweight/1to10years/veg/Avocado.jpg",

                    ingredients:"1 ripe avocado,2 slices of whole-grain bread,Salt and pepper to taste,Optional toppings: cherry tomatoes, red pepper flakes, or a poached egg",

                    instruction:"Cut the ripe avocado in half, remove the pit, and scoop the flesh into a bowl.,Mash the avocado with a fork until it reaches your desired consistency. Add a pinch of salt and pepper to taste.,Toast the slices of whole-grain bread until they are golden brown.,Spread the mashed avocado evenly on the toasted bread slices.,Add optional toppings like sliced cherry tomatoes, a sprinkle of red pepper flakes, or a poached egg if desired.,Serve immediately for a nutritious and satisfying breakfast or snack."
                },

                {
                    name:"bananas",
                    itemimg:"./assets/gainweight/1to10years/veg/bananas.jpg",
                    ingredients:"2 ripe bananas,1 cup Greek yogurt,1/2 cup milk (adjust for desired thickness),2 tablespoons honey or maple syrup (optional),1/4 cup rolled oats (optional),Ice cubes (optional)",
                    
                    instruction:"Peel the ripe bananas and place them in a blender.,Add Greek yogurt, milk, honey or maple syrup (if using), and rolled oats (if using).,If you prefer a colder and thicker smoothie, you can also add a few ice cubes.,If you prefer a colder and thicker smoothie, you can also add a few ice cubes.,Blend all the ingredients until smooth and creamy.,Blend all the ingredients until smooth and creamy.,Pour the banana smoothie into a glass and enjoy as a nutritious and filling beverage."
                },

                {
                    name:"Cheese",
                    itemimg:"./assets/gainweight/1to10years/veg/Cheese.jpg",

                    ingredients:"2 slices of whole-grain bread,2-3 slices of your favorite cheese (e.g., cheddar, Swiss, or mozzarella),2-3 slices of ripe tomato,Salt and pepper to taste,Optional additions: lettuce, mayonnaise, or mustard",

                    instruction:"Lay out the slices of whole-grain bread.,Place the cheese slices on one of the bread slices.,Layer the tomato slices on top of the cheese.,Season with a pinch of salt and pepper, and add any optional additions like lettuce, mayonnaise, or mustard.,Top with the second slice of bread to create a sandwich.,Press the sandwich gently together, and you can optionally toast it in a sandwich press or on a griddle for a warm and melty sandwich.,Slice the sandwich in half and serve as a satisfying lunch or snack."
                },

                {
                    name:"Dried Fruits and Nuts",
                    itemimg:"./assets/gainweight/1to10years/veg/Dried Fruits and Nuts.jpg",
                    ingredients:"1 cup mixed dried fruits (e.g., raisins, apricots, cranberries),1 cup mixed nuts (e.g., almonds, cashews, walnuts),1/2 cup chocolate chips or chunks (optional)",

                    instruction:"In a mixing bowl, combine the mixed dried fruits and mixed nuts.,If you want a touch of sweetness, you can add chocolate chips or chunks to the mix.,Toss everything together until the ingredients are evenly distributed.,Transfer the trail mix to an airtight container for storage.,Grab a handful of this nutritious and energy-packed trail mix as a quick and satisfying snack whenever you need a boost of energy."
                },

                {
                    name:"Eggs",
                    itemimg:"./assets/gainweight/1to10years/veg/Eggs.jpg",
                    ingredients:"2 large eggs,Salt and pepper to taste,,Optional additions: chopped herbs, cheese, diced vegetables, or cooked ham",

                    instruction:"Crack the eggs into a bowl and beat them with a fork or whisk until the yolks and whites are well combined. Add a pinch of salt and pepper.,Heat a non-stick skillet over medium-low heat and add butter or oil.,Pour the beaten eggs into the skillet and let them cook without stirring for a few moments.,Gently stir and fold the eggs with a spatula as they start to set.,ontinue to cook, stirring occasionally, until the eggs reach your desired level of doneness.,f you like, add optional ingredients such as chopped herbs, cheese, vegetables, or cooked ham while cooking.,Serve the scrambled eggs hot as a wholesome breakfast or brunch option."
                },

                {
                    name:"Full-Fat Yogurt",
                    itemimg:"./assets/gainweight/1to10years/veg/Full-Fat Yogurt.jpg",

                    ingredients:"1 cup full-fat yogurt,1/2 cup granola,1/2 cup mixed fresh fruits (e.g., berries, banana, kiwi),Honey or maple syrup for drizzling (optional)",

                    instruction:"Start by layering the bottom of a glass or bowl with full-fat yogurt.,Add a layer of granola on top of the yogurt.,Add a layer of mixed fresh fruits over the granola.,Repeat the layers until the glass or bowl is filled, ending with a final fruit layer on top.,Optionally, drizzle honey or maple syrup over the top for added sweetness.,Enjoy your yogurt parfait as a nutritious and filling snack or dessert."
                },

                {
                    name:"Hummus",
                    itemimg:"./assets/gainweight/1to10years/veg/Hummus.jpg",

                    ingredients:"1 cup hummus,Assorted fresh vegetables for dipping (e.g., carrot sticks, cucumber slices, bell pepper strips, cherry tomatoes)",

                    instruction:"Arrange a variety of fresh vegetable sticks and slices on a platter.,Place a bowl of hummus in the center of the platter.,Dip the vegetables into the hummus and enjoy as a healthy and satisfying snack or appetizer."
                },

                {
                    name:"Nut Butter",
                    itemimg:"./assets/gainweight/1to10years/veg/Nut Butter.jpg",

                    ingredients:"2 slices of whole-grain bread,2 tablespoons nut butter (e.g., peanut butter, almond butter),1 ripe banana, sliced",

                    instruction:"Spread nut butter on one side of each slice of whole-grain bread.,Arrange the banana slices on one slice of bread.,Top with the other slice of bread to make a sandwich.,Top with the other slice of bread to make a sandwich.,Press the sandwich together and cut it in half if desired.,Enjoy your nut butter and banana sandwich as a nutritious and energy-boosting snack or meal."
                },

                {
                    name:"tawa-aloo-potato-fry",
                    itemimg:"./assets/gainweight/1to10years/veg/tawa-aloo-potato-fry.webp",

                    ingredients:"2 large potatoes, peeled and sliced into thin rounds,2 tablespoons oil,1 teaspoon cumin seeds,1 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),Salt to taste,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a tawa (flat griddle) or a non-stick skillet over medium heat.,Add cumin seeds and let them splutter.,Add the sliced potatoes, turmeric powder, red chili powder, and salt.,Stir to coat the potatoes with the spices and oil.,Cook the potatoes on medium heat, flipping occasionally, until they are crispy and golden brown on both sides. This may take about 20-25 minutes.,Garnish with fresh cilantro leaves and serve hot as a side dish or snack."
                },

                {
                    name:"Whole-Grain Pasta",
                    itemimg:"./assets/gainweight/1to10years/veg/Whole-Grain Pasta.jpg",

                    ingredients:"8 ounces whole-grain pasta,1 cup tomato sauce (store-bought or homemade),1/2 teaspoon dried basil,1/2 teaspoon dried oregano,Salt and pepper to taste,Grated Parmesan cheese for topping (optional)",

                    instruction:""
                }
            ],

            // nonveg
            [
                {
                    name:"Chicken soup",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Chicken soup.jpg",
                    ingredients:"1 whole chicken, cut into pieces,1 onion, chopped,2 carrots, chopped,2 celery stalks, chopped,2 cloves garlic, minced,1 bay leaf,Salt and pepper to taste,Water,Fresh parsley for garnish (optional)",

                    instruction:"In a large soup pot, add the chopped chicken, onion, carrots, celery, minced garlic, bay leaf, salt, and pepper.,Add enough water to cover the ingredients in the pot.,Bring the mixture to a boil, then reduce the heat to low and simmer for about 1-1.5 hours, skimming off any foam that rises to the surface.,Once the chicken is cooked and the flavors have melded, remove the bay leaf and discard it.,Remove the chicken pieces from the soup and shred the meat using two forks. Discard the bones and skin.,Return the shredded chicken to the soup, adjust the seasoning with salt and pepper, and simmer for a few more minutes.,Serve the chicken soup hot, garnished with fresh parsley if desired."
                },

                {
                    name:"Crab curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Crab curry.jpg",

                    ingredients:"2 cups cleaned and cracked crab,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a large pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the cleaned and cracked crab and mix well to coat with the spices.,Pour in enough water to cover the crab, cover the pan, and simmer until the crab is cooked and the gravy thickens (about 15-20 minutes).,Sprinkle garam masala and garnish with fresh cilantro leaves before serving."
                },

                {
                    name:"Eggs fry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Eggs fry.jpg",

                    ingredients:"4 eggs,1 onion, finely chopped,2 green chilies, chopped (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and green chilies and sauté until the onions become translucent.,Beat the eggs in a bowl, then add turmeric powder, red chili powder, and salt. Mix well.,Pour the egg mixture into the pan with sautéed onions.,Cook over medium heat, stirring occasionally, until the eggs are fully cooked and slightly browned.,Garnish with fresh cilantro leaves and serve hot."
                },

                {
                    name:"Game Meat curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Game Meat curry.jpg",

                    ingredients:"500 grams game meat (venison or rabbit), cut into pieces,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the game meat pieces and mix well to coat with the spices.,Pour in enough water to cover the meat, cover the pan, and simmer until the"
                },

                {
                    name:"lean red meat curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/lean red meat curry.jpg",
                    ingredients:"500 grams lean red meat (such as beef, lamb, or venison), cut into cubes,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the lean red meat pieces and mix well to coat with the spices.,Pour in enough water to cover the meat, cover the pan, and simmer until the meat is tender and the gravy thickens (cooking time will vary depending on the type of meat but may take 30 minutes to 1 hour).,Garnish with fresh cilantro leaves before serving."
                },

                {
                    name:"Liver curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Liver curry.jpg",

                    ingredients:"500 grams liver (such as chicken liver or beef liver), cleaned and cut into pieces,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the liver pieces and mix well to coat with the spices.,Pour in enough water to cover the liver, cover the pan, and simmer until the liver is cooked (cooking time may vary depending on the type of liver but is typically relatively quick, around 10-15 minutes).,Garnish with fresh cilantro leaves before serving."
                },

                {
                    name:"Quail masala",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Quail masala.jpg",

                    ingredients:"4 quails, cleaned and halved (or use chicken pieces if preferred),2 onions, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,1/2 teaspoon garam masala,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, garam masala, and salt. Cook for a few more minutes.,Add the quail (or chicken) pieces and mix well to coat with the spices.,Pour in enough water to cover the meat, cover the pan, and simmer until the quail is cooked and the gravy thickens (about 15-20 minutes).,Garnish with fresh cilantro leaves before serving."
                },

                {
                    name:"Shrimp curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Shrimp curry.jpg",

                    ingredients:"500 grams shrimp, cleaned and deveined,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the cleaned shrimp and mix well to coat with the spices.,Pour in enough water to cover the shrimp, cover the pan, and simmer until the shrimp are cooked and the gravy thickens (about 5-7 minutes).,Pour in enough water to cover the shrimp, cover the pan, and simmer until the shrimp are cooked and the gravy thickens (about 5-7 minutes)."
                },

                {
                    name:"Shrimp grilled",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Shrimp grilled.jpg",

                    ingredients:"500 grams large shrimp, cleaned and deveined,2 tablespoons olive oil,2 cloves garlic, minced,1 lemon, juiced,1 teaspoon paprika,Salt and pepper to taste,Skewers (if using wooden skewers, soak them in water for 30 minutes before using)",

                    instruction:"n a bowl, whisk together olive oil, minced garlic, lemon juice, paprika, salt, and pepper to create a marinade.,Thread the cleaned shrimp onto skewers.,Brush the shrimp with the marinade, ensuring they are well coated.,Preheat a grill or grill pan over medium-high heat.,Grill the shrimp for 2-3 minutes per side or until they turn pink and opaque.,Serve the grilled shrimp hot with lemon wedges and your choice of dipping sauce."
                },

                {
                    name:"Turkey curry",
                    itemimg:"./assets/gainweight/1to10years/nonveg/Turkey curry.jpg",

                    ingredients:"500 grams turkey meat, cut into pieces (you can use boneless turkey breast or thigh meat),1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 green chilies, slit (adjust to taste),1/2 teaspoon turmeric powder,1 teaspoon red chili powder (adjust to taste),1 teaspoon cumin powder,1 teaspoon coriander powder,Salt to taste,Cooking oil,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan. Add the chopped onions and sauté until they turn golden brown.,Add minced garlic, minced ginger, and green chilies. Sauté for a couple of minutes until the raw smell disappears.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Stir in the turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Cook for a few more minutes.,Add the turkey meat pieces and mix well to coat with the spices.,Pour in enough water to cover the meat, cover the pan, and simmer until the turkey is cooked and the gravy thickens (about 15-20 minutes).,Garnish with fresh cilantro leaves before serving."
                }
            ]
        ],

        // above10year
        [
            // veg 
            [
                {
                    name:"Roasted-Vegetable",
                    itemimg:"./assets/gainweight/above10years/veg/03-Roasted-Vegetable.jpg",

                    ingredients:"Assorted vegetables (e.g., bell peppers, zucchini, cherry tomatoes, broccoli),Olive oil,Salt and pepper,Herbs or seasonings of your choice (e.g., rosemary, thyme, garlic powder)",

                    instruction:"Preheat your oven to 425°F (220°C).,Chop the vegetables into bite-sized pieces.,Toss the vegetables with olive oil, salt, pepper, and your choice of herbs or seasonings.,Spread the seasoned vegetables evenly on a baking sheet.,Roast in the preheated oven for 20-25 minutes or until they are tender and slightly caramelized, stirring occasionally.,Remove from the oven and serve as a side dish or use them in other recipes."
                },

                {
                    name:"Vegan-Pasta",
                    itemimg:"./assets/gainweight/above10years/veg/04-Vegan-Pasta.jpg",
                    ingredients:"Vegan-friendly pasta of your choice,Water,Salt (for boiling pasta)",

                    instruction:"Bring a large pot of water to a boil. Season the water with salt.,Add the pasta to the boiling water and cook according to the package instructions until it reaches your desired level of doneness (usually about 8-12 minutes).,Drain the cooked pasta and use it in your favorite vegan pasta recipes, such as marinara sauce, pesto, or roasted vegetable pasta."
                },

                {
                    name:"Mediterranean-Salad",
                    itemimg:"./assets/gainweight/above10years/veg/Mediterranean-Salad.webp",

                    ingredients:"Mixed greens,Cherry tomatoes,Cucumber,Red onion,Kalamata olives,Vegan feta cheese,Olive oil,Lemon juice,Dried oregano,Salt and pepper",

                    instruction:"Chop the vegetables and combine them in a salad bowl.,Add Kalamata olives and crumble vegan feta cheese on top.,In a small bowl, whisk together olive oil, lemon juice, dried oregano, salt, and pepper to make the dressing.,Drizzle the dressing over the salad, toss to combine, and serve."
                },

                {
                    name:"peanut_Butter",
                    itemimg:"./assets/gainweight/above10years/veg/peanut_Butter.webp",
                    ingredients:"Vegan bread,Peanut butter (check the label for dairy ingredients),Jelly or jam (vegan-friendly",

                    instruction:"Spread peanut butter on one slice of bread.,Spread jelly or jam on another slice of bread.,Press the two slices together to make a sandwich.,Cut the sandwich into halves or quarters, if desired, and enjoy."
                },

                {
                    name:"Plant-Based-Coconut-Curry",
                    itemimg:"./assets/gainweight/above10years/veg/Plant-Based-Coconut-Curry.jpg",
                    ingredients:"1 can of coconut milk,Assorted vegetables (e.g., bell peppers, carrots, broccoli, snow peas),Tofu or chickpeas (for protein),Curry paste or powder,Soy sauce or tamari (for seasoning),Rice or noodles (optional, for serving)",

                    instruction:"In a large pan or wok, heat the coconut milk over medium heat.,Add your choice of vegetables and protein (tofu or chickpeas) to the pan.,Stir in the curry paste or powder and soy sauce to taste.,Simmer the mixture until the vegetables are tender and the sauce has thickened, stirring occasionally.,Serve the coconut curry over rice or noodles if desired."
                },

                {
                    name:"Red-Pepper-and-Chorizo-Pasta",
                    itemimg:"./assets/gainweight/above10years/veg/Red-Pepper-and-Chorizo-Pasta.jpg",
                    ingredients:"Pasta of your choice (vegan-friendly),Red bell peppers, thinly sliced,Vegan chorizo (store-bought or homemade),Olive oil,Garlic, minced,Red pepper flakes (optional, for heat),Salt and pepper, to taste,Fresh basil or parsley, for garnish (optional)",
                    
                    instruction:"Cook the pasta according to the package instructions until al dente. Drain and set aside.,In a large skillet, heat olive oil over medium heat.,Add the vegan chorizo and sauté until it begins to brown and become fragrant.,Add the sliced red bell peppers and minced garlic to the skillet. Sauté until the peppers are tender.,Season with salt, pepper, and red pepper flakes if you want some heat.,Toss the cooked pasta in the skillet with the chorizo and peppers.,Serve hot, garnished with fresh basil or parsley if desired."
                },

                {
                    name:"smoothies 3",
                    itemimg:"./assets/gainweight/above10years/veg/smoothies 3.jpg",
                    ingredients:"Frozen mixed berries (e.g., strawberries, blueberries, raspberries),Banana,Almond milk or any plant-based milk of your choice,Spinach (optional, for added nutrients),Maple syrup or agave nectar (optional, for sweetness)",

                    instruction:"Add the frozen mixed berries, a ripe banana, and a handful of spinach (if using) to a blender.,Pour in enough almond milk to cover the ingredients.,Add sweetener if desired.,Blend until smooth and creamy.,Pour into a glass and enjoy."
                },

                {
                    name:"vegan-baked-tofu-sandwich",
                    itemimg:"./assets/gainweight/above10years/veg/vegan-baked-tofu-sandwich.jpg",

                    ingredients:"Extra-firm tofu, sliced and pressed to remove excess water,Vegan bread or sandwich buns,Vegan mayo or tahini,Mustard,Lettuce leaves,Tomato slices,Avocado slices (optional),Red onion slices (optional),Salt and pepper, to taste",

                    instruction:"Preheat your oven to 375°F (190°C).,Season the tofu slices with salt and pepper.,Bake the tofu on a lined baking sheet for about 20-25 minutes, flipping halfway through, until it's golden and slightly crispy.,Toast the bread or buns.,Spread vegan mayo or tahini on one side and mustard on the other side of the bread.,Assemble the sandwich with tofu slices, lettuce, tomato, pickles, avocado, and red onion.,Close the sandwich, cut in half if desired, and serve."
                },

                {
                    name:"vegan-buffalo-pizza",
                    itemimg:"./assets/gainweight/above10years/veg/vegan-buffalo-pizza.jpg",
                    ingredients:"Pizza dough (vegan-friendly),Vegan buffalo sauce,Vegan cheese (e.g., dairy-free mozzarella),Sliced red onion,Sliced bell peppers,Sliced mushrooms,Cooked and crumbled vegan sausage (optional),Fresh cilantro (optional, for garnish)",

                    instruction:"Preheat your oven according to the pizza dough package instructions.,Roll out the pizza dough on a floured surface to your desired thickness.,Spread a layer of vegan buffalo sauce on the pizza dough.,Sprinkle vegan cheese on top of the sauce.,Add the sliced vegetables and vegan sausage evenly on the pizza.,Bake according to the dough package instructions until the crust is golden and the toppings are bubbly and slightly browned.,Garnish with fresh cilantro if desired, slice, and serve."
                },

                {
                    name:"vegan-cheeseburger",
                    itemimg:"./assets/gainweight/above10years/veg/vegan-cheeseburger.webp",
                    ingredients:"Vegan burger patties (store-bought or homemade),Vegan burger buns,Vegan cheese slices,Lettuce leaves,Tomato slices,Red onion slices,Pickles,Ketchup and mustard (vegan-friendly),Salt and pepper, to taste",

                    instruction:"Cook the vegan burger patties according to the package instructions or your homemade recipe.,During the last minute of cooking, place a vegan cheese slice on each patty and allow it to melt.,Toast the burger buns.,Assemble the burgers with lettuce, tomato, red onion, pickles, ketchup, and mustard.Place the burger patties with melted cheese on top.,Close the burger, serve, and enjoy!"
                }
            ],

            // nonveg
            [
                {
                    name:"Chicken-Biryani",
                    itemimg:"./assets/gainweight/above10years/nonveg/Chicken-Biryani.jpg",

                    ingredients:"2 cups Basmati rice,500g chicken, cut into pieces,2 onions, thinly sliced,2 tomatoes, chopped,2 cups plain yogurt,2 tablespoons biryani masala,1 teaspoon turmeric powder,1 teaspoon red chili powder,4-5 cups water,Salt to taste,Fresh coriander leaves and mint leaves for garnish,Ghee or oil for cooking",

                    instruction:"Wash and soak the Basmati rice in water for 30 minutes, then drain.,In a large pot, heat ghee or oil over medium heat. Add sliced onions and sauté until they turn golden brown.,Add chicken pieces and cook until they start to brown.,Add chopped tomatoes, biryani masala, turmeric powder, red chili powder, and salt. Cook until the tomatoes become soft.,Add plain yogurt and continue to cook for a few more minutes.,Add the soaked and drained rice to the pot and sauté for a couple of minutes.,Reduce the heat to low, cover the pot, and simmer for about 20-25 minutes or until the rice and chicken are cooked and the liquid is absorbed.,Garnish with fresh coriander leaves and mint leaves.,Serve hot."
                },

                {
                    name:"Chicken-Keema-Palak",
                    itemimg:"./assets/gainweight/above10years/nonveg/Chicken-Keema-Palak.jpg",

                    ingredients:"500g minced chicken,2 cups spinach, chopped,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,1 teaspoon cumin seeds,1 teaspoon garam masala,1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder,Salt to taste,Oil for cooking",

                    instruction:"Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.,Add chopped onions and sauté until they turn translucent,Add minced garlic and ginger, and sauté for a couple of minutes.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Add minced chicken, turmeric powder, red chili powder, and salt. Cook until the chicken is cooked through and browned.,Add chopped spinach and cook until it wilts.,Sprinkle garam masala on top and mix well.,Serve hot with rice or bread."
                },

                {
                    name:"Chicken-Sukka2",
                    itemimg:"./assets/gainweight/above10years/nonveg/Chicken-Sukka2.jpg",
                    ingredients:"500g chicken, cut into pieces,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,1 teaspoon cumin seeds,1 teaspoon coriander powder,1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder,1/2 teaspoon garam masala,Salt to taste,Oil for cooking",

                    instruction:"Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.,Add chopped onions and sauté until they turn translucent.,Add minced garlic and ginger, and sauté for a couple of minutes.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Add chicken pieces, turmeric powder, red chili powder, and salt. Cook until the chicken is cooked through and browned.,Add coriander powder and garam masala. Mix well.,Cook for a few more minutes until the chicken is coated with the spices and the dish is dry.,Serve hot with rice or bread."
                },

                {
                    name:"Chicken_ghee_rosted",
                    itemimg:"./assets/gainweight/above10years/nonveg/Chicken_ghee_rosted.jpg",
                    ingredients:"500g chicken, cut into pieces,2 tablespoons ghee (clarified butter),2 tablespoons red chili powder (adjust to taste),1 teaspoon coriander powder,1/2 teaspoon turmeric powder,1/2 teaspoon cumin powder,1/2 teaspoon fenugreek seeds,1/2 teaspoon mustard seeds,Curry leaves,Salt to taste",

                    instruction:"In a bowl, mix the red chili powder, coriander powder, turmeric powder, cumin powder, and salt with a little water to form a paste.,Heat ghee in a pan over medium heat. Add mustard seeds and fenugreek seeds. Let them splutter.,Add curry leaves to the pan and sauté briefly.,Add the spice paste and sauté for a couple of minutes until the oil starts to separate.,Add chicken pieces and cook until they are cooked through and coated with the spice mixture.,Serve hot with rice or bread."
                },

                {
                    name:"Chicken_Spicy_Curry",
                    itemimg:"./assets/gainweight/above10years/nonveg/Chicken_Spicy_Curry.jpg",
                    ingredients:"500g chicken, cut into pieces,1 onion, finely chopped,2 tomatoes, chopped,2 cloves garlic, minced,1-inch piece of ginger, minced,2 teaspoons curry powder,1 teaspoon cumin seeds,1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder (adjust to taste),1/2 teaspoon garam masala,Salt to taste,Oil for cooking,Fresh cilantro leaves for garnish",

                    instruction:"Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.,Add chopped onions and sauté until they turn translucent.,Add minced garlic and ginger, and sauté for a couple of minutes.,Add chopped tomatoes and cook until they become soft and the oil starts to separate.,Add chicken pieces, turmeric powder, red chili powder, and salt. Cook until the chicken is cooked through and browned.,Sprinkle curry powder and garam masala on top. Mix well.,Cook for a few more minutes until the chicken is coated with the spices and the curry is thickened.,Garnish with fresh cilantro leaves and serve hot with rice or bread."
                },

                {
                    name:"egg_biriyani",
                    itemimg:"./assets/gainweight/above10years/nonveg/egg_biriyan.jpg",
                    ingredients:"2 cups Basmati rice,4 hard-boiled eggs, peeled,2 onions, thinly sliced,2 tomatoes, chopped,2 cups plain yogurt,2 tablespoons biryani masala,1 teaspoon turmeric powder,1 teaspoon red chili powder,4-5 cups water,Salt to taste,Fresh coriander leaves and mint leaves for garnish,Ghee or oil for cooking",

                    instruction:"Wash and soak the Basmati rice in water for 30 minutes, then drain.,In a large pot, heat ghee or oil over medium heat. Add sliced onions and sauté until they turn golden brown.,Add chopped tomatoes and cook until they become soft.Add biryani masala, turmeric powder, red chili powder, and salt. Cook for a few minutes.,Add plain yogurt and continue to cook for a few more minutes.,Cut the hard-boiled eggs into halves.,In a separate pot, layer the rice, egg halves, and the prepared masala mixture.,Repeat the layering until all ingredients are used up, ending with a layer of rice on top.,Pour in enough water to cover the rice, then bring it to a boil.,Reduce the heat to low, cover the pot, and simmer for about 20-25 minutes or until the rice is cooked and the liquid is absorbed.,Garnish with fresh coriander leaves and mint leaves.,Serve hot."
                },

                {
                    name:"Eggs-in-Green-chilli",
                    itemimg:"./assets/gainweight/above10years/nonveg/Eggs-in-Green-chilli.jpg",
                    ingredients:"4-6 boiled eggs,4-6 large green chilies (such as poblano or Anaheim),1 onion, finely chopped,2 tomatoes, chopped,1 teaspoon cumin seeds,1 teaspoon ginger-garlic paste,1/2 teaspoon turmeric powder,1/2 teaspoon red chili powder (adjust to taste),Salt to taste,Oil for cooking",

                    instruction:"Slit the green chilies lengthwise and remove the seeds to reduce spiciness if desired.,Heat oil in a pan over medium heat. Add cumin seeds and let them splutter.,Add chopped onions and sauté until they turn translucent.,Add ginger-garlic paste and sauté for a couple of minutes.,Add chopped tomatoes and cook until they become soft.,Stir in turmeric powder, red chili powder, and salt.,Gently place the boiled eggs inside the slit green chilies.,Carefully place the stuffed green chilies in the pan with the masala.,Cover and cook for about 10-15 minutes or until the green chilies are tender.,Serve hot with rice or bread."
                },

                {
                    name:"Kerala-Chicken-Chilli",
                    itemimg:"./assets/gainweight/above10years/nonveg/Kerala-Chicken-Chilli.jpg",
                    ingredients:"500g chicken, cut into pieces,2 onions, thinly sliced,2 tomatoes, chopped,1 tablespoon ginger-garlic paste,2-3 green chilies, slit,1 teaspoon red chili powder (adjust to taste),1/2 teaspoon turmeric powder,1/2 teaspoon garam masala,Curry leaves,Salt to taste,Oil for cooking",

                    instruction:"Heat oil in a pan over medium heat. Add sliced onions and sauté until they turn golden brown.,Add ginger-garlic paste and sauté for a couple of minutes.,Add chopped tomatoes and cook until they become soft.,Stir in red chili powder, turmeric powder, and salt.,Add chicken pieces and cook until they are cooked through and browned.,Sprinkle garam masala and curry leaves on top. Mix well.,Serve hot with rice or bread."
                },

                {
                    name:"matiki_Egg_Dosa",
                    itemimg:"./assets/gainweight/above10years/nonveg/matiki_Egg_Dosa.jpg",
                    ingredients:"Dosa batter (prepared or store-bought),2-4 eggs,Salt and pepper to taste,Oil for cooking",

                    instruction:"Heat a dosa pan or griddle over medium-high heat.,Pour a ladleful of dosa batter onto the hot pan and spread it in a circular motion to make a thin dosa.,Crack an egg onto the dosa and quickly spread it out using a spatula.,Sprinkle salt and pepper on top of the egg.,Drizzle a little oil around the edges of the dosa and on top of the egg.,Cook until the dosa is crisp and the egg is cooked to your desired level of doneness.,Fold the dosa in half and serve hot."
                },

                {
                    name:"Tandoori-Chicken",
                    itemimg:"./assets/gainweight/above10years/nonveg/Tandoori-Chicken.jpg",
                    ingredients:"4-6 chicken leg quarters or pieces,1 cup plain yogurt,2 tablespoons tandoori masala,1 tablespoon ginger-garlic paste,1 tablespoon lemon juice,Salt to taste,Red food coloring (optional, for traditional red color),Oil for cooking",

                    instruction:"In a bowl, combine yogurt, tandoori masala, ginger-garlic paste, lemon juice, salt, and food coloring (if using).,Make deep cuts in the chicken pieces to allow the marinade to penetrate.,Marinate the chicken in the yogurt mixture for at least 2 hours or overnight in the refrigerator.,Preheat your grill or oven to a high temperature (around 450°F or 230°C).,Place the marinated chicken on the grill or in the oven and cook for about 25-30 minutes or until the chicken is cooked through and has a charred, tandoori appearance.,Serve hot with naan or rice, along with mint chutney and lemon wedges."
                }
            ]
        ]
    ]

]

// function puporalitem(){
//     vegitem.forEach((item)=>{
//         let img = document.createElement("img");
//         // console.log(item)
//         img.src=item;
//         img.width="90%";
//         img.height="50%"; 
//         // img.style.display="block"
//         document.getElementById("imgadd").appendChild(img)
//         console.log("sujit")
//     }) 
// }
// puporalitem();
// function gotonextpage(id){
//     document.getElementById("infosection").style.display="block"
//     document.getElementById("manusection").style.display="none"
// }

let firstarray=0;
let secondarray=0;
let thirdarray=0;

function addallid(){
    // cookitem.forEach((item)=>{
    //     item.forEach((item1)=>{
    //         item1.forEach((item2)=>{
    //             item2.forEach((item3,index)=>{
    //                 document.getElementById(`img${index}`).src=item3.itemimg;

    //                 document.getElementById(`img${index}`).id=`img0${index}`;

    //                 document.getElementById(`img0${index}`).addEventListener("click",()=>{
    //                     document.getElementById("im").src=item3.itemimg;
    //                 })
    //             })
    //         })
    //     })

       
    // })
    document.getElementById("addnewimg").style.display="block";

    if(value == "loosweight"){
        if(age.value >= 1 && age.value  <= 10){

            if(checkrecipescatagori == "veg"){
                console.log(value,age.value,checkrecipescatagori)

                cookitem[0][0][0].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg") {
                cookitem[0][0][1].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";
                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else{

                console.log("sujit")
                cookitem[0][0][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;
                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[0][0][1].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="bolck";

                    document.getElementById(`img1${index}`).src=item.itemimg;

                    

                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })


                })
            }

        }else{

            if(checkrecipescatagori == "veg"){

                cookitem[0][1][0].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="none";


                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg"){
                cookitem[0][1][1].forEach((item,index)=>{

                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img0${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else{

                cookitem[0][1][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;
                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[0][1][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="bolck";
                    document.getElementById(`img1${index}`).src=item.itemimg;

                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
            }

        } 
    } else if(value == "MaintainWeight"){
        if(age.value >= 1 && age.value  <= 10){
            if(checkrecipescatagori == "veg"){

                cookitem[1][0][0].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";
                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg") {
                cookitem[1][0][1].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";
                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else{
                cookitem[1][0][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[1][0][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="bolck";
                    document.getElementById(`img1${index}`).src=item.itemimg
                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
            }

        }else{

            if(checkrecipescatagori == "veg"){

                cookitem[1][1][0].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="none";
                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg"){
                cookitem[1][1][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="none";
                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else{
                cookitem[1][1][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;
                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[1][1][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="bolck";
                    document.getElementById(`img1${index}`).src=item.itemimg;
                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
            }

        } 
    } else {

        console.log("sujit panigrahi")
        if(age.value >= 1 && age.value  <= 10){
            if(checkrecipescatagori == "veg"){

                cookitem[2][0][0].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg") {
                cookitem[2][0][1].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";
                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else{
                cookitem[2][0][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;
                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[2][0][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="bolck";
                    document.getElementById(`img1${index}`).src=item.itemimg;
                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
            }

        }else{

            if(checkrecipescatagori == "veg"){

                cookitem[2][1][0].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="none";
                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            } else if(checkrecipescatagori == "nonveg"){
                cookitem[2][1][1].forEach((item,index)=>{

                    document.getElementById(`img1${index}`).style.display="none";
                    // item img add in home page 

                    document.getElementById(`img${index}`).src=item.itemimg;

                    // document.getElementById(`img${index}`).id=`img0${index}`;

                    // click to show img in recipes page

                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })

                })

            }else{
                cookitem[2][1][0].forEach((item,index)=>{
                    document.getElementById(`img${index}`).src=item.itemimg;
                    document.getElementById(`img${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
                cookitem[2][1][1].forEach((item,index)=>{
                    document.getElementById(`img1${index}`).style.display="bolck";
                    document.getElementById(`img1${index}`).src=item.itemimg;
                    document.getElementById(`img1${index}`).addEventListener("click",()=>{
                        document.getElementById("im").src=item.itemimg;
                    })
                })
            }

        } 
    }
}


function backpage1(){
    document.getElementById("manusection").style.display="none";
    document.getElementById("infosection").style.display="block"
}



function gotonextphoto(){
    cookitem[firstarray][secondarray][thirdarray].forEach((item,index)=>{
        document.getElementsByClassName("showsideimg").style.backgroundImage =`url(${item.itemimg})`
    })
}

cookitem[firstarray][secondarray][thirdarray].forEach((item,index)=>{
    console.log("sujit")
    document.getElementById("showsideimg").src =item.itemimg;

    document.getElementById("slno0").textContent=index+1;

    document.getElementById("recipesname0").textContent=item.name;

    document.getElementById("ingredient0").textContent=item.ingredients;
})


