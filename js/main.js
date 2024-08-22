// main.js

function changeImage(element) {
    document.getElementById("main-image").src = element.src;
    let thumbnails = document.querySelectorAll(".thumbnail-images img");
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    element.classList.add("active");
  }
  
  function decreaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }
  
  function increaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }
  
  function openTab(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].classList.remove("active");
    }
  
    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById(tabId).classList.add("active");
  }
  

 
  
  var swiper = new Swiper(".mySwiper3", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
  
  
  function myWishlist1() {
    document.getElementById("myWishlist1").style.backgroundColor = "#FFF2F8";
    document.getElementById("myWishlist1").style.color = "#FA5C98";
    document.getElementById("myWishlist1").style.border = "none";
  }
  
  function myWishlist2() {
    document.getElementById("myWishlist2").style.backgroundColor = "#FFF2F8";
    document.getElementById("myWishlist2").style.color = "#FA5C98";
    document.getElementById("myWishlist2").style.border = "none";
  }
  
  function myWishlist3() {
    document.getElementById("myWishlist3").style.backgroundColor = "#FFF2F8";
    document.getElementById("myWishlist3").style.color = "#FA5C98";
    document.getElementById("myWishlist3").style.border = "none";
  }
  
  function myWishlist4() {
    document.getElementById("myWishlist4").style.backgroundColor = "#FFF2F8";
    document.getElementById("myWishlist4").style.color = "#FA5C98";
    document.getElementById("myWishlist4").style.border = "none";
  }
  


    document.addEventListener("DOMContentLoaded", function() {
        // Handle the toggling of submenus
        var dropdowns = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');

        dropdowns.forEach(function(dropdown) {
            dropdown.addEventListener('click', function(e) {
                e.stopPropagation();
                var submenu = this.nextElementSibling;
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    // Close any open submenus
                    var openSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu.show');
                    openSubmenus.forEach(function(openSubmenu) {
                        openSubmenu.classList.remove('show');
                    });
                    submenu.classList.add('show');
                }
            });
        });

        // Close all submenus when clicking outside
        document.addEventListener('click', function(e) {
            var openSubmenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu.show');
            openSubmenus.forEach(function(openSubmenu) {
                openSubmenu.classList.remove('show');
            });
        });
    });

