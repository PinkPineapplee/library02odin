 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");


//make books move from right to left
   export function arrowNavigation(array, gallary){
     
      console.log("entered arrow nav function")
    
      leftArrow.forEach(arrow => arrow.addEventListener("click",(e)=>{
        let clickedArrow = e.target;

        if (clickedArrow.isclicked() === true){
       //make library array items move to the left.
      let item = array.unshift(0);
       gallary.removeChild(item);

       array.push(item);
       gallary.appendChild(item);
      // array.forEach(book => displayBooks(array, book));

       console.log("hi I am left arrow");
      }
       })
      )

    
       rightArrow.forEach(arrow => arrow.addEventListener("click",(e)=>{
         let clickedArrow = e.target;

        if (clickedArrow.isclicked() === true){
      //make array items move to the right.
        let item = array.pop(array.length);
         gallary.removeChild(item);

         array.shift(item);
         gallary.appendChild(item);
      
       //array.forEach(book => displayBooks(array, book));
       console.log("hi I am right arrow");
       }
       })
       
    );
  }