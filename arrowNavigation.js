 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");
  const libLeft = document. querySelector("#lib-left");
  const librit = document. querySelector("#lib-right");

//make books move from right to left
   export function arrowNavigation(gallary){
     
      console.log("entered arrow nav function");

     leftArrow.forEach(arrow => arrow.addEventListener("click", ()=>{
      gallary.scrollLeft += 300;
     }));

     rightArrow.forEach(arrow => arrow.addEventListener("click", ()=>{
      gallary.scrollRight -= 300;
     }));
      }