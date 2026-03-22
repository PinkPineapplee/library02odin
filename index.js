  const addNewBookBtn = document.querySelector("button#add-new");
  const leftArrow =document.querySelector(".left");
  const rightArrow =document.querySelector(".right")
  const dialog = document.querySelector("dialog")
  const submitBtn = document.querySelector("#submit")
  const titleInput = document.querySelector("#book-title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const currentGallary=document.getElementById("current-gallary");
  const libraryGallary=document.getElementById("library-gallary");
  const newGallary=document.getElementById("new-gallary");

const library = new Array();
const currentRead = new Array();
const newToLibrary = new Array();

//create a book constructor with a unique ID
function Book(title,author,pages, read){
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.content = []

}
console.log(Book);

//function that adds new book to library array
function addNewBook(title,author,pages){
    let newBook = new Book(title,author,pages);
      
    return newBook;
}

//show dialog modal for add new book form
addNewBookBtn.addEventListener("click", ()=>{
dialog.showModal();

});


// add event listener to get input values
 submitBtn.addEventListener("click",(event)=>{
  event.preventDefault();
   const bookInstance = addNewBook(titleInput.value, authorInput.value, pagesInput.value);
   library.push(bookInstance);
   dialog.close();
   

 })


 //create new card for book

   function createNewCard(book){
    let card = document.createElement("div");
    card.classList.add("card");
    // add book background image
    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    let info = document.createElement("div");
    info.classList.add("info");



}


    //write a function that loops through arrays and displays all cards in library[] into library gallary

 function diplayLib(){
    
    for ( let book in library){
     
      libraryGallary.textContent += createNewCard(book);
    }
 }



 // add books for the last five books to newtolibrary array
    function current(){
      if(Book.read === true){
        currentRead.push(library)
      }
    }
 // add books that is clicked to the current read array
 // move cards left and right


 // book prototype function that toggles a book instances read status

 Book.prototype.isRead = function(){
   card.addEventListener("click",()=>{
    Book.read = true;
    currentRead.push(Book)
   })
 }

 Book.prototype.bookInfo = function(){

 return `${this.title} writen by ${this.author} \n ${this.pages}.`;
  }
 