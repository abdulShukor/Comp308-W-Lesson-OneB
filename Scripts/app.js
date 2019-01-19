"use strict";

// self-executing anonymos function

//let myBlobalVariable=0; // global variable

//IIfe-- immdiately invoje function expression

(function(){

    //variable
let functionalVAraible = 0;

    
// named function
function Start(){
    console.log(`%cApp Startup ....${functionalVAraible}`,"font-size:20px; color: blue");

    //second way
     // variable and ananymose functions and asigneing to the variable
     /*
    let Start= function(){

        console.log(`App Startup ....${functionalVAraible}`);


    }
    */

    //third way inline function
}
/*window.addEventListener("load", function(){

    console.log(`App Startup ....${functionalVAraible}`);});*/


window.addEventListener("load", Start);
})();
