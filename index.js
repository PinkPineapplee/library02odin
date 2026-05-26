import {arrowNavigation} from "./arrowNavigation.js";

console.log("No, I still work! you're just terrible at this. it's all you, babe!");

  const addNewBookBtn = document.querySelector("button#add-new");
  
  const libBox = document.querySelector(".lib-box");
  const currentBox = document.querySelector(".current-box");
  const newBox =document.querySelector(".new-box");

  const currentGallary = document.querySelector("#current-gallary");
  const libraryGallary = document.querySelector("#library-gallary");
  const newGallary = document.getElementById("new-galary");
  const formBtn = document.querySelector("#submit");
  const dialog = document.querySelector("dialog");
  const card = document.querySelectorAll(".card");

  let title = document.querySelector("#book_title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");

  
  const library = new Array();
  const currentRead = new Array();
  const newToLibrary = new Array();

  //expose module arrays to the window scope
  window.library = library;
  window.currentRead = currentRead;
  window.newToLibrary = newToLibrary;
  
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
     getNew();
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
    return `${this.title} writen by ${this.author}.`;
  };



 //create new card for book
   function createNewCard(book){
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;

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
      let bookCard = e.target.closest(".card");
      if (!bookCard) return;
      console.log(bookCard);
      const clickedId = bookCard.dataset.id;
      console.log(clickedId, ` is clickedid`);

      const clickedObj = library.find(book => book.id === clickedId);
      console.log(`this is bookClicked `, clickedObj);

      if(clickedObj.read === false){
          clickedObj.read = true;
          console.log(clickedObj,` is clickedObj`);

        // add books that is clicked to the current read array
          currentRead.push(clickedObj);
          displayBooks(currentRead,clickedObj);
          alert(`I know you want to read `+ clickedObj.title + `
                 right now but this library is for learn to code purposes 
                 only, it's not connected to any external library APIs or servers. 
                 Check again for future updates.`); 
             };


        //delete button to remove all card for gallary and array.
      delBtn.addEventListener("click", ()=>{
        card.remove();
        library.delete(clickedObj);
        //array.filter( e => e.target.id);
      })
        });
       return (card);
  }
  
   
 //get new function
  function getNew(){
   newToLibrary.push(library.slice( -1, library.length - 5));
   
   for (let book of newToLibrary){
      displayBooks(newToLibrary, book);
      console.log("hi I am displaying new books");
     }} 
 
 
  
  // connect page navigation to DOM
 libBox.addEventListener("mouseoover",  arrowNavigation(library));
 currentBox.addEventListener("mouseover", arrowNavigation(currentRead));
 newBox.addEventListener("mouseover", arrowNavigation(newToLibrary));
 
 
  
  
 