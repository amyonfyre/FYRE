
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



// mobile nav

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector("#nav-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide");

    });

});