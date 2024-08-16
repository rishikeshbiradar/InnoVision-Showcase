AOS.init({
    duration: 500,  // Animation duration in milliseconds
    delay: 600,     // Delay before the animation starts in milliseconds
    easing: 'ease-in-out',  // Easing function for the animation
});

$(document).ready(function () {
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a Designer", "a Developer", "a Freelancer","an Engineer", "a Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings:  ["a Designer", "a Developer", "a Freelancer","an Engineer", "a Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// EmailJS Code

emailjs.init("vLC2S4hStmLBKRmE0");

function sendEmail() {
    var formData = {
        user_name: document.getElementById("contactName").value,
        user_email: document.getElementById("contactEmail").value,
        user_subject: document.getElementById("contactSubject").value,
        message: document.getElementById("contactMessage").value
    };

    console.log(formData)

    emailjs.send("service_eif8pzh", "template_y3vdh7x", formData)
        .then(function(response) {
            console.log("Email sent successfully:", response);

        })
        .catch(function(error) {
            console.log("Email failed to send:", error);

        });
    
        alert('Thank You! \nYour Response has been Submitted Successfully \n');
}


// College : 'service_md63xlb'  'template_asd1ha8'  'Amcak7Tpn5maKifuh'
// Personal : 'service_eif8pzh' 'template_y3vdh7x' 'vLC2S4hStmLBKRmE0'