gsap.to(".sub-heading",()=>{
    transform :translateX("0%");
    duration:"0.3s";
    ScrollTrigger:{
        scroll:"body";
        trigger:".sub-heading";
        start:"top 0%";
        end:"top 10%";
        markers:true;

    }

})