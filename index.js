// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".listNavbar-Items").css("background" , "transparent");
//         }
  
//         else{
//             $(".listNavbar-Items").css("background" , "white");  	
//         }
//     })
//   })

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".listNavbar-Items");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });


function scrollChange(){
    const navbar = document.getElementById("navbar");
    // const height = navbar.scrollHeight;
    
    document.addEventListener("scroll", (event) => {
        const scroll = window.pageYOffset
        const scrollTop = navbar.scrollTop;
    
        console.log('scroll', scroll);

        if(scroll > 100){
            navbar.classList.add("bg-white")
        }else{
            navbar.classList.remove("bg-white")

        }
    
    })
}

scrollChange()

// if(scrollTop > 20){
//     navbar.classList.add("bg-white")
// }else{
//     navbar.classList.remove("bg-white")
// }
