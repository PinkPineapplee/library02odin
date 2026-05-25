//make books move from right to left
   export function arrowNavigation(array){
    
    leftArrow.addEventListener("click",()=>{
      leftArrow.forEach(() => {
       //make library array items move to the left.
       let item = array.unshift(array[0]);
       array.push(item);
       console.log("hi I am left arrow");
       });
    });

    rightArrow.addEventListener("click",()=>{
       rightArrow.forEach(() => {
      //make array items move to the right.
       let item = array.pop(array.length);
       array.shift(item);
       console.log("hi I am right arrow");
       });
    });
  }