
console.log("No, I still work! you're just terrible at this. it's all you.");

  const addNewBookBtn = document.querySelector("button#add-new");
  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right")
  
  const currentGallary = document.querySelector("#current-gallary");
  const libraryGallary = document.querySelector("#library-gallary");
  const newGallary = document.getElementById("new-galary");
  const formBtn = document.querySelector("#submit");
  const dialog = document.querySelector("dialog");

  let title = document.querySelector("#book_title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");

 
  const library = new Array();
  const currentRead = new Array();
  const newToLibrary = new Array();

//create a book constructor with a unique ID
function Book(title,author,pages){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.content = [];
    
}
 

//show dialog modal for add new book form
addNewBookBtn.addEventListener("click", ()=>{
dialog.showModal();

});

   
//function that adds new book to library array$
function addNewBook(){ 
  
formBtn.addEventListener("click",(event)=>{
   dialog.close();

   let bookInstance = new Book(title.value, author.value, pages.value);
  
    library.push(bookInstance); 
    displayBooks(library, bookInstance);
   
    console.log((bookInstance.title)+ " book has been added to library.");
    resetForm();
    
});
}addNewBook();

// reset form function
function resetForm(){
title.value = "";
author.value = "";
 pages.value = "";
 bookInstance = "";
}
   function displayBooks(array, book){
  
    if (array === library){
       console.log("displaying books in lib.");
     libraryGallary.appendChild(createNewCard(book));
    
    }else if(array === currentRead){
      console.log("displaying books in currentRead. ");
      currentGallary.appendChild(createNewCard(book));
      
    }else if(array === newToLibrary){
      console.log("displaying books in new to lib.");
       newGallary.appendChild(createNewCard(book));
      
    }
    return
   }

Book.prototype.bookInfo = function(){
    return `${this.title} writen by ${this.author} \n ${this.pages}.`;
  };



 //create new card for book
   function createNewCard(book){
    let card = document.createElement("div");
    card.classList.add("card");

    // add book background image
    let readBtn= document.createElement("button");
    let delBtn = document.createElement("button");

    readBtn.classList.add("readBtn");
    delBtn.classList.add("delBtn");
    
    let info = document.createElement("div");
    let p = document.createElement("p");
    info.classList.add("info");

    // append children to card
    info.append(p ,readBtn, delBtn);
    card.appendChild(info);

    p.textContent = `${book.bookInfo()}`;
   
    readBtn.textContent= "READ";
    delBtn.textContent = "DELETE";
    
   
   
   
    

     //eventlistener to card
    readBtn.addEventListener("click",(e)=>{
      let bookClick = e.target;
          bookClick.read = true;
        
         alert(`I Know you want to read ${bookClick.title}
             right now but this library is for learn to code purposes 
            only, it's not connected to any external library Apis or servers. 
            Check again for future updates.`); 

             current(bookClick);
        //delete button to remove all card for gallary and array.
      delBtn.addEventListener("click", (array)=>{
        card.remove();
        library.delete(bookClick.id);
        //array.filter( e => e.target.id)
      })
        });
        return card;
  }
  
   console.log(card);
 


 // add books for the last five books to newtolibrary array
    function current(book){
      if(this.read === true){
       
         // add bookt to current reas when clicked
          currentRead.push(book);
          displayBooks(currentRead, bookClick);
         
    } return
  }

 // add books that is clicked to the current read array
 
 
  //make books move from right to left
  function arrowNavigation(array){
    leftArrow.addEventListener("click",()=>{

       //make library array items move to the left.
       let item = array.unshift(array[0]);
       array.push(item);
    });

    rightArrow.addEventListener("click",()=>{
      //make array items move to the right.
       let item = array.pop(array.length);
       array.shift(item);
    });
  }
  arrowNavigation(library);
  arrowNavigation(newToLibrary);
  arrowNavigation(currentRead);

   //get new function
  function getNew(){
   newToLibrary = library.slice(Math.max(library.length - 5, 1));
  
   for (let book of newToLibrary){
     
  displayBooks(newToLibrary, book);
     };
 }getNew()
  
 