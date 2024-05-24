let horzontScroll = document.querySelector(".gallery-container");
let leftBth = document.getElementById("left-bth");
let rightBth = document.getElementById("right-bth");

rightBth.addEventListener('click', ()=> {
  horzontScroll.style.scrollBehavior = "smooth"
  horzontScroll.scrollLeft += 884 ;
});

leftBth.addEventListener('click', ()=> {
  horzontScroll.style.scrollBehavior = "smooth"
  horzontScroll.scrollLeft -= 884 ;
});