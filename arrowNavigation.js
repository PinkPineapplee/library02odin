 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");
  const libLeft = document. querySelector("#lib-left");
  const librit = document. querySelector("#lib-right");

//make books move from right to left
   export function arrowNavigation(array, gallary){
     
      console.log("entered arrow nav function");

      libLeft.addEventListener("click",()=>{
       
      //make library array items move to the left.
      let itemLeft = array.shift(0);
      console.log(itemLeft)
      gallary.remove(itemLeft);

       array.push(itemLeft);
       gallary.appendChild(itemLeft);
       console.log("hi I am left arrow");
      
       })
      

    
       librit.addEventListener("clicks",()=>{
       
      //make array items move to the right.
        let itemRit = array.pop(array.length - 1);
         gallary.remove(itemRit);

         array.unshift(itemRit);
         gallary.appendChild(itemRit);
       console.log("hi I am right arrow"); 
        })
         
  }