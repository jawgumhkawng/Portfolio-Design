var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      if (direction === "down") {
        document.querySelector( ".navbar" ).classList.add("navbar-control") 
        document.querySelector( ".navbar" ).classList.add("animate__fadeInDown") 
       
        console.log("down")
      } else {
        document.querySelector( ".navbar" ).classList.remove("navbar-control")
        document.querySelector( ".navbar" ).classList.remove("animate__fadeInDown")  
       

       
        
    
        console.log("up")
      }
    },
    offset: '2%'
  })


  var waypoint = new Waypoint({
    element: document.getElementById('pricing'),
    handler: function(direction) {
      if (direction === "down") {
        document.querySelector( ".footer-fixed" ).classList.add("show") 
        document.querySelector( ".footer-fixed" ).classList.add("animate__fadeInDown") 
        
        console.log("down")
      } else {
        document.querySelector( ".footer-fixed" ).classList.remove("show") 
        document.querySelector( ".footer-fixed" ).classList.remove("animate__fadeInDown") 
    
        console.log("up")
      }
    },
    offset: '5%'
  })


      // Back to top button
   
    // $('.footer-fixed').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


  // theme

   let card = document.querySelectorAll( '.card' );


  const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme','dark');
    document.querySelector('.navbar').classList.remove('shadow-lg');
    document.querySelector('.navbar').classList.remove('shadow');
    document.querySelector('.navbar').classList.add('pdf-border-zinc-800');
    document.querySelector('.navbar').classList.add('border-bottom');
    
    localStorage.setItem('data-theme','dark');

    for(let x = 0; x < card.length; x++ ) {
        card[x].classList.remove('shadow-lg');
        card[x].classList.remove('border-0');
        card[x].classList.add('shadow-md');
        card[x].classList.add('pdf-border-zinc-700');
        card[x].classList.add('shadow-red-400');
        
    }
  }


  const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme','light');
    document.querySelector('.navbar').classList.add('shadow-lg');
    document.querySelector('.navbar').classList.remove('border-bottom');
    document.querySelector('.navbar').classList.add('pdf-border-zinc-800');
    document.querySelector('.navbar').classList.add("shadow-zinc-200","shadow-lg");

    localStorage.setItem('data-theme','light');

     for(let x = 0; x < card.length; x++ ) {
        card[x].classList.add('shadow-lg');
        card[x].classList.add('border-0');
        card[x].classList.remove('shadow-md');
        card[x].classList.add('pdf-border-zinc-700');
        card[x].classList.add('shadow-red-400');
        
    }
  }

  
  let changeTheme = document.getElementById('changeTheme');

  changeTheme.addEventListener( 'change', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'light') {
      changeThemeToDark();
     } else {
      changeThemeToLight()
    }
  })


  let theme = localStorage.getItem('data-theme');

  if (theme ===  'dark'){
    changeThemeToDark()
    changeTheme.setAttribute('checked', 'checked')
  } else {
    changeThemeToLight()
  }

  // menu-icon

  let menuIcon = document.querySelector('.menu-icon')
  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('show');
  })

  // slick

 $('.portfolio').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// menu animate


// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
 
//   navbar.classList.toggle('active');
// }


// let navLinks = document.querySelectorAll('.navbar li a');

// window.onscroll = () =>{


//   navbar.classList.remove('active');

//   section.forEach(sec =>{

//     let top = window.scrollY;
//     let height = sec.offsetHeight;
//     let offset = sec.offsetTop - 150;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navLinks.forEach(links =>{
//         links.classList.remove('active');
//         document.querySelector('.navbar li a[href*='+id+']').classList.add('active');
//       });
//     };

//   });

// }