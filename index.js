  const addNewBookBtn = document.querySelector("button");
  const leftArrow =document.querySelector(".left");
    const rightArrow =document.querySelector(".right")
  const dialog = document.querySelector("dialog")
  const submitBtn = document.querySelector("#submit")
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

const library = new Array();
const currentRead = new Array();
const newToLibrary = new Array();

//create a book constructor with a unique ID
function Book(id, title,author,pages, read){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
console.log(Book);

//function that adds new book to library array
function addNewBook(title,author,pages){
    const newBook = new Book(Book.id, title.value, author.value, pages.value, false);
      
    return newBook;
}

//show dialog modal for add new book form
addNewBookBtn.addEventListener("click", ()=>{
dialog.showModal()
});


// add event listener to get input values
 submitBtn.addEventListener("click",()=>{
   const bookInstance = addNewBook();
   library.push(bookInstance);
   dialog.close();
   createNewCard(bookInstance);
 })


 //create new card for book

   function createNewCard(book){
    let card = document.createElement("div");
    card.classList
    // add book background image
    let delBtn = document.createElement("button");
    let info = document.createElement("div");



    //write a function that loops through arrays and displays all cards in library[] into library gallary

 function diplayLib(){
    
    for ( let book in library){
      
    }
 }
}





 // add books for the last book to newtolibrary array
 // add books that is clicked to the current read array
 // move cards left and right