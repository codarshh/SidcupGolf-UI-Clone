gsap.registerPlugin(ScrollTrigger);

var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(det) {
    cursor.style.left = det.clientX + "px";
    cursor.style.top = det.clientY + "px";
     cursorBlur.style.left = det.clientX - 150 + "px";
    cursorBlur.style.top = det.clientY - 150 +"px";
});


gsap.to("#nav", {
    backgroundColor: "#080808d5",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
        // markers: true
    }
})

gsap.to("#main",{
    backgroundColor: "#080808",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -75%",
        scrub: 2,
    }
})