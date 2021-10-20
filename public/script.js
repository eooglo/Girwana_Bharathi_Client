// Initialize All Required DOM Element
const burgerMenu = document.getElementById("gir_burger");
const navbarMenu = document.getElementById("gir_menu");

// Initialize Responsive Navbar Menu
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navbarMenu.classList.toggle("active");

	if (navbarMenu.classList.contains("active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";    
	} else {
		navbarMenu.removeAttribute("style");
	}
});


// fixed header 
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});


// Read more 

function myFunction() {
	var dots = document.getElementById("gir_dots");
	var moreText = document.getElementById("gir_more");
	var btnText = document.getElementById("gir_Btn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }



// Tabs section




  