// header shrink

window.onscroll = function() {scrollFunction()};
let header=document.querySelector(".header");

function scrollFunction() {
	console.log(document.documentElement)
  if (document.documentElement.scrollTop > 80) {
	  header.classList.add("site-header-short")
    header.classList.remove("site-header")
  } else {
	header.classList.remove("site-header-short")
	header.classList.add("site-header")
  }
}


let navToggle = document.querySelector("#nav-toggle")
// mobile nav

document.addEventListener('DOMContentLoaded', function(event) {

    navToggle.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide");
		// if (navToggle.innerHTML="&#9776;") {
		// 	navToggle.innerHTML="X";
		// 	console.log(navToggle.innerHTML)
		// } else if (navToggle.innerHTML="X") {
		// 	navToggle.innerHTML="&#9776;"
		// } else console.log(navToggle.innerHTML)
		
	
		
    });

});