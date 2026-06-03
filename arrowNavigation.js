 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");


//make books move from right to left
   export function arrowNavigation(array, gallary){
     
      console.log("entered arrow nav function")
    
      leftArrow.forEach(arrow => arrow.addEventListener("click",(e)=>{
        let clickedArrow = e.target;

        if (clickedArrow.id === "history-left" || 
          clickedArrow.id === "lib-left" || 
          clickedArrow.id === "new-left"){

      //make library array items move to the left.
      let item = array.unshift(0);
      gallary.removeChild(item);

       array.push(item);
       gallary.appendChild(item);
       console.log("hi I am left arrow");
      } else {
        console.log(" arrow left is not working")
      }
       })
      )

    
       rightArrow.forEach(arrow => arrow.addEventListener("click",(e)=>{
         let clickedArrow = e.target;

        if (clickedArrow.id === "history-right" || 
          clickedArrow.id === "lib-right" || 
          clickedArrow.id === "new-right"){

      //make array items move to the right.
        let item = array.pop(array.length);
         gallary.removeChild(item);

         array.shift(item);
         gallary.appendChild(item);
       console.log("hi I am right arrow");
       }else {
        console.log(" arrow right is not working")
      }
       })
       
    );
  }