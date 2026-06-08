 const leftArrow = document.querySelectorAll(".left");
  const rightArrow = document.querySelectorAll(".right");
  const arrows = document.querySelectorAll(".arrow");
  const libLeft = document. querySelector("#lib-left");
  const librit = document. querySelector("#lib-right");

//make books move from right to left
   export function arrowNavigation(array, gallary){
     
      console.log("entered arrow nav function");

     let currentIndex = 0;
    
     function updateDisplay(action){
      gallary.textContent += gallary.action(array[currentIndex]);
       
     }
    

   libLeft.addEventListener("click",()=>{
    for( i = array.length; i <= array.length; i--){
      if (currentIndex > 0){
        currentIndex--;
      }else{
        currentIndex = array.length - 1;
      }
      updateDisplay(appendChild);
    }
   })


   librit.addEventListener("clicks",()=>{
    for (i = 0; i >= array.length; i++){
     if (currentIndex < array.length - 1){
      currentIndex++;
     }else {
      currentIndex = 0;
     }
     updateDisplay(remove);
    }
   })

    

    
    //   libLeft.addEventListener("click",()=>{
       
    //   //make library array items move to the left.
    //   let item = array.shift(0);
    //   console.log(item)
    //  // gallary.remove(item);

    //    array.push(item);
    //   // gallary.appendChild(item);
    //    console.log("hi I am left arrow");
      
    //    })
      

    
    //    librit.addEventListener("clicks",()=>{
       
    //   //make array items move to the right.
    //     let item = array.pop(array.length);
    //      gallary.remove(item);

    //      array.unshift(item);
    //      gallary.appendChild(item);
    //    console.log("hi I am right arrow"); 
    //    })
         
  }