// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

// function to turn on graymode
function turnItGray(){

 //target body tag and set the class to be gray
 document.querySelector('body').classList.add('grayMode');
}
//Functiom to turn on light mode
function turnItLight () {
    //target body tag and remove the gray class
    document.querySelector('body').classList.remove('grayMode');
}
// Listen for click on gray buton
document.querySelector("#grayButton").addEventListener("click",turnItGray);
// Listen for clik on white button
document.querySelector("#whiteButton").addEventListener("click",turnItLight);