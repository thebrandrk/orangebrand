document.querySelector("#main")
.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#semicircle").style.top= `${dets.clientY}px`
        document.querySelector("#semicircle").style.left= `${dets.clientX}px`
        document.querySelector("#semicircle").style.mixBlendMode= "difference"
        document.querySelector("#semicircle").style.backgroundColor= "white"
    }
    window.requestAnimationFrame(abc)
});

// document.querySelectorAll("#orange")
// .forEach(function(elem){
//     elem.addEventListener("mousemove", function(){
//         document.querySelector("#semicircle").style.width= "70px"
//         document.querySelector("#semicircle").style.height= "70px"
//         document.querySelector("#semicircle").style.backgroundColor= "white"
//         document.querySelector("#semicircle").style.mixBlendMode= "difference"
//     }
//     );
// });

// document.querySelectorAll("#orange")
// .forEach(function(elem){
//     elem.addEventListener("mouseleave", function(){
//         document.querySelector("#semicircle").style.width= "20px"
//         document.querySelector("#semicircle").style.height= "20px"
//     }
//     );
// });







var tl = gsap.timeline();

tl.from("#nav", {
    opacity: 0, 
    y: -100, 
    duration: 1,
    color: "rgba(73, 226, 53, 0.986)",
    ease: "Expo.easeInOut",
  })

  .from("#orange #move", {
    opacity:0,
    x: -900,
    duration:1,
    ease: "Expo.easeOut",
})

.from("#bottle", {
    opacity : 0,
    top: "800px",
    duration : 0.8,
    ease: "Expo.easeOut",
})
.from("#text" ,{
    opacity:0,
    y:50,
    ease: "Expo.easeOut",
    duration : 0.5
})
.from("#orange h2", {
    opacity : 0,
})


.from("#mian button", {
    opacity : 0,
    // x :-200,
    // duration : 6,
})


gsap.from("#one", {
    opacity: 0, 
    x: 300, 
    // duration: 1,
    delay: 2,
    ease: "Expo.easeInOut",
  })

gsap.from("#two", {
    opacity : 0,
    x :-300,
    // duration : 1,
    delay: 2,

})

gsap.from("#three", {
    opacity : 0,
    x :-500,
    delay: 2,
    // duration : 1
})

gsap.from("#five", {
    opacity : 0,
    x :500,
    delay: 2,
    // duration : 1
})

gsap.from("#four", {
    opacity : 0,
    y :200,
    delay: 2,
    // duration : 1
})

gsap.from("#arrow1", {
    opacity : 0,
    x :-200,
    // duration : 1
})

gsap.from("#arrow2", {
    opacity : 0,
    x :200,
    // duration : 1
})
gsap.to("#arrow1", {
    rotate: "360deg",
    duration: 3,
    ease: Expo.easeInOut,
})
gsap.to("#arrow2", {
    rotate: "360deg",
    duration: 3,
    ease: Expo.easeInOut,
})

gsap.to("#search", {
    rotate: "360deg",
    duration: 3,
    color : "orange",
    ease: Expo.easeInOut,
})


// gsap.to("#menu a", {
//     // rotate: "360deg",
//     duration: 3,
//     color : "rgba(73, 226, 53, 0.986)",
//     ease: Expo.easeInOut,
// })


gsap.to("#brand h1", {
    // rotate: "360deg",
    duration: 3,
    color : "orange",
    ease: Expo.easeInOut,
})

// gsap.to("#cart h1", {
//     // rotate: "360deg",
//     duration: 3,
//     color : "rgba(73, 226, 53, 0.986)",
//     ease: Expo.easeInOut,
// })

gsap.to("#move", {
    // rotate: "360deg",
    duration: 3,
    color : "#FE7C01",
    ease: Expo.easeInOut,
})




