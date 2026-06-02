 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");


//make books move from right to left
   export function arrowNavigation(array){
     
      console.log("entered arrow nav function")
    
      leftArrow.forEach(arrow => arrow.addEventListener("click",()=>{
       //make library array items move to the left.
      let item = array.unshift(array.at(0));
       array.push(item);
       console.log("hi I am left arrow");
       })
      )

    
       rightArrow.forEach(arrow => arrow.addEventListener("click",()=>{
      //make array items move to the right.
        let item = array.pop(array.at(array.length));
       array.shift(item);
       console.log("hi I am right arrow");
       })
    );
  }