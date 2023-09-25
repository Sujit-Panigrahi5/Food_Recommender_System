
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
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ],

            // nonveg
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ]
        ],
        
        // above10year
        [
            // veg 
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ],

            // nonveg
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
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
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ],

            // nonveg
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ]
        ],
        // above10year
        [
            // veg 
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ],

            // nonveg
            [
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },

                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                },
                {
                    name:"",
                    itemimg:"",
                    ingredients:"",
                    instruction:""
                }
            ]
        ]
    ]

]

function puporalitem(){
    vegitem.forEach((item)=>{
        let img = document.createElement("img");
        // console.log(item)
        img.src=item;
        img.width="90%";
        img.height="50%"; 
        // img.style.display="block"
        document.getElementById("imgadd").appendChild(img)
        console.log("sujit")
    }) 
}
// puporalitem();
// function gotonextpage(id){
//     document.getElementById("infosection").style.display="block"
//     document.getElementById("manusection").style.display="none"
// }

function addallid(){
    vegitem.forEach((item,index)=>{
        document.getElementById(`img${index}`).src=item;

        document.getElementById(`img${index}`).id=`img0${index}`;

        document.getElementById(`img0${index}`).addEventListener("click",()=>{
            document.getElementById("im").src=item;
        })
    })
}
addallid()


